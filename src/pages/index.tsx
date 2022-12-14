import MeetupList from '@/components/meetups/MeetupList';
import { IMeetup } from '@/components/meetups/types';
import { loadMeetups } from '@/lib/load-meetups';
import { GetStaticProps } from 'next';

export default function HomePage({ meetups }: { meetups: IMeetup[] }) {
  return (
    <>
      <MeetupList meetups={meetups} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // to fetch data through API Route,
  // import function from other file not to use fetch here.
  // https://nextjs.org/docs/basic-features/data-fetching/get-static-props#write-server-side-code-directly
  const meetups = await loadMeetups();

  return {
    props: { meetups },
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
