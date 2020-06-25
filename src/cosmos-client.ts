import { MongoClient, Collection } from "mongodb";

import * as Types from "./types";

const cosmosUrl =
  "mongodb://equ-3000-cosmos-db:oTenIlhaPqgFkrjzVhDeuag5SWOaOle1lfdqsXK2n7laYGnTQpuFX4bUbgwd5moSrd5lqZKioryy4uPal8HzdQ%3D%3D@equ-3000-cosmos-db.documents.azure.com:10255/?ssl=true";

const returnFields = [
  "equipmentNumber",
  "address",
  "contractStartDate",
  "contractEndDate",
  "status",
];
const getCollection = async (): Promise<Collection> => {
  const client = await MongoClient.connect(cosmosUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  if (!client) {
    throw new Error();
  }

  const db = client.db("equdb");

  let collection = db.collection("equcontainer");
  return collection;
};

export const createOne = async (payload: Types.EquipmentDTO) => {
  try {
    const collection = await getCollection();

    let result = await collection.insertOne({
      _id: payload.equipmentNumber,
      ...payload,
    });
    console.log(result);

    if (result.insertedCount === 1) return true;
    else return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const findOne = async (
  uuid: string
): Promise<Types.EquipmentDTO | null> => {
  try {
    const collection = await getCollection();

    let query = { equipmentNumber: uuid };

    let result = await collection.findOne<Types.EquipmentDTO>(query, {
      // remove _id
      fields: {
        _id: 0,
      },
    });

    console.log(result);

    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const findAll = async (): Promise<Types.EquipmentDTO[]> => {
  try {
    const collection = await getCollection();

    let result = collection.find<Types.EquipmentDTO>();

    console.log(result);

    // remove unwanted _id
    return result.project({ _id: 0 }).toArray();
  } catch (err) {
    console.log(err);
    return [];
  }
};
