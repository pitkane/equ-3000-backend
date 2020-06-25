import { v4 as uuidv4 } from "uuid";
import moment from "moment";

import { findAll } from "../cosmos-client";
import * as Types from "../types";

export const equipmentList = async (
  payload: Types.EquipmentListPayload
): Promise<Types.EquipmentDTO[]> => {
  const result = await findAll();

  return result;
};
