import mongoose, { Model } from 'mongoose';

interface LoadHistory {
  load: {
    loadId: String;
  };
  startedAt: Date;
  deliveredAt: Date;
}

interface Bid {
  userId: String;
  bidAmount: Number;
  bidStatus: String;
  bidTime: Date;
}

interface TruckDocument extends Document {
  truckName: String;
  manufacturedBy: String;
  truckType: String;
  truckDetails: String;
  startingPoint: String;
  startPointPostalCode: Number;
  destination: String;
  ownerId: String;
  permit: [String];
  permittedWeight: Number;
  registeredNumber: String;
  advanceRequired: Boolean;
  mileage: String;
  expectedPricePerTonneKm: Number;
  truckHistory: LoadHistory[];
  isBlocked: Boolean;
  isVerified: Boolean;
  createdAt: Date;
  expiresAt: Date;
  status: String;
  bids: Bid[];
}



// Create a Mongoose model for the truck
const getTruckModel = (): Model<TruckDocument> => {
    const entityName = 'truckInfo';
    const { truckSchema } = require('../database/schema/truckInfo.schema');
    console.log('jhdhkjdxcfjkcfv');
    if (!truckSchema)
        throw new Error('truck schema not found!');
    
    return mongoose.model<TruckDocument>(entityName, truckSchema);
};
module.exports = {
    getTruckModel
}