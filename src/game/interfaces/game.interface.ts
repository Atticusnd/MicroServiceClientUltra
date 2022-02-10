import { Document, ObjectId } from 'mongoose';
export interface Game extends Document {
  readonly title: string;
  readonly price: number;
  readonly tags: string[];
  readonly releaseDate: Date;
  readonly publisher: ObjectId;
  readonly created_at: Date;
}
