import Layout from "@/components/layout/Layout";
import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image: '/images/avi-werde-hHz4yrvxwlA-unsplash.jpg',
    address: 'Okinawa',
    description: 'have fun in luxuary penthouse'
  }
]

export default function HomePage() {
  return(
    <Layout>
      <h2>Home page</h2>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  )
}