import { Document } from 'mongoose';
export interface Game extends Document {
  readonly title: string;
  readonly price: number;
  readonly tags: [string];
  readonly releaseDate: Date;
  readonly created_at: Date;
}
