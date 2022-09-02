import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css';
import { helpHttp } from '../../helpers/helpHttp';

function Login() {
  const [formulario, setFormulario] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [alert, setAlert] = useState({ variant: '', text: '' });
  const [user, setUser] = useState(false);

  const onSubmit1 = async data => {
    // console.log('Form', data);
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify(data),
      };
         let res = await fetch('https://hotelc608back.herokuapp.com/api/v1/user/login',requestOptions);
         let json = await res.json();
      setUser(true);

    } catch (error) {
      console.log(error);
    }

    if (user) {
      setAlert({ variant: 'success', text: 'Welcome!' });
      setInterval(() => {
        window.open('/', '_self');
      }, 1000);
    }else{
      setAlert({ variant: 'danger', text: 'Usuario no encontrado' });
    }
  };

  const onSubmit2 = async data => {
    console.log('Form', data);
    if (data.password !== data.password2) {
      setAlert({ variant: 'danger', text: 'No es la misma contraseña' });
    } else {
      try {
        let userName = data.nombre + ' ' + data.apellido;
        const datos = {
          username: userName,
          email: data.email,
          password: data.password  
        }
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          mode: "cors",
          body: JSON.stringify(datos),
        };
        let res = await fetch('https://hotelc608back.herokuapp.com/api/v1/user/', requestOptions);
        let json = await res.json();
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    }

    setAlert({ variant: 'success', text: 'Formulario enviado con exito!' });
    // setInterval(() => {
    //   window.open('/', '_self');
    // }, 1000);
  };

  function login(e) {
    setFormulario(false);
  }

  function registerUser(e) {
    setFormulario(true);
  }

  return (
    <div className="container-login-page">
      <Container>
        <div className="title">
          <h1>
            Nombre<span>Empresa</span>
          </h1>
        </div>
        <div className="container-boton">
          <button onClick={login} className="opcion-login">
            Iniciar sesion
          </button>
          <button onClick={registerUser} className="opcion-login">
            Crear cuenta nueva
          </button>
        </div>
        <hr />
        {!formulario ? (
          <div>
            <Alert id="alert" variant={alert.variant}>
              {alert.text}
            </Alert>
            <form onSubmit={handleSubmit(onSubmit1)} className="container-login">
              <input
                placeholder="Email"
                type="email"
                {...register('email', { required: true })}
                className="login-input"
              />
              <input
                placeholder="Contraseña"
                type="password"
                className="login-input"
                {...register('password', { required: true })}
              />

              {(errors.password || errors.email) && (
                <Alert variant="danger">Todos los campos son obligatorios</Alert>
              )}

              <button type="submit" className="boton-submit">
                Ingresar
              </button>
            </form>
          </div>
        ) : (
          <div>
            <Alert variant={alert.variant}>{alert.text}</Alert>
            <form onSubmit={handleSubmit(onSubmit2)} className="container-login">
              <div className="group-input">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="login-input"
                  {...register('userName', { required: true })}
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  className="login-input"
                  {...register('apellido', { required: true })}
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="login-input"
                {...register('email', { required: true })}
              />
              <input
                id="password1Id"
                type="password"
                placeholder="Contraseña"
                className="login-input"
                {...register('password', { required: true })}
              />
              <input
                id="password2Id"
                type="password"
                placeholder="Repita la contraseña"
                className="login-input"
                {...register('password2', { required: true })}
              />
              {(errors.password1 ||
                errors.password2 ||
                errors.nombre ||
                errors.apellido ||
                errors.email) && <Alert variant="danger">Todos los campos son obligatorios</Alert>}
              <button type="submit" className="boton-submit">
                Registrarme
              </button>
            </form>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Login;
