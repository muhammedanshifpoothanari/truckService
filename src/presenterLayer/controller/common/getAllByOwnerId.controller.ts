import { Request, Response } from 'express';
const { getAllByOwnerIdUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByOwnerIdCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByOwnerIdCntrl,'hdhdhhdhd');
    const id: string =req.params.id 
    const trucks = await wrappedFunction(id);
    console.log(trucks,'hdhdhhdhd');
    if (trucks) 
      return trucks;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
 getAllByOwnerIdCntrl
};