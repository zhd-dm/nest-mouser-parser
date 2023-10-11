import { MouserManufacturerName } from '@mouser-swagger/v2';
import { ManufacturerList } from '@prisma/client';

export type MouserAndDbTableManufacturesObject = {
  mouserManufactures: MouserManufacturerName[] | null;
  dbTableManufactures: ManufacturerList[] | null;
}
