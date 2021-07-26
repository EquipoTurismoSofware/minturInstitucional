import React, { useEffect, useState } from "react";
import { Consumer } from "../../context";
//import axios from "axios";
import Loading from "../../utils/Loading";

const RegistroGuiasTurismo = () => {
    const [loading, setLoading] =  useState(true);

  useEffect(() => {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    setLoading(false);
  }, [])

    return (
      <div style={{ paddingTop: "110px" }}>
        {loading ? (
          <div className="mb-5">
            <div>
              <Loading margins="96px" />
            </div>
          </div>
        ) : (
          <React.Fragment>
            <div className="container">
                <div
                  className="ZonaDetalle-titulo"
                  style={{ paddingTop: "50px", backgroundColor: `#722789` }}
                >
                  <h3 style={{ color: `#722789` }}>
                    Registro Guías de Turismo
                  </h3>
                </div>
                <div className="col">
                  <center>
                    <h2 style={{ color: `#722789`, fontWeight: "bold" }}>
                      HAGA CLICK PARA DESCARGAR EL PROTOCOLO PARA EXCURSIONES Y
                      GUÍAS DE TURISMO - TURISMO INTERNO
                    </h2>
                    <br />
                    <a
                      href="https://www.sanluis.gov.ar/wp-content/uploads/PROTOCOLO-PARA-EXCURSIONES-Y-GUI%CC%81AS-DE-TURISMO.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        style={{ height: `200px`, fontWeight: "bold" }}
                        className="img-fluid"
                        src={`${process.env.REACT_APP_API_RECURSOS}/recursos/DNU.png`}
                        alt="Img"
                      />
                    </a>
                  </center>
                </div>
                <br />
                <br />
                <div className="registro1">
                  <iframe
                    title="formRegistro1"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSewGme5ICurcsrLc46CXryvUqVwzcO0UvZr0oyIQO9xIqB8mg/viewform?embedded=true"
                    width="400"
                    height="1100"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                  >
                    Cargando…
                  </iframe>
                </div>
                <div className="registro2">
                  <iframe
                    title="formRegistro2"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSewGme5ICurcsrLc46CXryvUqVwzcO0UvZr0oyIQO9xIqB8mg/viewform?embedded=true"
                    width="1150"
                    height="1000"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                  >
                    Cargando…
                  </iframe>
                </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }


RegistroGuiasTurismo.contextType = Consumer;

export default RegistroGuiasTurismo;
