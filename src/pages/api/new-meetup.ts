import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

// MongoDB Insert and View a Document
// https://www.mongodb.com/docs/atlas/tutorial/insert-data-into-your-cluster/

interface IResMessage {
  message: string;
}

interface IData {
  title: string;
  image: string;
  address: string;
  description: string;
}

// Code in this file never end up on the client side, but for security on Github,
// use process.env.xxx as the alternate of private info.
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster-trial.k7igqc0.mongodb.net/udemy_nextjs_test?retryWrites=true&w=majority`;
const client = new MongoClient(url);

const dbName = 'udemy_nextjs_test';

export default async function newMeetupInsertHander(
  req: NextApiRequest,
  res: NextApiResponse<IResMessage>
) {
  if (req.method === 'POST') {
    try {
      const data: IData = req.body;
      // const { title, image, address, description } = data;

      await client.connect();
      console.log('Connected correctly to server');

      const db = client.db(dbName);
      const meetupsCollection = db.collection('meetups');
      const result = await meetupsCollection.insertOne(data);
      console.log(result);

      res.status(201).json({message: 'Meetup successfully inserted'});
    } catch (error) {
      console.log(error);
    } finally {
      await client.close();
    }
  }
}
