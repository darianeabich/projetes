export interface ThematicListI {
  id: number;
  titulo: string;
  create_at: Date;
  update_at: Date;
  delete_at: Date;
}

export function newThematicList(
  id: number,
  titulo: string,
  create_at: Date,
  update_at: Date,
  delete_at: Date
): ThematicListI {
  return {
    id,
    titulo,
    create_at,
    update_at,
    delete_at,
  };
}
