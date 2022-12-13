import { useRouter } from 'next/router';
import styles from '@/styles/ShowDetails.module.css';

interface ShowDetailsProps {
  id: string;
}

export default function ShowDetailsButton({ id }: ShowDetailsProps) {
  const router = useRouter();

  const routerPushHandler = () => {
    router.push(`/meetups/${id}`);
  };

  return (
    <button className={styles.details} onClick={routerPushHandler}>
      Show Details
    </button>
  );
}
