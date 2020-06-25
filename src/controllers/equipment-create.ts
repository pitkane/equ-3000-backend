import { v4 as uuidv4 } from "uuid";
import moment from "moment";

import * as Types from "../types";

export const equipmentCreate = async (
  payload: Types.EquipmentDTO
): Promise<Types.EquipmentDTO> => {
  const moro = "asdf";

  return {
    equipmentNumber: uuidv4(),
    address: "asdfasdf asdf",
    contractStartDate: moment().format(),
    contractEndDate: moment().format(),
    status: "RUNNING",
  };
};

// duplicate nononon
