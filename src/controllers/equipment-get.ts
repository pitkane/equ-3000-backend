import Boom from "@hapi/boom";

import { findOne } from "../cosmos-client";
import * as Types from "../types";

export const equipmentGet = async (
  payload: Types.EquipmentGetPayload
): Promise<Types.EquipmentDTO | Boom.Boom> => {
  const result = await findOne(payload.equipmentNumber);

  if (result === null) return Boom.notFound();

  return result;
};
