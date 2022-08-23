import React, { useState } from 'react';
import { HeartStraight } from 'phosphor-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
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
    const [active, setActive] = useState(false);
    const fillHeart = (e) => {
        setActive(!active)
    }

    let nightPrice = 150
    return (
        <div className='container-card'>
            <div className='card-header'>
                <h4>Hotel</h4>
                <HeartStraight size={28} weight={active ? "fill" : null} 
                className={`favourite ${active ? "favourite-active" : null}`}
                onClick={fillHeart}/>
            </div>
            <div className='container-inputs'>
                <ReservePicker />
                <input type="number" placeholder="Personas" min="1" max="10"/>
                <button className='button-reserve'>Reservar</button>
            </div>
            <div className='info-prices'>
                <span>Precio por noche</span>
                <span className='price'>${nightPrice}</span>
                <hr/>
                <span>Total:</span> 
                <span className='price'>${nightPrice}</span>
            </div>
        </div>
    )
}

export default ReserveCard