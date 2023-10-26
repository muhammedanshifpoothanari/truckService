const { getTruckModel : modelToGetTruckByName } = require('../getTruckModel')
const getAllByTruckName = async (truckName: string) => {
    if (!truckName)
        throw new Error('truck name was not properly passed to the repository!');

    const truckModel = modelToGetTruckByName();
    try {
        const truckArray = await truckModel.find({ truckName: truckName }).exec();
        if (!truckArray || truckArray.length === 0)
            return false;
        
        return truckArray;
    } catch (error) {
        throw new Error('Error in getting truck from the database by truck name!');
    }
};

module.exports = {
    getAllByTruckName
}