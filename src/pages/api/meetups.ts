import { IMeetupMongoDB } from '@/components/meetups/types';
import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

// const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster-trial.k7igqc0.mongodb.net/udemy_nextjs_test?retryWrites=true&w=majority`;
// const client = new MongoClient(url);
const client = new MongoClient(process.env.DB_URL as string);

export default async function getMeetupsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      await client.connect();
      const db = client.db(process.env.DB_NAME);
      const meetupsCollection = db.collection(process.env.DB_COLLECTION_NAME as string);
      const meetups = await meetupsCollection.find().toArray() as IMeetupMongoDB[];
      // console.log(meetups);

      /*{
        _id: new ObjectId("63995d574aa2341aa652a8bc"),
        title: 'Meetup Test',
        image: 'https://images.unsplash.com/photo-1613082294483-fec382d8367e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        address: '6th Avenue',
        description: 'this is a test meetup'
      },*/

      res.status(201).json(meetups);
    } catch (error) {
      console.log(error);
    } finally {
      await client.close();
    }
  }
}
