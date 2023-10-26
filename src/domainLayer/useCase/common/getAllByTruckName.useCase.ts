const { getAllByTruckNameRepo: getAllByTruckNameRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByTruckNameWrapper  = require('../utility');
type functionTypeToGetAllByName = (...args: any[]) => Promise<any>;
const getAllByNameExecute: functionTypeToGetAllByName = async (dependency: typeof getAllByTruckNameRepository,truckName: string) => {
  console.log('getAllByTruckNameRepository:', );
  console.log('dependency:', dependency);
  const truckData = await dependency(truckName);

  if (truckData === null) {
    return false
  }

  return truckData;
};

module.exports = getAllByTruckNameWrapper(getAllByTruckNameRepository, getAllByNameExecute)

