import MeetupList from '@/components/meetups/MeetupList';
import { IMeetup } from '@/components/meetups/types';
import { GetStaticProps } from 'next';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image: '/images/avi-werde-hHz4yrvxwlA-unsplash.jpg',
    address: 'Okinawa',
    description: 'have fun in luxuary penthouse',
  },
];

export default function HomePage({ meetups }: { meetups: IMeetup[] }) {
  return (
    <>
      <MeetupList meetups={meetups} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // fetch data
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
};

/* https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props */
/* server side rendering is for secure content like auth, or data which is changed every second like stock market. */
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const request = context.req;
//   const response = context.res;

//   // fetch data
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };
