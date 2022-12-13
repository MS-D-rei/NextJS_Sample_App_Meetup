import Image from "next/image";
import Card from "@/components/ui/Card";
import styles from '@/styles/MeetupItem.module.css'

interface MeetupItemProps {
  id: string;
  title: string;
  image: string;
  address: string;
}

export default function MeetupItem({title, image, address}: MeetupItemProps) {
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <Image priority={true} src={image} alt={title} width={600} height={400}/>
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