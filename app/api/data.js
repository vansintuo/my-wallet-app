// pages/api/data.js
import clientPromise from '../../lip/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('your-database-name');
    const collection = db.collection('your-collection-name');

    // Example: Fetch documents
    const data = await collection.find({}).toArray();

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
