const { getTruckModel : modelToGetLoadTruckId } = require('../getTruckModel')
const getAllByLoadId = async (loadId: string) => {
    if (!loadId)
        throw new Error('load id was not properly passed to the repository!');

    const truckModel = modelToGetLoadTruckId();
    try {
        const truckArray = await truckModel.find({
            'loadHistory.load.loadId' :loadId
          }).exec();
          
        if (!truckArray || truckArray.length === 0)
            return false;
        
        return truckArray;
    } catch (error) {
        throw new Error('Error in getting truck from the database by load id!');
    }
};

module.exports = {
    getAllByLoadId
}