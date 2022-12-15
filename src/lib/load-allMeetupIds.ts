import { IMeetupIdsMongoDB } from '@/components/meetups/types';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DB_URL as string);

export async function loadAllMeetupIds() {
  try {
    await client.connect();
    const db = client.db(process.env.DB_NAME);
    const meetupsCollection = db.collection(
      process.env.DB_COLLECTION_NAME as string
    );
    const allMeetupsMongoDB = (await meetupsCollection
      .find()
      .toArray()) as IMeetupIdsMongoDB[];
    // console.log(allMeetupsMongoDB);
    const allMeetupIds = allMeetupsMongoDB.map((meetupMongoDB) => ({
      meetupId: meetupMongoDB._id.toString(),
    }));
    // console.log(allMeetupIds);
    /*[
      { meetupId: '63995d574aa2341aa652a8bc' },
      { meetupId: '63995e534aa2341aa652a8bd' },
      { meetupId: '6399b6b84aa2341aa652a8be' }
    ]*/

    return allMeetupIds;
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
