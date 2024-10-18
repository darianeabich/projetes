export interface TechniqueI {
  id: number;
  titulo: string;
  descricao: string;
  quando_usar: string;
  como_usar: string;
  material_necessario: string;
  tempo: string;
  tipo: string;
  status: boolean;
}

export function newTechnique(
  id: number,
  titulo: string,
  descricao: string,
  quando_usar: string,
  como_usar: string,
  material_necessario: string,
  tempo: string,
  tipo: string,
  status: boolean
) {
  return {
    id,
    titulo,
    descricao,
    quando_usar,
    como_usar,
    material_necessario,
    tempo,
    tipo,
    status,
  };
}
