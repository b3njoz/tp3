import { useState } from "react";

const Formulario = () => {
  const [datoFormulario, setDatoFormulario] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    altura: "",
    email: ""
  });
  const [mensaje, setMensaje] = useState("");
  const [mensajeColor, setMensajeColor] = useState("");

  const cambiar = (e) => {
    setDatoFormulario({...datoFormulario,[e.target.id]: e.target.value});
  };

  const validarFormulario = () => {
    const { nombre, apellido, edad, altura, email } = datoFormulario;

    if (!nombre || nombre.length > 50) {
      return "El nombre no puede estar vacío y debe tener un máximo de 50 caracteres";
    }else if (!apellido || apellido.length > 50) {
      return "El apellido no puede estar vacío y debe tener un máximo de 50 caracteres";
    }else if (edad <= 0 || edad < 18) {
      return "La edad no puede ser negativa y debe ser mayor o igual a 18";
    }else if (altura <= 0 || altura > 230) {
      return "La altura no puede ser negativa y no puede ser mayor a 230 cm";
    }else if (!email || !email.includes("@")) {
      return "El correo electrónico no puede estar vacío y debe incluir '@'";
    }
  };

  const enviarCambios = (e) => {
    e.preventDefault();
    const mensajeValidacion = validarFormulario();
    if (mensajeValidacion) {
      setMensaje(mensajeValidacion);
      setMensajeColor("red");
    } else {
      setMensaje("Todos los datos son válidos.");
      setMensajeColor("green");
    }
  };

  return (
    <div>
      <p>Formulario de Validación</p>
      <form onSubmit={enviarCambios}>
        <input type="text" id="nombre" placeholder="Nombre" value={datoFormulario.nombre} onChange={cambiar}/>
        <input type="text" id="apellido" placeholder="Apellido" value={datoFormulario.apellido} onChange={cambiar}/>
        <input type="number" id="edad" placeholder="Edad" value={datoFormulario.edad} onChange={cambiar}/>
        <input type="number" id="altura" placeholder="Altura (cm)" value={datoFormulario.altura} onChange={cambiar}/>
        <input type="email" id="email" placeholder="Correo electrónico" value={datoFormulario.email} onChange={cambiar}/>
        <button type="submit">Enviar</button>
      </form>
      {mensaje && (<p style={{color: mensajeColor}}> {mensaje}</p>)}
    </div>
  );
};

export default Formulario
