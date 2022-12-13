import Image from 'next/image';
import Card from '@/components/ui/Card';
import styles from '@/styles/MeetupItem.module.css';
import ShowDetailsButton from '@/components/meetups/ShowDetails';

interface MeetupItemProps {
  id: string;
  title: string;
  image: string;
  address: string;
}

export default function MeetupItem({
  id,
  title,
  image,
  address,
}: MeetupItemProps) {
  // console.log('MeetItem rendered')

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <Image
            priority={true}
            src={image}
            alt={title}
            width={600}
            height={400}
          />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={styles.actions}>
          {/* <button onClick={showDetailsHander}>Show Details</button> */}
          <ShowDetailsButton id={id} />
        </div>
      </Card>
    </li>
  );
}
