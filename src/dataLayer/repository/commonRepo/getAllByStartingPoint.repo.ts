const { getTruckModel : modelToGetTruckByStartingPoint } = require('../getTruckModel')
const getAllByStartingPoint = async (startingPoint: string) => {
    if (!startingPoint)
        throw new Error('starting point was not properly passed to the repository!');

    const truckModel = modelToGetTruckByStartingPoint();
    try {
        const truckArray = await truckModel.find({ startingPoint: startingPoint }).exec();
        if (!truckArray || truckArray.length === 0)
            return false;

        return truckArray;
    } catch (error) {
        throw new Error('Error in getting truck from the database by truck startingpoint!');
    }
};

module.exports = {
    getAllByStartingPoint
}