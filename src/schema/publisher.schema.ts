import * as mongoose from 'mongoose';

export const PublisherModel = new mongoose.Schema({
  name: { type: String },
  siret: { type: Number },
  phone: { type: String },
});
