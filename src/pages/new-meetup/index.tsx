import MeetupForm from "@/components/meetups/MeetupForm";
import { INewMeetup } from "@/components/meetups/types";

export default function NewMeetupPage() {
  const addMeetupHandler = (meetup: INewMeetup) => {
    console.log(meetup);
  }

  return (
    <MeetupForm onAddMeetup={addMeetupHandler} />
  )
}