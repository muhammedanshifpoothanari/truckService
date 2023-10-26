import { Request, Response } from 'express';
const { getAllByStartingPointPostalUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByStartingPointPostalUseCaseCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByStartingPointPostalUseCaseCntrl,'hdhdhhdhd');
    const startingPointPostalCode: number =req.body.startingPointPostalCode;

    const trucks = await wrappedFunction(startingPointPostalCode);
    console.log(trucks,'hdhdhhdhd');
    if (trucks) 
      return trucks
  return false
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllByStartingPointPostalUseCaseCntrl
};