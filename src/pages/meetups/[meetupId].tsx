import MeetupDetail from '@/components/meetups/MeetupDetail';
import { IMeetup } from '@/components/meetups/types';
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
  return {
    // paths contains all meetupId
    paths: [{ params: { meetupId: 'm1' } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const meetupId = context.params?.meetupId;

  // console.log is shown only terminal, not browser because this code run in build time.
  // console.log(meetupId);
  // fetch the meetup based on id
  return {
    props: {
      meetup: {
        id: meetupId,
        title: 'First Meetup',
        image: '/images/avi-werde-hHz4yrvxwlA-unsplash.jpg',
        address: 'Okinawa',
        description: 'have fun in luxuary penthouse',
      },
    },
  };
};
