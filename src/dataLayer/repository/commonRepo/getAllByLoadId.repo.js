"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { getTruckModel: modelToGetLoadTruckId } = require('../getTruckModel');
const getAllByLoadId = (loadId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!loadId)
        throw new Error('load id was not properly passed to the repository!');
    const truckModel = modelToGetLoadTruckId();
    try {
        const truckArray = yield truckModel.find({
            'loadHistory.load.loadId': loadId
        }).exec();
        if (!truckArray || truckArray.length === 0)
            return false;
        return truckArray;
    }
    catch (error) {
        throw new Error('Error in getting truck from the database by load id!');
    }
});
module.exports = {
    getAllByLoadId
};
