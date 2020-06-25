import Boom from "@hapi/boom";

import { deleteAll } from "../cosmos-client";
import * as Types from "../types";

export const equipmentDeleteAll = async (): Promise<any | Boom.Boom> => {
  const result = await deleteAll();

  if (result === true) return { great: "success" };
  else return Boom.internal("Failed to delete objects");
};
