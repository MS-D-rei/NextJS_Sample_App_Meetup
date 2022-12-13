import Image from "next/image";
import Card from "@/components/ui/Card";
import styles from '@/styles/MeetupItem.module.css'

interface MeetupItemProps {
  title: string;
  image: string;
  address: string;

}

export default function MeetupItem({title, image, address}: MeetupItemProps) {
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <Image src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={styles.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  )
}