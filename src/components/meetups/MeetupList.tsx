import MeetupItem from './MeetupItem';
import { IMeetup } from './types';
import styles from '@/styles/MeetupList.module.css'

interface MeetupListProps {
  meetups: IMeetup[];
}

export default function MeetupList({ meetups }: MeetupListProps) {
  return (
    <ul className={styles.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}
