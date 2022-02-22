import React from 'react';

const Result = props => {
    const { total, termToPay, amount } = props;
    return (  
        <div className='u-full-width result'>
            <h2>Resumen</h2>
            <p>Plazo: { termToPay } meses</p>
            <p>Cantidad solicitada: ${ amount }</p>
            <p>Cantidad final a pagar: ${ total }</p>
            <p>Cantidad mensual a pagar: ${ (total / termToPay).toFixed(2) }</p>
        </div>
    );
}
 
export default Result;