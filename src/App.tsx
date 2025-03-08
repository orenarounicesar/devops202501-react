import { usePersonaStore } from "./stora/persona";
import { Persona, Register } from "./interface/persona.interface";
import { useForm } from "./hook/useform";
import { useState } from "react";

function Registrar() {
  const { crear_persona, actualizar_persona, persona, Consultar_persona } = usePersonaStore();
  const [codigo, setCodigo] = useState<number | null>(null); // Estado para actualizar
  const { form, handleChange, setForm } = useForm<Partial<Register>>({});

  // Función para enviar formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (codigo) {
        await actualizar_persona(codigo, form);
        console.log("Persona actualizada");
      } else {
        await crear_persona(form as Register);
        console.log("Persona registrada");
      }

      // Resetear estado después de la actualización o registro
      setCodigo(null);
      setForm({});
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  // Función para cargar datos en el formulario al hacer clic en "Editar"
  const handleEditar = (persona: Persona) => {
    setCodigo(persona.codigo);
    setForm({
      tipo_id: persona.tipo_id,
      id: persona.id,
      apellido_1: persona.apellido_1,
      apellido_2: persona.apellido_2,
      nombre_1: persona.nombre_1,
      nombre_2: persona.nombre_2,
      sexo: persona.sexo,
      fecha_de_nacimiento: persona.fecha_de_nacimiento,
    });
  };

  return (
    <div className="container">
      <h2>{codigo ? "Actualizar Persona" : "Registrar Persona"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Tipo de Identificación</label>
        <select name="tipo_id" value={form.tipo_id || ""} onChange={handleChange}>
          <option value="">Seleccione el documento</option>
          <option value="Cedula">Cédula</option>
          <option value="Tarjeta_identidad">Tarjeta de Identidad</option>
        </select>

        <label>Identificación</label>
        <input type="text" name="id" value={form.id || ""} onChange={handleChange} />

        <label>Primer Nombre</label>
        <input type="text" name="nombre_1" value={form.nombre_1 || ""} onChange={handleChange} />

        <label>Segundo Nombre</label>
        <input type="text" name="nombre_2" value={form.nombre_2 || ""} onChange={handleChange} />

        <label>Primer Apellido</label>
        <input type="text" name="apellido_1" value={form.apellido_1 || ""} onChange={handleChange} />

        <label>Segundo Apellido</label>
        <input type="text" name="apellido_2" value={form.apellido_2 || ""} onChange={handleChange} />

        <label>Sexo</label>
        <select name="sexo" value={form.sexo || ""} onChange={handleChange}>
          <option value="">Seleccione el sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>

        <label>Fecha de Nacimiento</label>
        <input type="date" name="fecha_de_nacimiento" value={form.fecha_de_nacimiento || ""} onChange={handleChange} />

        <button type="submit">{codigo ? "Actualizar" : "Registrar"}</button>
      </form>

      {/* Listado de personas con opción para editar */}
      <h3>Personas Registradas</h3>
      <button onClick={Consultar_persona}>Actualizar Lista</button>
      <ul>
        {persona.map((p) => (
          <li key={p.codigo}>
            {p.nombre_1} {p.apellido_1} {p.sexo}
            <button onClick={() => handleEditar(p)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Registrar;
