import Image from "next/image";
import styles from '@/styles/MeetupDetail.module.css'

interface MeetupDetailProps {
  title: string;
  image: string;
  address: string;
  description: string;
}

export default function MeetupDetail({title, image, address, description}: MeetupDetailProps) {
  return (
    <section className={styles.detail}>
      <Image src={image} width={600} height={400} alt={title} />
      <h2>{title}</h2>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  )
}