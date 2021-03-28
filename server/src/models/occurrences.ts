import { mongoose } from '../database';
const { Schema } = mongoose;
import MUUID from 'uuid-mongodb';
import { Date } from 'mongoose';

export interface InstanceType extends mongoose.Document {
  animal_name: String;
  latitude: Number;
  longitude: Number;
  description: String;
  photos: String;
  was_found: Boolean;
  contact_name: String;
  contact_info: String;
  created_at: Date;
};

const OccurrencesSchema = new mongoose.Schema({
  _id: {
    type: 'object',
    value: { type: 'Buffer' },
    default: () => MUUID.v4().toString()
  },
  animal_name: {
    type: String,
    required: true
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  description: {
    type: String,
    required: true
  },
  photos: {
    type: String
  },
  was_found: {
    type: Boolean,
    required: true
  },
  highlighter_color: {
    type: String,
  },
  contact_name: {
    type: String,
    required: true
  },
  contact_info: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Occurrences = mongoose.model<InstanceType>('Occurrences', OccurrencesSchema);

export { Occurrences };