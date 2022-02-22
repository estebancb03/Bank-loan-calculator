import React, { Fragment, useState } from 'react';
import { calculateTotal } from '../helpers';

const Form = props => {
    const { amount, saveAmount, termToPay, saveTermToPay, total, saveTotal } = props;
    const [error, saveError] = useState(false);

    const calculateLoan = e => {
        e.preventDefault();
        if(amount === 0 || termToPay === '') {
            saveError(true);
            return;
        }
        saveError(false); 
        const total = calculateTotal(amount, termToPay);  
        saveTotal(total);
    }

    return (  
        <Fragment>
            <form onSubmit={ calculateLoan }>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input 
                            className="u-full-width" 
                            type="number" 
                            placeholder="Ejemplo: 3000"
                            onChange={ e => saveAmount(parseInt(e.target.value)) } 
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select 
                            className="u-full-width"
                            onChange={ e => saveTermToPay(parseInt(e.target.value)) }
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Calcular" 
                            className="button-primary u-full-width" 
                        />
                    </div>
                </div>
            </form>
            { error ? <p className='error'>Todos los campos son obligatorios</p> : null }
        </Fragment>
    );
}
 
export default Form;