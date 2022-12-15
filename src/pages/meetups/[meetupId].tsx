import MeetupDetail from '@/components/meetups/MeetupDetail';
import { IMeetup } from '@/components/meetups/types';
import { loadAllMeetupIds } from '@/lib/load-allMeetupIds';
import { loadAllMeetups } from '@/lib/load-allMeetups';
import { GetStaticPaths, GetStaticProps } from 'next';

// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'First Meetup',
//     image: '/images/avi-werde-hHz4yrvxwlA-unsplash.jpg',
//     address: 'Okinawa',
//     description: 'have fun in luxuary penthouse',
//   },
// ];

export default function Meetup({ meetup }: { meetup: IMeetup }) {
  return (
    <MeetupDetail
      title={meetup.title}
      image={meetup.image}
      address={meetup.address}
      description={meetup.description}
    />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // fetch all meetups id
  const allMeetupIds = await loadAllMeetupIds();
  const allMeetupIdsPaths = allMeetupIds.map((meetupIdObject) => ({
    params: meetupIdObject,
  }));
  console.log(allMeetupIdsPaths);
  
  return {
    // paths contains all meetupIds
    paths: allMeetupIdsPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // get a single meetup data
  const meetupId = context.params?.meetupId;
  const meetups = await loadAllMeetups();
  const meetup = meetups.find((meetup) => meetup.id === meetupId);
  console.log(meetup);

  // console.log is shown only terminal, not browser because this code run in build time.
  // console.log(meetupId);
  // fetch the meetup based on id
  return {
    props: {
      meetup: meetup,
    },
  };
};
