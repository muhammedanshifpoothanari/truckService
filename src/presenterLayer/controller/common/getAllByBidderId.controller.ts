import { Request, Response } from 'express';
const { getAllByBidderIdUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByBidderIdCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByBidderIdCntrl,'hdhdhhdhd');
    const id: string =req.params.id 
    const truck = await wrappedFunction(id);
    console.log(truck,'hdhdhhdhd');
    if (truck) 
      return truck;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllByBidderIdCntrl
};