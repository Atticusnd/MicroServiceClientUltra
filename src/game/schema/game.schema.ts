import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const GameModel = new mongoose.Schema({
  title: { type: String },
  price: { type: Number },
  tags: { type: Array },
  releaseDate: { type: Date },
  publisher: { type: Schema.Types.ObjectId, ref: 'Publisher' },
});
