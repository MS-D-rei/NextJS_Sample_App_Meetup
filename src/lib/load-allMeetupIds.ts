import { IMeetupMongoDBJSON } from '@/components/meetups/types';

export async function loadAllMeetupIds() {
  const response = await fetch(`${process.env.LOCALHOST}/api/meetups`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const meetupsMongoDB: IMeetupMongoDBJSON[] = await response.json();
  const allMeetupIds = meetupsMongoDB.map((meetup) => ({ meetupId: meetup._id }));
  return allMeetupIds;
}
