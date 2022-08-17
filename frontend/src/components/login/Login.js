import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {Alert, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css';

function Login() {
    const [formulario, setFormulario] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [alert, setAlert] = useState({ variant: '', text: '' })

    const onSubmit1 = (data) => {
        console.log("Form", data)
        setAlert({ variant: "success", text: 'Welcome!' })
        setInterval(() => {
            window.open("/", "_self");
        }, 1000);
    }

    const onSubmit2 = (data) => {
        console.log("Form", data)
        if (data.password1 !== data.password2) {
            setAlert({ variant: "danger", text: 'No es la misma contraseña' })
        }
        else {
            setAlert({ variant: "success", text: 'Formulario enviado con exito!' })
            setInterval(() => {
                window.open("/", "_self");
            }, 1000);
        }
    }

    function login(e) {
        setFormulario(false)
    }

    function registerUser(e) {
        setFormulario(true)
    }

    return (
        <Container id="contenedor">
            <div className="title">
                <h1>Nombre<span>Empresa</span></h1>
            </div>
            <div className="container-boton">
                <button onClick={login} className="opcion-login">Iniciar sesion</button>
                <button onClick={registerUser} className="opcion-login">Crear cuenta nueva</button>
            </div>
            <hr />
            {!formulario
                ?
                <div>
                    <Alert id="alert" variant={alert.variant}>{alert.text}</Alert>
                    <form onSubmit={handleSubmit(onSubmit1)} className="container-login">
                        
                            <input placeholder="Email" type="email"
                                {...register("email", { required: true })} className="login-input" />
                            <input placeholder="Contraseña" type="password" className="login-input"
                                {...register("password", { required: true })} />

                            {(errors.password || errors.email) && <Alert variant="danger">Todos los campos son obligatorios</Alert>}

                            <button type="submit" className="boton-submit">Ingresar</button>
                    </form>
                </div>
                :
                <div>
                    <Alert variant={alert.variant}>{alert.text}</Alert>
                    <form onSubmit={handleSubmit(onSubmit2)} className="container-login" >
                        <div className="group-input">
                            <input type="text" placeholder="Nombre" className="login-input"
                            {...register("nombre", { required: true })} />
                        <input type="text" placeholder="Apellido" className="login-input" 
                            {...register("apellido", { required: true })} />
                        </div>
                        
                        <input type="email" placeholder="Email" className="login-input"
                            {...register("email", { required: true })} />
                        <input id="password1Id" type="password" placeholder="Contraseña" className="login-input"
                            {...register("password1", { required: true })} />
                        <input id="password2Id" type="password" placeholder="Repita la contraseña" className="login-input"
                            {...register("password2", { required: true })} />
                        {(errors.password1 || errors.password2 || errors.nombre || errors.apellido || errors.email) && <Alert variant="danger">Todos los campos son obligatorios</Alert>}
                        <button type="submit" className="boton-submit">Registrarme</button>
                    </form>
                </div>
            }
        </Container>
    )
}

export default Login