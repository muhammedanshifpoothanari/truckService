const { getTruckModel : modelToGetTruckBidderId } = require('../getTruckModel')
const getAllByBidderId = async (userId: string) => {
    if (!userId)
        throw new Error('truck user id was not properly passed to the repository!');

    const truckModel = modelToGetTruckBidderId();
    try {
        const truckArray = await truckModel.find({
            'bids.userId': userId
          }).exec();
          
        if (!truckArray || truckArray.length === 0)
            return false;
        
        return truckArray;
    } catch (error) {
        throw new Error('Error in getting truck from the database by user id!');
    }
};

module.exports = {
    getAllByBidderId
}