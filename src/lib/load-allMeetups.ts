import { MongoClient } from "mongodb"
import { IMeetupMongoDB, IMeetup } from '@/components/meetups/types'

const client = new MongoClient(process.env.DB_URL as string);

export async function loadAllMeetups() {
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const meetupsCollection = db.collection(process.env.DB_COLLECTION_NAME as string);
    const meetupsMongoDB = await meetupsCollection.find().toArray() as IMeetupMongoDB[]
    // console.log(meetupsMongoDB);
    const meetups: IMeetup[] = meetupsMongoDB.map((meetupMongoDB) => ({
      id: meetupMongoDB._id.toString(),
      title: meetupMongoDB.title,
      image: meetupMongoDB.image,
      address: meetupMongoDB.address,
      description: meetupMongoDB.description,
    }))
    // console.log(meetups);
    return meetups;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(`Unexpected Error: ${error}`);
    }
  } finally {
    await client.close();
  }
}