import { Request, Response } from 'express';
const { getAllByTruckNameUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByNameCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByNameCntrl,'hdhdhhdhd');
    const truckName: string =req.body.truckName
    const trucks = await wrappedFunction(truckName);
    console.log(trucks,'hdhdhhdhd');
    if (trucks) 
      return trucks
  return false
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllByNameCntrl
};