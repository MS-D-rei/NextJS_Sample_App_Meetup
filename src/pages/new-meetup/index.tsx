import MeetupForm from '@/components/meetups/MeetupForm';
import { INewMeetup } from '@/components/meetups/types';

export default function NewMeetupPage() {
  // console.log('NewMeetupPage rendered');

  const addMeetupHandler = async (meetup: INewMeetup) => {
    console.log(meetup);

    try {
      const response = await fetch('/api/new-meetup', {
        method: 'POST',
        body: JSON.stringify(meetup),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <MeetupForm onAddMeetup={addMeetupHandler} />;
}
