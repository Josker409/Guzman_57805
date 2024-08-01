import React from "react";

const Contacto = () => {
  return (
    <>
      <label className="correo" for="email">Correo Electronico</label>
      <input  type="email" id="email" name="email" required></input>

      <label for="subject">Asunto:</label>
      <input type="text" id="subject" name="subject" required></input>

      <label for="message">Mensaje:</label>
      <textarea id="message" name="message" rows="4" required></textarea>
      <button type="submit">Enviar</button>
    </>
  );
};

export default Contacto;