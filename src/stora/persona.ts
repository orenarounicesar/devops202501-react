import { create } from 'zustand';
import { Persona, Register } from '../interface/persona.interface';
import { ActualizarPersona, ConsultarUsuario, RegistrarPersona } from '../services/persona.service';

interface usePersona {
  persona: Persona[];
  crear_persona: (data: Register) => Promise<void>;
  Consultar_persona: () => Promise<void>;
  actualizar_persona: (codigo: number, data: Partial<Register>) => Promise<void>;
}


export const usePersonaStore = create<usePersona>((set) => ({
  persona: [],
  Consultar_persona: async () => {
    try {
      const response = await ConsultarUsuario();
      const consultar_persona: Persona[] = response.data;
      set(() => ({ persona: consultar_persona })); // Asegurarse de que persona recibe un array válido
    } catch (error) {
      console.error("Error al consultar usuario:", error);
    }
  },

  crear_persona: async (data: Register) => {
    try {
      await RegistrarPersona(data);
      
      console.log("Persona creada con exito");
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  },

  actualizar_persona: async (codigo: number, data: Partial<Register>) => {
    try {
      await ActualizarPersona(codigo, data);
      console.log("Persona actualizada con éxito");
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
    }
  },

 
  
}));



