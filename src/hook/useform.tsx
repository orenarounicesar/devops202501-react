import { useState } from "react";

export const useForm = <T extends Record<string, any>>(initialState: T) => {
    const [form, setForm] = useState<T>(initialState);
  
    const handleChange = (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const { name, value } = e.target;
  
      setForm((prev) => ({
        ...prev,
        [name]:  name === "id_rol" ? Number(value) : value, // Convierte id_rol a número
      }));
    };

    // Nueva función para actualización manual
    const handleManualChange = (name: keyof T, value: any) => {
      setForm(prev => ({ ...prev, [name]: value }));
    };
  
    const resetForm = () => {
      setForm(initialState);
    };
  
    return { handleChange, form, resetForm, setForm, handleManualChange };
  };