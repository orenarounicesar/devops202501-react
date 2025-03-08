export interface Persona {
  codigo: number;
  tipo_id: string;
  id: string;
  apellido_1: string;
  apellido_2: string;
  nombre_1: string;
  nombre_2: string;
  sexo: string;
  fecha_de_nacimiento: string;
}

export type Register = Omit<Persona, "codigo">;
