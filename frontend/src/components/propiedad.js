import { useForm } from "react-hook-form";
import React, { useState } from "react"
import { Form, Button, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

const Propiedad = () => {
  const { handleSubmit } = useForm();
  const [alert, setAlert] = useState({ variant: '', text: '' })

  const onSubmit = (data) => {
    console.log("Form", data)
    setAlert({ variant: "success", text: 'Formulario enviado con exito!' })
    setInterval(() => {
      window.open("/", "_self");
    }, 1000);
  }
/*
  const myLoopFunction=() => {
    var myArray = [];
    var i;
    for (i = 0; i < this.state.events.length; i++) {
      myArray[i] = (
        <Event
          time={this.state.events[i].time}
          title={this.state.events[i].title}
        />
      );
    }
    return myArray;
  }*/

  return (
    <div id="contenedor">
      <h1>Anuncia tu propiedad</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className="form" >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control placeholder="Nombre del Hotel" type="text"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Control placeholder="Precio" type="number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Control placeholder="Descripcion" type="textarea" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPlace">
          <Form.Control placeholder="Lugar" type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Control placeholder="Imagenes" type="file"  />

        </Form.Group>
        <Alert variant={alert.variant}>{alert.text}</Alert>
        <Button type="submit" variant="primary">Enviar</Button>
      </Form>
    </div>


  );
};

export default Propiedad;
