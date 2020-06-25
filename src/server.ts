import Hapi from "@hapi/hapi";
import Inert from "@hapi/inert";
import Vision from "@hapi/vision";
import HapiSwagger from "hapi-swagger";
import Joi from "@hapi/joi";
import _ from "lodash";

import * as Types from "./types";
import { equipmentList } from "./controllers/equipment-list";
import { equipmentGet } from "./controllers/equipment-get";
import { equipmentCreate } from "./controllers/equipment-create";

const host = "0.0.0.0";
const port = 8080;

/** App */

export const createServer = async (): Promise<Hapi.Server> => {
  const serverOptions = {
    host,
    port,
  };

  const server: Hapi.Server = new Hapi.Server(serverOptions);
  await server.register(Inert as any);
  await server.register(Vision as any);
  await server.register({
    plugin: HapiSwagger,
  });

  // ROUTES

  server.route({
    method: "GET",
    path: "/api/equipment/search",
    handler: (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
      const payload: Types.EquipmentListPayload = {
        limit: _.toNumber(request.query.limit),
      };
      return equipmentList(payload);
    },
    options: {
      id: "equipmentList",
      description: "equipmentList",
      tags: ["equipment"],
      validate: {
        query: Joi.object({
          limit: Joi.number().required(),
        }),
      },
    },
  });

  server.route({
    method: "GET",
    path: "/api/equipment/{equipmentNumber}",
    handler: (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
      const payload: Types.EquipmentGetPayload = {
        equipmentNumber: request.params.equipmentNumber,
      };
      return equipmentGet(payload);
    },
    options: {
      id: "equipmentGet",
      description: "equipmentGet",
      tags: ["equipment"],
      validate: {
        params: Joi.object({
          equipmentNumber: Joi.string().required(),
        }),
      },
    },
  });

  server.route({
    method: "POST",
    path: "/api/equipment",
    handler: (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
      return equipmentCreate(request.payload as Types.EquipmentDTO);
    },
    options: {
      id: "equipmentCreate",
      description: "equipmentCreate",
      tags: ["equipment"],
      validate: {
        payload: Joi.object({
          equipmentNumber: Joi.string().required(),
          address: Joi.string().required(),
          contractStartDate: Joi.string().required(),
          contractEndDate: Joi.string().required(),
          status: Joi.string().valid("RUNNING", "STOPPED").required(),
        }),
      },
    },
  });

  return server;
};
