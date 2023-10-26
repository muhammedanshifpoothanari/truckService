import mongoose, { Document, Schema } from 'mongoose';

interface LoadHistory {
  load: {
    loadId: string;
  };
  startedAt: Date;
  deliveredAt: Date;
}

interface Bid {
  userId: string;
  bidAmount: number;
  bidStatus: string;
  bidTime: Date;
}

interface TruckDocument extends Document {
  truckName: string;
  manufacturedBy: string;
  truckType: string;
  truckDetails: string;
  startingPoint: string;
  startPointPostalCode: number;
  destination: string;
  ownerId: string;
  permit: [string];
  permittedWeight: number;
  registeredNumber: string;
  advanceRequired: boolean;
  mileage: string;
  expectedPricePerTonneKm: number;
  truckHistory: LoadHistory[];
  isBlocked: boolean;
  isVerified: boolean;
  createdAt: Date;
  expiresAt: Date;
  status: string;
  bids: Bid[];
}

const TruckSchema = new Schema<TruckDocument>({
  truckName: String,
  manufacturedBy: String,
  truckType: String,
  truckDetails: String,
  startingPoint: String,
  startPointPostalCode: Number,
  destination: String,
  ownerId: String,
  permittedWeight: Number,
  registeredNumber: String,
  advanceRequired: Boolean,
  permit: [String],
  mileage: String,
  expectedPricePerTonneKm: Number,
  truckHistory: [
    {
      load: {
        loadId: String,
      },
      startedAt: Date,
      deliveredAt: Date,
    },
  ],
  isBlocked: Boolean,
  isVerified: Boolean,
  createdAt: Date,
  expiresAt: Date,
  status: String,
  bids: [
    {
      userId: String,
      bidAmount: Number,
      bidStatus: String,
      bidTime: Date,
    },
  ],
});

module.exports = {
    truckSchema: TruckSchema
};
