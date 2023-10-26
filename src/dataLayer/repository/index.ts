const {blockTruckById: blockTruckByIdRepo } = require('./adminSpecifcRepo/block.repo');
const {unBlockTruckById: unBlockTruckByIdRepo } = require('./adminSpecifcRepo/unBlock.repo');
const {unVerifyTruckById: unVerifyTruckByIdRepo } = require('./adminSpecifcRepo/unVerify.repo');
const {verifyTruckById: verifyTruckByIdRepo } = require('./adminSpecifcRepo/verify.repo');

const { getAll: getAllRepo } = require('./commonRepo/getAll.repo');
const { getAllByBidderId: getAllByBidderIdRepo } = require('./commonRepo/getAllByBidderId.repo');
const { getAllByTruckName: getAllByTruckNameRepo } = require('./commonRepo/getAllByTruckName.repo');
const {getAllByTruckType: getAllByTruckTypeRepo } = require('./commonRepo/getAllByTruckType.repo');
const {getAllByOwnerId : getAllByOwnerIdRepo } = require('./commonRepo/getAllByOwnerId.repo');
const {getAllByStartingPoint: getAllByStartingPointRepo } = require('./commonRepo/getAllByStartingPoint.repo');
const {getAllByStartingPointPostal: getAllByStartingPointPostalRepo } = require('./commonRepo/getAllByStartingPointPostalCode.repo');
const {getAllByLoadId: getAllByLoadIdRepo } = require('./commonRepo/getAllByLoadId.repo');
const {getAllByWeight: getAllByWeightRepo } = require('./commonRepo/getAllByWeight.repo');
const {getByTruckId: getByTruckIdRepo } = require('./commonRepo/getById.repo');

const {createTruck: createTruckRepo } = require('./userSpecificRepo/set.repo');
const {updateTruck: updateTruckRepo } = require('./userSpecificRepo/update.repo');

module.exports = {
    blockTruckByIdRepo,
    unBlockTruckByIdRepo,
    unVerifyTruckByIdRepo,
    verifyTruckByIdRepo,
    getAllRepo,
    getAllByBidderIdRepo,
    getAllByTruckNameRepo,
    getAllByTruckTypeRepo,
    getAllByOwnerIdRepo,
    getAllByStartingPointRepo,
    getAllByStartingPointPostalRepo,
    getAllByLoadIdRepo,
    getAllByWeightRepo,
    getByTruckIdRepo,
    createTruckRepo,
    updateTruckRepo
}
