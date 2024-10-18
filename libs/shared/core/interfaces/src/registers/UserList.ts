import { PerfilTypeEnum } from '@projetes/shared-enums';

export interface UserListI {
  id: number;
  nome: string;
  email: string;
  perfil: PerfilTypeEnum;
  status: boolean;
}

export function newUserList(
  id: number,
  nome: string,
  email: string,
  perfil: PerfilTypeEnum,
  status: boolean
) {
  return {
    id,
    nome,
    email,
    perfil,
    status,
  };
}
