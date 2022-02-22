import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  const [amount, saveAmount] = useState(0);
  const [termToPay, saveTermToPay] = useState('');

  return (
    <Fragment>
      <Header 
        title="Cotizador de prestamos"
      />
      <div className="container">
        <Form 
          amount={ amount }
          saveAmount={ saveAmount }
          termToPay={ termToPay }
          saveTermToPay={ saveTermToPay }
        />
      </div>
    </Fragment>
  );
}

export default App;
