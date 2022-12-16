import MeetupDetail from '@/components/meetups/MeetupDetail';
import { IMeetup } from '@/components/meetups/types';
import { loadAllMeetupIds } from '@/lib/load-allMeetupIds';
import { loadMeetup } from '@/lib/load-meetup';
import { GetStaticPaths, GetStaticProps } from 'next';

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
  // console.log(allMeetupIdsPaths);
  /*[
    { params: { meetupId: '63995d574aa2341aa652a8bc' } },
    { params: { meetupId: '63995e534aa2341aa652a8bd' } },
    { params: { meetupId: '6399b6b84aa2341aa652a8be' } }
  ]*/
  
  return {
    // paths contains all meetupIds
    paths: allMeetupIdsPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // get a single meetup data
  const meetupId = context.params?.meetupId as string;
  const meetup = await loadMeetup(meetupId); 

  // console.log is shown only terminal, not browser because this code run in build time.
  // console.log(meetupId);
  // fetch the meetup based on id
  return {
    props: {
      meetup: meetup,
    },
  };
};
