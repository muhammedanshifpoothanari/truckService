const { getAllByStartingPointPostalRepo: getAllByStartingPointPostalRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByStartingPointPostalWrapper  = require('../utility');
type functionToGetAllByStartingPointPostalRepo = (...args: any[]) => Promise<any>;
const getAllByStartingPointPostalExecute: functionToGetAllByStartingPointPostalRepo = async (dependency: typeof getAllByStartingPointPostalRepository, startPointPostalCode: number) => {
  console.log('getAllByStartingPointPostalRepository:', );
  console.log('dependency:', dependency);
  const truckData = await dependency(startPointPostalCode);

  if (truckData === null) {
   return false
  }

  return truckData;
};

module.exports = getAllByStartingPointPostalWrapper(getAllByStartingPointPostalRepository, getAllByStartingPointPostalExecute)
