"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = exports.findOne = void 0;
const mongodb_1 = require("mongodb");
const cosmosUrl = "mongodb://equ-3000-cosmos-db:oTenIlhaPqgFkrjzVhDeuag5SWOaOle1lfdqsXK2n7laYGnTQpuFX4bUbgwd5moSrd5lqZKioryy4uPal8HzdQ%3D%3D@equ-3000-cosmos-db.documents.azure.com:10255/?ssl=true";
exports.findOne = async (uuid) => {
    const client = await mongodb_1.MongoClient.connect(cosmosUrl, {
        useNewUrlParser: true,
    }).catch((err) => {
        console.log(err);
    });
    if (!client) {
        return;
    }
    try {
        const db = client.db("equdb");
        let collection = db.collection("equcollection");
        let query = { name: "Volkswagen" };
        let res = await collection.findOne(query);
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        client.close();
    }
};
exports.findAll = async () => {
    const client = await mongodb_1.MongoClient.connect(cosmosUrl, {
        useNewUrlParser: true,
    }).catch((err) => {
        console.log(err);
    });
    if (!client) {
        return;
    }
    try {
        const db = client.db("equdb");
        let collection = db.collection("equcollection");
        let result = collection.find();
        console.log(result);
        return result;
    }
    catch (err) {
        console.log(err);
    }
    finally {
        client.close();
    }
};
//# sourceMappingURL=cosmos-client.js.map