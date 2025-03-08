import api from "../axios";
import {  Register } from "../interface/persona.interface";

export const RegistrarPersona = (data: Register) => {
  return api.post("/crud", data); //corregir url
};

export const ConsultarUsuario = () => {
  return api.get("/crud");
};

export const ActualizarPersona = (codigo: number, data: Partial<Register>) => {
  return api.patch(`/crud/${codigo}`, data);
};

