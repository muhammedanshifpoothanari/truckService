const { getTruckModel: modelToCreateTruck } = require('../getTruckModel');
  
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
}
  
const createTruck = async (truckData: TruckDocument) => {
  if (!truckData) {
    throw new Error('truckData was not properly passed to the repository!');
  }

  const truckModel = modelToCreateTruck();

  try {
    const newTruck = new truckModel({
        ...truckData,
        isBlocked: false,
        isVerified: false,
        status: 'active',
        createdAt : new Date(),
        expiresAt: new Date(),
    });

    // Save the new truck to the database
    const doneTheJob = await newTruck.save();
    if(!doneTheJob)
    return false;
    // Return the newly created truck
    return true;
  } catch (error) {
    throw new Error(`Error in creating the truck in the database: ${error}`);
  }
};

module.exports = {
    createTruck,
};
