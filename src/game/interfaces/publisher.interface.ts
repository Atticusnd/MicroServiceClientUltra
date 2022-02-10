import { Document } from 'mongoose';
export interface Publisher extends Document {
  readonly name: string;
  readonly siret: number;
  readonly phone: string;
  readonly created_at: Date;
}
