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
const { getAllByBidderIdRepo: getAllByBidderIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByBidderWrapper = require('../utility');
const getAllByBidderIdExecute = (dependency, id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('getAllByBidderIdRepository:');
    console.log('dependency:', dependency);
    const truckData = yield dependency(id);
    if (truckData === null) {
        return false;
    }
    return truckData;
});
module.exports = getAllByBidderWrapper(getAllByBidderIdRepository, getAllByBidderIdExecute);
