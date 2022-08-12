import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./reservePicker.css";
import "./reserveCard.css"

const ReservePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <DatePicker
            dateFormat="dd/MM/yy"
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
        />
    );
};

const ReserveCard = () => {
    let nightPrice = 150
    return (
        <Container className='container-card'>
            <div>
                <p>${nightPrice} por noche</p>
            </div>
            <div>
                <ReservePicker />
                <Button variant="primary">Reservar</Button>{' '}
            </div>
            <div className='info-prices'>
                    <p>${nightPrice} por 3 noches</p>
                    <p>$450</p>
                
                    <p>Tarifa por limpieza</p>
                    <p>$40</p>
                
                    <p>Tarifa por servicio</p>
                    <p>$0</p>
            </div>
            <div>
                <h5>Total: $490</h5>
            </div>
        </Container>
    )
}

export default ReserveCard