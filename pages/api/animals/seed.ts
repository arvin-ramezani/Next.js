import type { NextApiRequest, NextApiResponse } from "next";
import Animal from "../../../models/animal";
import { connect } from "../../../utils/connection";
import { IAnimal } from "../../../utils/types";
import { animals as dummydata } from "../../../utils/animalData";
import db from "../../../utils/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      await db.connect();
      const animals = await Animal.find({}).lean();
      await db.disconnect();
      res.status(200).json(animals);
    } catch (error) {
      res.status(500).json("something went wrong");
      console.log(error);
    }
  }
}
