import clientPromise from "@/lip/mongodb";

export default async function students(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("students_db"); // Replace "school" with your database name

    if (req.method === "GET") {
      // Fetch all students
      const students = await db.collection("students").find({}).toArray();
      res.status(200).json(students);
    } else if (req.method === "POST") {
      // Add a new student
      const { name, age, gpa } = req.body;
      const result = await db.collection("students").insertOne({ name, age, gpa });
      res.status(201).json(result);
    } else {
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: "Database connection failed" });
  }
}
