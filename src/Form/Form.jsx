import React, { useState, useEffect } from "react";
import style from "./Form.module.css";

// Expresión regular para validar el formato de correo electrónico
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Expresión regular para validar el formato de contraseña (mínimo 8 caracteres, al menos una letra y un número)
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const Form = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  function validate(inputs) {
    const errors = {};
    if (!inputs.email) {
      errors.email = "Debe haber un correo electrónico";
    } else if (!inputs.password) {
      errors.password = "Debe haber una contraseña";
    } else if (!regexEmail.test(inputs.email)) {
      errors.email = "Debe ser un correo electrónico válido";
    } else if (!regexPassword.test(inputs.password)) {
      errors.password = "Debe ser una contraseña válida";
    }
    return errors;
  }

  function handleChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...inputs,
      [e.target.name]: e.target.value
    }));
  }

  function handleSumbit(e) {
    e.preventDefault();
    const aux = Object.keys(errors);
    if (aux.length === 0) {
      setInputs({
        email: "",
        password: ""
      });
      setErrors({
        email: "",
        password: ""
      });
      return alert("okkkkk");
    }
    return alert("ERROR FATAL");
  }

  useEffect(() => {
    setInputs({
      email: "",
      password: ""
    });
  }, []);

  return (
    <form onSubmit={handleSumbit} className={style.container}>
      <div className={style.img}>
        <img src={process.env.PUBLIC_URL + "/rick.jpeg"} alt="rick" />
      </div>
      <div className={style.group}>
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          value={inputs.email}
          onChange={handleChange}
          placeholder="Escribe tu correo electrónico"
        />
        <p className={style.daneger}>{errors.email}</p>
      </div>
      <div className={style.group}>
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={inputs.password}
          onChange={handleChange}
          placeholder="Escribe tu contraseña"
        />
        <p className={style.daneger}>{errors.password}</p>
        {Object.keys(errors).length === 0 ? (
          <div>
            <link to="./home">
              <button type="submit">Agregar</button>
            </link>
          </div>
        ) : null}
      </div>
    </form>
  );
};

export default Form;








































































































































































