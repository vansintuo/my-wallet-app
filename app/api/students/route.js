import { NextResponse } from "next/server";
import clientPromise from "@/lip/mongodb";

// Fetch all students
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("students_db");

    const students = await db.collection("students").find({}).toArray();
    return NextResponse.json(students, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch students" }, { status: 500 });
  }
}

// Add a new student
export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("students_db"); 

    const body = await request.json(); 
    const { name, age, gpa } = body;

    if (!name || !age || !gpa) {
      return NextResponse.json(
        { error: "Missing required fields (name, age, gpa)" },
        { status: 400 }
      );
    }

    const result = await db.collection("students").insertOne({ name, age, gpa });
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add student" }, { status: 500 });
  }
}
