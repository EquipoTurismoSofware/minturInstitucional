import React, { useEffect, useState } from "react";
import { Consumer } from "../../context";
import Loading from "../../utils/Loading";

const PContacto = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    setLoading(false)
  })
    
    return (
        <div style={{ paddingTop: "110px" }}>
        {loading ? (
            <div className="mb-5" >
            <div>
                <Loading margins="96px" />
            </div>
            </div>
        ) : (
            <React.Fragment>
            <div className="container" >
                <div
                    className="ZonaDetalle-titulo"
                    style={{ paddingTop: "50px", backgroundColor: `#722789` }}
                >
                    <h3 style={{ color: `#722789` }}>Contactanos</h3>
                </div>
                <h3
                    className=""
                    style={{ paddingLeft: "15px", color: `#722789` }}
                >
                    Estamos para ayudarte, a continuación dejamos todos los medios
                    disponibles por donde nos podemos comunicar.
                </h3>
                <br />
                <div
                    className="grillaContacto-grid-container"
                    style={{ paddingLeft: "15px" }}
                >
                    <div className="contacLlamada">
                    <i class="fas fa-phone-volume contactoIcon" />
                    <h4>
                        ¡Esperamos tu llamada! <br />
                    </h4>
                    <div>
                        <br />
                        <h5 style={{ paddingLeft: "70px" }}>
                        <a href="tel:+5492664423479"> +54 (266) 4423479</a>
                        <br />
                        <a href="tel:+5492664423957">+54 (266) 4423957 </a>
                        </h5>
                    </div>
                    </div>
                    <div className="contacRedes posicionContacto">
                    <i class="fas fa-users" />
                    <h4 className="">
                        ¡Seguinos! <br />
                    </h4>
                    <br />
                    <h5 style={{ paddingLeft: "70px" }}>
                        <div className="iconRedes">
                        <p>
                            <i className="fab fa-facebook-square" />
                            <a
                            href="https://www.facebook.com/turismodesanluis/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            &nbsp; @TurismodeSanLuis
                            </a>
                        </p>
                        <br></br>
                        <p>
                            <i className="fab fa-twitter-square" />
                            <a
                            href="https://twitter.com/TurismoSanLuis_"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            &nbsp; @TurismoSanLuis_
                            </a>
                        </p>
                        <br></br>
                        <p>
                            <i className="fab fa-instagram" />
                            <a
                            href="https://www.instagram.com/turismo_san_luis/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            &nbsp; @Turismo_san_luis
                            </a>
                        </p>
                        </div>
                    </h5>
                    </div>
                    <div className="contacLlamada" style={{ paddingTop: "40px" }}>
                    <i class="fas fa-map-marked-alt" />
                    <h4>
                        ¡Te esperamos! <br />
                    </h4>
                    <br />
                    <h5 style={{ paddingLeft: "70px" }}>
                        <a href="https://goo.gl/maps/nMd9gkUAuZJ2">
                        Av. Arturo Illia 35
                        </a>
                    </h5>
                    </div>
                    <div
                    className="contacLlamada posicionContacto"
                    style={{ paddingTop: "40px" }}
                    >
                    <i class="fas fa-mail-bulk" />
                    <h4>
                        ¡Escribinos! <br />
                    </h4>
                    <br />
                    <h5 style={{ paddingLeft: "70px" }}>
                        <a href="mailto:info@turismo.sanluis.gov.ar">
                        info@turismo.sanluis.gov.ar
                        </a>
                        <br />
                        <a href="mailto:contacto@turismo.sanluis.gov.ar">
                        contacto@turismo.sanluis.gov.ar
                        </a>
                    </h5>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )}
        </div>
    );
    }

PContacto.contextType = Consumer;

export default PContacto;
