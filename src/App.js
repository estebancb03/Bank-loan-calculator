import React, { Fragment } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <Fragment>
      <Header 
        title="Cotizador de prestamos"
      />
      <div className="container">
        <Form />
      </div>
    </Fragment>
  );
}

export default App;
