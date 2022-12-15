import { IMeetup, IMeetupMongoDB } from '@/components/meetups/types';
import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient(process.env.DB_URL as string);

export async function loadMeetup(meetupId: string) {
  try {
    // Connect to MongoDB
    await client.connect();
    // Select DB name
    const db = client.db(process.env.DB_NAME);
    // Select collection in the DB
    const meetupsCollection = db.collection(
      process.env.DB_COLLECTION_NAME as string
    );
    // Create ObjectId for search condition
    const meetupObjectId = new ObjectId(meetupId);
    // Get data array from the collection
    const meetupMongoDBArray = (await meetupsCollection
      // Extract data which has the ObjectId from the collection
      .find({ _id: meetupObjectId })
      .toArray()) as IMeetupMongoDB[];
    // Extract object data from the array
    const meetupMongoDB = meetupMongoDBArray.reduce((sum, current) => current);
    // Convert MongoDB style data to App style data format
    const meetup: IMeetup = {
      id: meetupMongoDB._id.toString(),
      title: meetupMongoDB.title,
      image: meetupMongoDB.image,
      address: meetupMongoDB.address,
      description: meetupMongoDB.description,
    };
    // console.log(meetup);

    return meetup;
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
