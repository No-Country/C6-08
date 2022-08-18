import React from 'react'
import './modal.css'
import { X } from 'phosphor-react'

const Modal = ({ children, state, setState }) => {
    return (
        <>
            {state &&
                <div className='overlay'>
                    <div className='modal-container'>
                        <div className='modal-header'>
                            <h3>Servicios disponibles</h3>
                        </div>
                        <button className='modal-cerrar' onClick={() => setState(false)}>
                            <X size={20} />
                        </button>
                        {children}
                    </div>
                </div>
            }
        </>
    )
}

export default Modal