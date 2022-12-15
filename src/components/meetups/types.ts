import { ObjectId } from "mongodb";

export interface IMeetup {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

export interface INewMeetup {
  title: string;
  image: string;
  address: string;
  description: string;
}

export interface IMeetupMongoDB {
  _id: ObjectId;
  title: string;
  image: string;
  address: string;
  description: string;
}

export interface IMeetupMongoDBJSON {
  _id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

export interface IMeetupId {
  meetupId: string;
}

export interface IMeetupIdsMongoDB {
  _id: ObjectId;
}