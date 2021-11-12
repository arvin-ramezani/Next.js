// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Animal from "../../models/animal";
import { connect } from "../../utils/connection";
import { IAnimal } from "../../utils/types";
import {animals as dummydata} from '../../utils/animalData';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      await connect();
      const animals: IAnimal[] = await Animal.find({});
      res.status(200).json(animals);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  }

  if(req.method === "POST") {
    await connect();
    await Animal.deleteMany()
    await Animal.insertMany(dummydata)
  }
}
