import * as mongoose from 'mongoose';

export const GameModel = new mongoose.Schema({
  title: { type: String },
  price: { type: Number },
  tags: { type: [String] },
  releaseDate: { type: Date },
});
