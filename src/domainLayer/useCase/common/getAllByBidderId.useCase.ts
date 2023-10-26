const { getAllByBidderIdRepo: getAllByBidderIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByBidderWrapper  = require('../utility');
type functionIdToGetAllTruckByBidderId = (...args: any[]) => Promise<any>;
const getAllByBidderIdExecute: functionIdToGetAllTruckByBidderId = async (dependency: typeof getAllByBidderIdRepository, id: string) => {
  console.log('getAllByBidderIdRepository:', );
  console.log('dependency:', dependency);
  const truckData = await dependency(id);

  if (truckData === null) {
   return false
  }

  return truckData;
};

module.exports = getAllByBidderWrapper(getAllByBidderIdRepository, getAllByBidderIdExecute)

