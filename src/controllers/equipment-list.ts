import { v4 as uuidv4 } from "uuid";
import moment from "moment";

import * as Types from "../types";

export const equipmentList = async (
  payload: Types.EquipmentListPayload
): Promise<Types.EquipmentDTO[]> => {
  return [
    {
      equipmentNumber: uuidv4(),
      address: "asdfasdf asdf",
      contractStartDate: moment().format(),
      contractEndDate: moment().format(),
      status: "RUNNING",
    },
    {
      equipmentNumber: uuidv4(),
      address: "asdfasdf asdf",
      contractStartDate: moment().format(),
      contractEndDate: moment().format(),
      status: "RUNNING",
    },
    {
      equipmentNumber: uuidv4(),
      address: "asdfasdf asdf",
      contractStartDate: moment().format(),
      contractEndDate: moment().format(),
      status: "RUNNING",
    },
  ];
};
