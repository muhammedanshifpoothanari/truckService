const { updateTruckRepo: updateTruckRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const  updateWrapperToupdateTruck  = require('../utility');
type functionToUpdateTruck = (...args: any[]) => Promise<any>;
type dataAtupdateTruckUseCase =  {
  _id: string,
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
const updateTruckExecute: functionToUpdateTruck = async (dependency: typeof updateWrapperToupdateTruck,data: dataAtupdateTruckUseCase) => {
  console.log('updateTruckRepository:', );
  console.log('dependency:', dependency);
  const id: string = data._id
  console.log(data,'at usecase');
  
  const truckData = await dependency(id, data);

  if (truckData === null) {
   return false
  }

  return truckData;
};

module.exports = updateWrapperToupdateTruck(updateTruckRepository, updateTruckExecute)
