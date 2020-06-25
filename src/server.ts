import * as Hapi from "@hapi/hapi";
import * as Inert from "@hapi/inert";
import * as Vision from "@hapi/vision";
import * as HapiSwagger from "hapi-swagger";
import * as Joi from "@hapi/joi";
import * as _ from "lodash";

import * as Types from "./types";
import { equipmentList } from "./controllers/equipment-list";

const host = "0.0.0.0";
const port = 8080;

/** App */

export const createServer = async (): Promise<Hapi.Server> => {
  const serverOptions = {
    host,
    port,
  };

  const swaggerOptions = {
    grouping: "tags",
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
      const payload: Types.GetEquipmentListRequest = {
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

  return server;
};

const start = async () => {};
