import MeetupList from '@/components/meetups/MeetupList';
import { IMeetup } from '@/components/meetups/types';
// import { apiLoadAllMeetups } from '@/lib/api-load-allMeetups';
import { loadAllMeetups } from '@/lib/load-allMeetups';
import { GetStaticProps } from 'next';
import Head from 'next/head';

export default function HomePage({ meetups }: { meetups: IMeetup[] }) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name='description' content='Can find highly active react meetups!' />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // to fetch data through API Route,
  // import function from other file not to use fetch here.
  // https://nextjs.org/docs/basic-features/data-fetching/get-static-props#write-server-side-code-directly
  const meetups = await loadAllMeetups();

  return {
    props: { meetups },
    revalidate: 10,
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
