const { getAllByLoadIdRepo: getAllByLoadIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByLoadIdWrapper  = require('../utility');
type functionToGetAllByLoadIdRepo = (...args: any[]) => Promise<any>;
const getAllByLoadIdExecute: functionToGetAllByLoadIdRepo = async (dependency: typeof getAllByLoadIdRepository, id: string) => {
  console.log('getAllByLoadIdRepository:', );
  console.log('dependency:', dependency);
  const loadData = await dependency(id);

  if (loadData === null) {
   return false
  }

  return loadData;
};

module.exports = getAllByLoadIdWrapper(getAllByLoadIdRepository, getAllByLoadIdExecute)

