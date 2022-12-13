import MeetupDetail from '@/components/meetups/MeetupDetail';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image: '/images/avi-werde-hHz4yrvxwlA-unsplash.jpg',
    address: 'Okinawa',
    description: 'have fun in luxuary penthouse',
  },
];

export default function Meetup() {
  return (
    <MeetupDetail
      title={DUMMY_MEETUPS[0].title}
      image={DUMMY_MEETUPS[0].image}
      address={DUMMY_MEETUPS[0].address}
      description={DUMMY_MEETUPS[0].description}
    />
  );
}
