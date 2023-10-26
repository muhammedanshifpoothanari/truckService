const { getTruckModel : modelToGetTruckByWeight } = require('../getTruckModel')
const getAllByWeight = async (weight: number , sort: number = 1) => {
    if (!weight && sort)
        throw new Error('weight or sort was not properly passed to the repository!');

    const truckModel = modelToGetTruckByWeight();
    try {
        let truckArray: any;
        if(weight){
             truckArray = await truckModel.find({permittedWeight: weight})
            .sort({ weight: sort }) 
            .exec();
        }else{
             truckArray = await truckModel.find({})
            .sort({ weight: sort }) 
            .exec();
        }
          
        if (!truckArray || truckArray.length === 0)
            return false;
        
        return truckArray;
    } catch (error) {
        throw new Error('Error in getting truck from the database by weight!');
    }
};

module.exports = {
    getAllByWeight
}