import { findAll } from "../cosmos-client";
import * as Types from "../types";

export const equipmentList = async (
  payload: Types.EquipmentListPayload
): Promise<Types.EquipmentDTO[]> => {
  const result = await findAll(payload.limit);

  return result;
};
