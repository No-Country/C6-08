import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { Form, Alert, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './propiedad.css';

const Propiedad = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [alert, setAlert] = useState({ variant: '', text: '' });
  const [hotel, setHotel] = useState(false);

  const onSubmit = async (data) => {
    console.log('Form', data);
    // const ubicacion = data.country + ', ' + data.state + ', ' + data.city + ', '+ data.adress + ', ' + data.cp;
    try {
    const datos = {
      title: data.title,
      description: data.description,
      price: data.price,
      country: data.country,
      city: data.city,
      adress: data.adress,
      cp: data.cp,
      state: data.state,
      photo: data.photo,
      id: parseInt(data.id),
      // ubication: ubicacion,
      // images: ""
    };

      // const datos = {
      //   title: data.title,
      //   description: data.description,
      //   price: data.price,
      //   country: data.country,
      //   city: data.city,
      //   adress: data.adress,
      //   cp: data.cp,
      //   state: data.state,
      //   photo: data.photo,
      //   id: parseInt(data.id),
      //   // ubication: ubicacion,
      //   // images: ""
      // };
      // let formData = new FormData();
      // formData.append('title', data.title);
      // formData.append('description', data.description);
      // formData.append('price', data.price);
      // formData.append('country', data.country);
      // formData.append('city', data.city);
      // formData.append('adress', data.adress);
      // formData.append('cp', data.cp);
      // formData.append('state', data.state);
      // formData.append('photo', data.photo);
      // formData.append('id', parseInt(data.id));

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        mode: 'cors',
        body: JSON.stringify(data),
        // body: formData,
      };

      console.log(data);
      console.log(datos);
      let res = await fetch('https://hotelc608back.herokuapp.com/api/v1/hotel', requestOptions);
      let json = await res.json();
      setHotel(true);
      console.log(json);
    } catch (error) {
      console.log(error);
    }

    // if (hotel) {
    //   setAlert({ variant: 'success', text: 'Datos Guardados' });
    //   setInterval(() => {
    //     window.open('/', '_self');
    //   }, 1000);
    // }
  };

  return (
    <div className="container-property-page">
      <Container id="contenedor">
        <div className="title">
          <h1>
            Anuncia <span>tu propiedad</span>
          </h1>
        </div>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)} className="">
          <Form.Group className="mb-3" controlId="formBasicName">
            <h4 className="property-title">Registro</h4>
            <input
              placeholder="Nombre del Hotel"
              type="text"
              className="property-input"
              {...register('title', { required: true })}
            />
            {/* <input 
              type="text" 
              value={1} 
              {...register('id', { required: true })} 
            /> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPrice">
            <h4 className="property-title">Tarifa</h4>
            <input
              placeholder="Precio"
              type="number"
              className="property-input"
              {...register('price', { required: true })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <h4 className="property-title">Detalles</h4>
            <textarea
              placeholder="Descripcion"
              rows={3}
              className="property-input"
              id="property-textarea"
              {...register('description', { required: true })}
            />

            <h4 className="property-title">Servicios:</h4>
            <p>
              Te recomendamos que cuentes con al menos cinco de estos principales servicios. También
              podrá añadir otros servicios después de publicar el anuncio.
            </p>
            <div className="container-checkboxes">
              <div className="flex-checkbox">
                <label htmlFor="Cocina">Cocina</label>
                <input type="checkbox" id="Cocina" name="Cocina" value="Cocina" />
              </div>

              <div className="flex-checkbox">
                <label htmlFor="Wi-fi">Wi-fi</label>
                <input type="checkbox" id="Wi-fi" name="Wi-fi" value="Wi-fi" />
              </div>

              <div className="flex-checkbox">
                <label htmlFor="Balcon">Balcon</label>
                <input type="checkbox" id="Balcon" name="Balcon" value="Balcon" />
              </div>

              <div className="flex-checkbox">
                <label htmlFor="Jacuzzi">Jacuzzi</label>
                <input type="checkbox" id="Jacuzzi" name="Jacuzzi" value="Jacuzzi" />
              </div>

              <div className="flex-checkbox">
                <label htmlFor="Aire Acondicionado">Aire Acondicionado</label>
                <input
                  type="checkbox"
                  id="Aire Acondicionado"
                  name="Aire Acondicionado"
                  value="Aire Acondicionado"
                />
              </div>

              <div className="flex-checkbox">
                <label htmlFor="Frigobar">Frigobar</label>
                <input type="checkbox" id="Frigobar" name="Frigobar" value="Frigobar" />
              </div>

              <div className="flex-checkbox">
                <label htmlFor="Piscina">Piscina</label>
                <input type="checkbox" id="Piscina" name="Piscina" value="Piscina" />
              </div>

              <div className="flex-checkbox">
                <label htmlFor="Lavadora">Lavadora</label>
                <input type="checkbox" id="Lavadora" name="Lavadora" value="Lavadora" />
              </div>

              <div className="flex-checkbox">
                <label htmlFor="Estacionamiento techado">Estacionamiento techado</label>
                <input
                  type="checkbox"
                  id="Estacionamiento techado"
                  name="Estacionamiento techado"
                  value="Estacionamiento techado"
                />
              </div>

              <div className="flex-checkbox">
                <label htmlFor="Baño en suite">Baño en suite</label>
                <input
                  type="checkbox"
                  id="Baño en suite"
                  name="Baño en suite"
                  value="Baño en suite"
                />
              </div>

              <div className="flex-checkbox">
                <label htmlFor="Microondas">Microondas</label>
                <input type="checkbox" id="Microondas" name="Microondas" value="Microondas" />
              </div>

              <div className="flex-checkbox">
                <label htmlFor="Sala de fitness">Sala de fitness</label>
                <input
                  type="checkbox"
                  id="Sala de fitness"
                  name="Sala de fitness"
                  value="Sala de fitness"
                />
              </div>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPlace">
            <h4 className="property-title">Lugar</h4>
            <input type="hidden" value={1} {...register('id', { required: true })} />
            <div className="container-location">
              <input
                placeholder="Pais"
                type="text"
                className="property-input"
                {...register('country', { required: true })}
              />
              <input
                placeholder="Provincia/Estado"
                type="text"
                className="property-input"
                {...register('state', { required: true })}
              />
              <input
                placeholder="Ciudad"
                type="text"
                className="property-input"
                {...register('city', { required: true })}
              />
              <input
                placeholder="Direccion"
                type="text"
                className="property-input"
                {...register('adress', { required: true })}
              />
              <input
                placeholder="Codigo Postal"
                type="number"
                className="property-input"
                {...register('cp', { required: true })}
              />
            </div>
          </Form.Group>

          <Form.Group>
            <h4 className="property-title">Fotos</h4>
            <Form.Control
              placeholder="Imagenes"
              id="img-property"
              type="file"
              // multiple
              accept="image/png, .jpeg, .jpg, image/gif"
              {...register('photo', { required: true })}
            />
          </Form.Group>
          <hr />
          {(errors.name ||
            errors.price ||
            errors.description ||
            errors.location ||
            errors.photo) && <Alert variant="danger">Todos los campos son obligatorios</Alert>}
          <Alert variant={alert.variant}>{alert.text}</Alert>
          <button type="submit" className="boton-property">
            Guardar
          </button>
        </Form>
      </Container>
    </div>
  );
};

export default Propiedad;
