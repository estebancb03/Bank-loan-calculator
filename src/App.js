import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Message from "./components/Message";

function App() {
  const [amount, saveAmount] = useState(0);
  const [termToPay, saveTermToPay] = useState('');
  const [total, saveTotal] = useState(0); 

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
          total={ total }
          saveTotal={ saveTotal }
        />
        <div className="messages">
          <Message />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
