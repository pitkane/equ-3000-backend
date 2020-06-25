import { v4 as uuidv4 } from "uuid";
import moment from "moment";

import { findOne } from "../cosmos-client";
import * as Types from "../types";

export const equipmentGet = async (
  payload: Types.EquipmentGetPayload
): Promise<Types.EquipmentDTO> => {
  const equipment = cos;
  return {
    equipmentNumber: uuidv4(),
    address: "asdfasdf asdf",
    contractStartDate: moment().format(),
    contractEndDate: moment().format(),
    status: "RUNNING",
  };
};
