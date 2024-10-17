import { ThematicListI } from './ThematicList';
import { UserI } from './User';

export interface ProjectDetailsI {
  id: number;
  titulo: string;
  descricao: string;
  tematica: ThematicListI;
  finalizado: boolean;
  status: boolean;
  tematicaId: number;
  usuario: UserI;
}

export function newProjectDetails(
  id: number,
  titulo: string,
  descricao: string,
  tematica: ThematicListI,
  finalizado: boolean,
  status: boolean,
  tematicaId: number,
  usuario: UserI
): ProjectDetailsI {
  return {
    id,
    titulo,
    descricao,
    tematica,
    finalizado,
    status,
    tematicaId,
    usuario,
  };
}
