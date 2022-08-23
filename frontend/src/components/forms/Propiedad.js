import { useForm } from "react-hook-form";
import React, { useState } from "react"
import { Form, Button, Alert, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import { MDBCheckbox } from 'mdb-react-ui-kit';

const Propiedad = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [alert, setAlert] = useState({ variant: '', text: '' })

  const onSubmit = (data) => {
    console.log("Form", data)
    setAlert({ variant: "success", text: 'Datos Guardados' })
    setInterval(() => {
      window.open("/", "_self");
    }, 1000);
  }

  return (
    <Container id="contenedor">
      <div className="title">
        <h1>Anuncia <span>tu propiedad</span></h1>
      </div>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)} className="container-login" >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="opcion-login">Registro</Form.Label>
          <Form.Control placeholder="Nombre del Hotel" type="text" className="login-input" {...register("title", { required: true })} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label className="opcion-login">Tarifa</Form.Label>
          <Form.Control placeholder="Precio" type="number" className="login-input" {...register("price", { required: true })} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label className="opcion-login">Detalles</Form.Label>
          <Form.Control placeholder="Descripcion" as="textarea" rows={3} className="login-input" {...register("description", { required: true })} />
          <Form.Label className="opcion-login">Contiene:</Form.Label>
          <>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Cocina' />
            <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Wi-fi' />
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Balcon' />
            <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Jacuzzi' />
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Aire Acondicionado' />
            <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Frigobar' />
          </>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPlace">
          <Form.Label className="opcion-login">Lugar</Form.Label>
          <Form.Control placeholder="Pais" type="text" className="login-input" {...register("location", { required: true })} />
          <Form.Control placeholder="Direccion" type="text" className="login-input" {...register("location", { required: true })} />
          <Form.Control placeholder="Codigo Postal" type="number" className="login-input" {...register("location", { required: true })} />
          <Form.Control placeholder="Ciudad" type="text" className="login-input" {...register("location", { required: true })} />
          <Form.Control placeholder="Provincia/Estado" type="text" className="login-input" {...register("location", { required: true })} />
        </Form.Group>

        <Form.Group>
          <Form.Label className="opcion-login">Fotos</Form.Label>
          <Form.Control placeholder="Imagenes" id="img" type="file" multiple accept="image/png, .jpeg, .jpg, image/gif" {...register("photo", { required: true })} />
        </Form.Group>
        <hr />
        {(errors.name || errors.price || errors.description || errors.location || errors.photo) && <Alert variant="danger">Todos los campos son obligatorios</Alert>}
        <Alert variant={alert.variant}>{alert.text}</Alert>
        <Button type="submit" className="boton-submit" variant="primary">Guardar</Button>
      </Form>


    </Container>

  );
};

export default Propiedad;
