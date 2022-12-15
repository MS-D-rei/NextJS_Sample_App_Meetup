import { IMeetup, IMeetupMongoDBJSON } from '@/components/meetups/types';

export async function apiLoadAllMeetups() {
  // Need absolute path when use in getStaticProps
  const response = await fetch(`${process.env.LOCALHOST}/api/meetups`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // console.log(response);

  const meetupsMongoDB: IMeetupMongoDBJSON[] = await response.json();
  // console.log(meetupsMongoDB);

  /*{
    _id: '63995d574aa2341aa652a8bc',
    title: 'Meetup Test',
    image: 'https://images.unsplash.com/photo-1613082294483-fec382d8367e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    address: '6th Avenue',
    description: 'this is a test meetup'
  },*/

  const meetups: IMeetup[] = meetupsMongoDB.map((meetup) => ({
    id: meetup._id,
    title: meetup.title,
    image: meetup.image,
    address: meetup.address,
    description: meetup.description,
  }));

  // console.log(meetups);

  /*{
    id: '63995d574aa2341aa652a8bc',
    title: 'Meetup Test',
    image: 'https://images.unsplash.com/photo-1613082294483-fec382d8367e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    address: '6th Avenue',
    description: 'this is a test meetup'
  },*/

  return meetups;
}
