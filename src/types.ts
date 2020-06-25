export interface EquipmentListPayload {
  limit: number;
}

export interface EquipmentGetPayload {
  equipmentNumber: string;
}

export interface EquipmentDTO {
  equipmentNumber: string;
  address: string;
  contractStartDate: string;
  contractEndDate: string;
  status: "RUNNING" | "STOPPED";
}
