import Boom from "@hapi/boom";

import { createOne } from "../cosmos-client";
import * as Types from "../types";

export const equipmentCreate = async (
  payload: Types.EquipmentDTO
): Promise<Types.EquipmentDTO | Boom.Boom> => {
  const result = await createOne(payload);

  if (result === true) return payload;
  else return Boom.internal("Failed to create object");
};
