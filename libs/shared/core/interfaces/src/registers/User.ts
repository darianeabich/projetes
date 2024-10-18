import { PerfilTypeEnum } from '@projetes/shared-enums';
import { ProjectDetailsI } from './ProjectDetails';

export interface UserI {
  id: number;
  nome: string;
  email: string;
  cod_institucional: string;
  senha: string;
  perfil: PerfilTypeEnum;
  status: boolean;
  projeto: ProjectDetailsI;
}

export function newUser(
  id: number,
  nome: string,
  email: string,
  cod_institucional: string,
  senha: string,
  perfil: PerfilTypeEnum,
  status: boolean,
  projeto: ProjectDetailsI
) {
  return {
    id,
    nome,
    email,
    cod_institucional,
    senha,
    perfil,
    status,
    projeto,
  };
}
