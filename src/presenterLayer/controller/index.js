"use strict";
const { setCntrl: setController } = require('./userSpecific/create.controller');
const { updateCntrl: updateController } = require('./userSpecific/update.controller');
const { getAllCntrl: getAllController } = require('./common/getAll.controller');
const { getAllByBidderIdCntrl: getAllByBidderIdController } = require('./common/getAllByBidderId.controller');
const { getAllByNameCntrl: getAllByNameController } = require('./common/getAllByLoadName.controller');
const { getAllByTypeCntrl: getAllByTypeController } = require('./common/getAllByLoadType.controller');
const { getAllByOwnerIdCntrl: getAllByOwnerIdController } = require('./common/getAllByOwnerId.controller');
const { startingPointCntrl: startingPointController } = require('./common/getAllByStartingPoint.controller');
const { getAllByStartingPointPostalUseCaseCntrl: getAllByStartingPointPostalController } = require('./common/getAllByStartingPointPostalCode.controller');
const { getAllByLoadIdCntrl: getAllByLoadIdController } = require('./common/getAllByLoadId.controller');
const { getAllByWeightCntrl: getAllByWeightController } = require('./common/getAllByWeight.controller');
const { getByTruckIdCntrl: getByTruckIdController } = require('./common/getById.controller');
const { blockByIdCntrl: blockByIdController } = require('./adminSpecific/block.controller');
const { unBlockByIdCntrl: unBlockByIdController } = require('./adminSpecific/unBlock.controller');
const { unVerifyByIdCntrl: unVerifyByIdController } = require('./adminSpecific/unVerify.controller');
const { verifyByIdCntrl: verifyByIdController } = require('./adminSpecific/verify.controller');
module.exports = {
    setController,
    updateController,
    getAllController,
    getAllByBidderIdController,
    getAllByNameController,
    getAllByTypeController,
    getAllByOwnerIdController,
    startingPointController,
    getAllByStartingPointPostalController,
    getAllByLoadIdController,
    getAllByWeightController,
    getByTruckIdController,
    blockByIdController,
    unBlockByIdController,
    unVerifyByIdController,
    verifyByIdController
};
