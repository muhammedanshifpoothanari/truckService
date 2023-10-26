"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TruckSchema = new mongoose_1.Schema({
    truckName: String,
    manufacturedBy: String,
    truckType: String,
    truckDetails: String,
    startingPoint: String,
    startPointPostalCode: Number,
    destination: String,
    ownerId: String,
    permittedWeight: Number,
    registeredNumber: String,
    advanceRequired: Boolean,
    permit: [String],
    mileage: String,
    expectedPricePerTonneKm: Number,
    truckHistory: [
        {
            load: {
                loadId: String,
            },
            startedAt: Date,
            deliveredAt: Date,
        },
    ],
    isBlocked: Boolean,
    isVerified: Boolean,
    createdAt: Date,
    expiresAt: Date,
    status: String,
    bids: [
        {
            userId: String,
            bidAmount: Number,
            bidStatus: String,
            bidTime: Date,
        },
    ],
});
module.exports = {
    truckSchema: TruckSchema
};
