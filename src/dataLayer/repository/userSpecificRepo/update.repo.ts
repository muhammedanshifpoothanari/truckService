const { getTruckModel: modelToUpdateTruck } = require('../getTruckModel');

 type truckDataToUpdate = {
  truckName: string,
  manufacturedBy: string,
  truckType: string,
  truckDetails: string,
  startingPoint: string,
  startPointPostalCode: number,
  destination: string,
  ownerId: string,
  permittedWeight: number,
  registerednumber: string,
  advanceRequired: boolean,
  permit: [string],
  mileage: string,
  expectedPricePerTonneKm: number,
  truckHistory: [
    {
      load: {
        loadId: string,
      },
      startedAt: Date,
      deliveredAt: Date,
    },
  ],
  isBlocked: boolean,
  isVerified: boolean,
  createdAt: Date,
  expiresAt: Date,
  status: string,
  bids: [
    {
      userId: string,
      bidAmount: number,
      bidStatus: string,
      bidTime: Date,
    },
  ],
};


// Define a function to update truck information
const updateTruck = async (id: string, updatedTruckData: truckDataToUpdate) => {
  console.log(id,updatedTruckData,'jhjgvfreer');
  
  if (!id || !updatedTruckData) {
    throw new Error('ID and updated user data must be provided!');
  }

  const truckModel = modelToUpdateTruck();

  try {
    // Find the user by ID
    const truck = await truckModel.findById(id).exec();

    if (!truck) {
      throw new Error('truck not found in the database!');
    }

    // Update user fields based on the updatedUserData object
    for (const key of Object.keys(updatedTruckData)) {
      truck[key as keyof truckDataToUpdate] = updatedTruckData[key as keyof truckDataToUpdate];

    }

    // Save the updated user document
    const updatedTruck = await truck.save();
    if(updatedTruck === null)
    return false;

    return true;
  } catch (error) {
    throw new Error(`Error in updating the truck in the database: ${error}`);
  }
};

module.exports = {
  updateTruck,
};
