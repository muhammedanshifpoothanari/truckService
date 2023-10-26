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
const { getTruckModel: modelToUnBlockTruckById } = require('../getTruckModel');
const unBlockTruckById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id) {
        throw new Error('ID was not properly passed to the repository!');
    }
    console.log('reached block truck');
    const truckModel = modelToUnBlockTruckById();
    try {
        // Find the user with the specified ID
        const truck = yield truckModel.findById(id).exec();
        if (!truck) {
            // If no matching truck is found, return false
            return false;
        }
        // Update the IsBlocked field to true
        truck.isBlocked = false;
        yield truck.save();
        // truck is blocked
        return true;
    }
    catch (error) {
        throw new Error('Error in un blocking the truck by ID in the database!');
    }
});
module.exports = {
    unBlockTruckById
};
