import React, {useState, useEffect} from "react";
import { Helmet } from "react-helmet";

const NovedadesMetaDatos = (props) => {
    const {datosProp} = props
    const [datos, setDatos] = useState(datosProp)
    
    return (
        <div className="application">
            <Helmet>
                <meta property="og:title" content={`${datos.titulo}. ${datos.subtitulo}`} />
                <meta property="og:image" content={`${process.env.REACT_APP_API_RECURSOS}/recursos/novedades/${datos.foto_uno}`} />
                <meta property="og:description" content={datos.descripcion} />
            </Helmet>
            ...
        </div>
        );
    
};

export default NovedadesMetaDatos;