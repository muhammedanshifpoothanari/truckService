const { updateUseCase : wrappedFunctionToUpdate } = require('../../../domainLayer/useCase/index');

const updateCntrl = async (data:any) => {
  try {
    const {
        _id,
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
       _id,
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
    const isUpdated = await wrappedFunctionToUpdate(newData);

    if (isUpdated)       
      return isUpdated;
  return false;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    updateCntrl
};