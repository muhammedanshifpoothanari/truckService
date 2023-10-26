const { createTruckRepo: createTruckRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const  wrapperTocreateTruck  = require('../utility');
type functionTypeToCreateTruck = (...args: any[]) => Promise<any>;
type dataAtCreateUseCase = {
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

const createTruckExecute: functionTypeToCreateTruck = async (dependency: typeof createTruckRepository,
   data: dataAtCreateUseCase) => {
  console.log('createLoadUseCase:', );
  console.log('dependency:', dependency);
  const truckData = await dependency(data);

  if (truckData === null) {
   return false
  }

  return truckData;
};

module.exports = wrapperTocreateTruck(createTruckRepository, createTruckExecute)

