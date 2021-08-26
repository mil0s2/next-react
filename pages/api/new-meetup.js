import { MongoClient } from "mongodb";

// /api/new-meetup
// POST requests only trigger this code due to the line 4
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    const client = await MongoClient.connect(
      "mongodb+srv://milosz:1234@cluster0.yvtko.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne({ data });
    console.log(result);

    client.close();

    res.status(201).js;

    on({ message: "Meetup inserted!" });
  }
}

export default handler;
