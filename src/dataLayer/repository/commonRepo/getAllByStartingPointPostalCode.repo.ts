const { getTruckModel : modelToGetTruckByStartingPointPostalCode } = require('../getTruckModel')
const getAllByStartingPointPostal = async (startPointPostalCode: number) => {
    if (!startPointPostalCode)
        throw new Error('starting point was not properly passed to the repository!');

    const truckModel = modelToGetTruckByStartingPointPostalCode();
    try {
        const truckArray = await truckModel.find({ startPointPostalCode: startPointPostalCode }).exec();
        if (!truckArray || truckArray.length === 0)
            return false;
        
        return truckArray;
    } catch (error) {
        throw new Error('Error in getting truck from the database by truck startingpoint!');
    }
};

module.exports = {
    getAllByStartingPointPostal
}