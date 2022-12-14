import React, { useRef } from 'react';
import Card from '@/components/ui/Card';
import { INewMeetup } from '@/components/meetups/types';
import styles from '@/styles/MeetupForm.module.css';
import { useRouter } from 'next/router';

interface MeetupFormProps {
  onAddMeetup: (meetup: INewMeetup) => void;
}

export default function MeetupForm({ onAddMeetup }: MeetupFormProps) {
  const router = useRouter();

  // console.log('MeetupForm rendered');
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);

  const submitHander = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current?.value as string;
    const enteredImage = imageInputRef.current?.value as string;
    const enteredAddress = addressInputRef.current?.value as string;
    const enteredDescription = descriptionInputRef.current?.value as string;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    onAddMeetup(meetupData);
    router.replace('/');
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHander}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input required type="text" id="title" ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="text" id="image" ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={addressInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea
            required
            name="description"
            id="description"
            rows={5}
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
