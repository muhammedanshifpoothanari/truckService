const { createUseCase : wrappedFunctionToSet } = require('../../../domainLayer/useCase/index');

const setCntrl = async (data:any) => {
  try {
    const {
      truckName,
      manufacturedBy,
      truckType,
      truckDetails,
      startingPoint,
      startPointPostalCode,
      destination,
      ownerId,
      permit: [string],
      permittedWeight,
      registeredNumber,
      advanceRequired,
      mileage,
      expectedPricePerTonneKm,
    } = data
    const newData = {
      truckName,
      manufacturedBy,
      truckType,
      truckDetails,
      startingPoint,
      startPointPostalCode,
      destination,
      ownerId,
      permit: [string],
      permittedWeight,
      registeredNumber,
      advanceRequired,
      mileage,
      expectedPricePerTonneKm,
    }
    const isCreated = await wrappedFunctionToSet(newData);

    if (isCreated) 
      return isCreated;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    setCntrl
};