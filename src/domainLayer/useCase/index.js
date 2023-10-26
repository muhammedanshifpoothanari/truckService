"use strict";
const getAllUseCase = require('./common/getAll.useCase');
const getAllByBidderIdUseCase = require('./common/getAllByBidderId.useCase');
const getAllByTruckNameUseCase = require('./common/getAllByTruckName.useCase');
const getAllByTruckTypeUseCase = require('./common/getAllByTruckType.useCase');
const getAllByOwnerIdUseCase = require('./common/getAllByOwnerId.useCase');
const getAllByStartingPointUseCase = require('./common/getAllByStartingPoint.useCase');
const getAllByStartingPointPostalUseCase = require('./common/getAllByStartingPointPostalCode.useCase');
const getAllByLoadIdUseCase = require('./common/getAllByLoadId.useCase');
const getAllByWeightUseCase = require('./common/getAllByWeight.useCase');
const getByTruckIdUseCase = require('./common/getById.useCase');
const createUseCase = require('./userSpecific/create.useCase');
const updateUseCase = require('./userSpecific/update.useCase');
const blockUseCase = require('./adminSpecific/block.useCase');
const unBlockUseCase = require('./adminSpecific/unBlock.useCase');
const unVerifyUseCase = require('./adminSpecific/unVerify.useCase');
const verifyUseCase = require('./adminSpecific/verify.useCase');
module.exports = {
    getAllUseCase,
    getAllByBidderIdUseCase,
    getAllByTruckNameUseCase,
    getAllByTruckTypeUseCase,
    getAllByOwnerIdUseCase,
    getAllByStartingPointUseCase,
    getAllByStartingPointPostalUseCase,
    getAllByLoadIdUseCase,
    getByTruckIdUseCase,
    getAllByWeightUseCase,
    createUseCase,
    updateUseCase,
    blockUseCase,
    unBlockUseCase,
    unVerifyUseCase,
    verifyUseCase
};
