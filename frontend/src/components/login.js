import { useForm } from "react-hook-form";
import React,{useState} from "react"
import {Link} from "react-router-dom"
import {Form,Button, Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
function Login(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [alert,setAlert]=useState({variant:'',text:''})
    const onSubmit= (data)=>{
        console.log("Form",data)
        setAlert({variant:"success",text:'Wellcome!'})
        setInterval(() => {
        window.open("/", "_self");
        }, 1000);   
    }
    return(
        <div>
            <h1>Datos de Inicio:</h1>
            
            <Form onSubmit={handleSubmit(onSubmit)} className="form" >
                <Alert variant={alert.variant}>{alert.text}</Alert>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control  type="email" {...register("email", { required: true })}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" {...register("password", { required: true })}/>
                </Form.Group>
                {(errors.password || errors.email ) && <Alert variant="danger">Todos los campos son obligatorios</Alert>}
                
                <span><Button type="submit" variant="primary" >Ingresar</Button></span>
                <br></br>
                <br></br>
                <span><Button variant="primary" id="boton" as={Link} to={"/registrar"}>Registrar</Button></span>
            </Form>
        </div>
    )    
}

export default Login