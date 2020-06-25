"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAll = exports.findAll = exports.findOne = exports.createOne = void 0;
const mongodb_1 = require("mongodb");
const cosmosUrl = "mongodb://equ-3000-cosmos-db:oTenIlhaPqgFkrjzVhDeuag5SWOaOle1lfdqsXK2n7laYGnTQpuFX4bUbgwd5moSrd5lqZKioryy4uPal8HzdQ%3D%3D@equ-3000-cosmos-db.documents.azure.com:10255/?ssl=true";
const returnFields = [
    "equipmentNumber",
    "address",
    "contractStartDate",
    "contractEndDate",
    "status",
];
const getCollection = async () => {
    const client = await mongodb_1.MongoClient.connect(cosmosUrl, {
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
exports.createOne = async (payload) => {
    try {
        const collection = await getCollection();
        let result = await collection.insertOne(Object.assign({ _id: payload.equipmentNumber }, payload));
        console.log(result);
        if (result.insertedCount === 1)
            return true;
        else
            return false;
    }
    catch (err) {
        console.log(err);
        return false;
    }
};
exports.findOne = async (uuid) => {
    try {
        const collection = await getCollection();
        let query = { equipmentNumber: uuid };
        let result = await collection.findOne(query, {
            // remove _id
            fields: {
                _id: 0,
            },
        });
        console.log(result);
        return result;
    }
    catch (err) {
        console.log(err);
        return null;
    }
};
exports.findAll = async (limit) => {
    try {
        const collection = await getCollection();
        let result = collection.find().limit(limit);
        console.log(result);
        // remove unwanted _id
        return result.project({ _id: 0 }).toArray();
    }
    catch (err) {
        console.log(err);
        return [];
    }
};
exports.deleteAll = async () => {
    try {
        const collection = await getCollection();
        const findAll = await collection.find().toArray();
        for (const iterator of findAll) {
            await collection.remove({ equipmentNumber: iterator.equipmentNumber });
        }
        // findAll.toArray().map((document) => {});
        return true;
    }
    catch (err) {
        console.log(err);
        return false;
    }
};
//# sourceMappingURL=cosmos-client.js.map