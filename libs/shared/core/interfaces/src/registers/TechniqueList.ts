import { TechniqueTypeEnum } from '@projetes/shared-enums';

export interface TechniqueListI {
  id: number;
  titulo: string;
  tipo: TechniqueTypeEnum;
  status: boolean;
}

export function newTechniqueList(
  id: number,
  titulo: string,
  tipo: TechniqueTypeEnum,
  status: boolean
): TechniqueListI {
  return {
    id,
    titulo,
    tipo,
    status,
  };
}
