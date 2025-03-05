import { create } from 'zustand';
import { Persona, Register } from '../interface/persona.interface';
import { actualizarPersona, RegistrarPersona } from '../services/persona.service';

interface usePersona {
  persona: Persona[];
  crear_persona: (data: Register) => Promise<void>;
  update_persona: (data: Register) => Promise<void>;
}


export const usePersonaStore = create<usePersona>((set) => ({
  persona: [],

  crear_persona: async (data: Register) => {
    try {
      await RegistrarPersona(data);
      set((state) => ({
        persona: [...state.persona, data], // Agregar la nueva persona al estado
      }));
      console.log("Persona creada");
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  },

  update_persona: async (data: Register) => {
    try {
      await actualizarPersona(data);
      set((state) => ({
        persona: state.persona.map((p) => (p.id === data.id ? data : p)), // Reemplaza la persona actualizada en la lista
      }));
      console.log("Persona actualizada");
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
    }
  },
}));



