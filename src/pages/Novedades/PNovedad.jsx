import React, { useState, useEffect } from "react";
import { Consumer } from "../../context";
import axios from "axios";
import { FacebookShareButton, FacebookIcon} from 'react-share';
import MaxImage from "../../components/MaxImage";
import Loading from "../../utils/Loading";
import NovedadesMetaDatos from "../../components/news/NovedadesMetaDatos"

const PNovedad = (props) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({
    localidad: "",
    fecha: "1978-03-14",
    titulo: "",
    subtitulo: "",
    descripcion: "",
    descripcionHTML: "",
    foto_uno: "default.jpg",
    foto_dos: "default.jpg",
  });
  const [img, setImg] = useState({
    visible: false,
    src: "",
  });

  const clickImg = (visible, src) => {
    setImg({
      visible: visible,
      src: src
    })
  }

  const closeImg = () => {
    setImg({
      visible: false,
      src: ""
    })
  }

  useEffect(() => {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    let id = parseInt(props.match.params.id, 10);
    axios({
      method: "get",
      headers: {
        Authorization: "token",
      },
      url: `${process.env.REACT_APP_API}/novedad/${id}`,
      responseType: "json",
    })
      .then((response) => {
        setData(response.data.data.registros[0])
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  },[])
    
    let fecha = data.fecha.split("-");
    const shareUrl = `http://turismo.sanluis.gov.ar/#/novedad/${props.match.params.id}`;
    const descripcion = `${data.descripcion}`;

    return (
      <React.Fragment>
        {loading ? (
          <div className="PFiltroAlojamiento mb-5">
            <div>
              <Loading margins="96px" />
            </div>
          </div>
        ) : (
          <React.Fragment>
            <NovedadesMetaDatos datosProp={data} />
            {/*<Helmet>
                <title>{this.state.data.titulo}</title>
                <meta property="og:locale" content="es_ES"/>
                <meta property="og:site_name" content="Secretaría de Turismo - San Luis - Argentina"/>
                <meta property="og:url" content={shareUrl} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={descripcion} />
                <meta property="og:image" content={image} />
              </Helmet>*/}
            <div className="container PNovedad">
              <div className="n-titulo">
                <span>
                  {`${fecha[2]}/${fecha[1]}`} - {data.localidad}
                </span>
              </div>
            </div>
            <div className="container">
              <div className="row mb-5">
                <div className="col">
                  <div className="novedad-item">
                    <div className="imagen">
                      <img
                        className="img-fluid"
                        src={`${process.env.REACT_APP_API_RECURSOS}/recursos/novedades/${data.foto_uno}`}
                        alt="Img"
                        onClick={(e) =>
                          clickImg(
                            true,
                            `${process.env.REACT_APP_API_RECURSOS}/recursos/novedades/${data.foto_uno}`
                          )
                        }
                      />
                      {data.foto_dos !== "default.jpg" ? (
                        <img
                          className="img-fluid"
                          src={`${process.env.REACT_APP_API_RECURSOS}/recursos/novedades/${data.foto_dos}`}
                          alt="Img"
                          onClick={(e) =>
                            clickImg(
                              true,
                              `${process.env.REACT_APP_API_RECURSOS}/recursos/novedades/${data.foto_dos}`
                            )
                          }
                        />
                      ) : (
                        ""
                      )}
                    </div>
                    <div
                      className="titulo"
                      style={{ backgroundColor: data.color }}
                    >
                      <h3>{data.titulo}</h3>

                      <h3>{data.subtitulo}</h3>
                    </div>
                    {data.descripcionHTML != "" ? (
                      <div className="body">
                        <p
                          className="text-dark mb-2"
                          dangerouslySetInnerHTML={{
                            __html: data.descripcionHTML,
                          }}
                        ></p>

                        <FacebookShareButton url={shareUrl}><FacebookIcon size={32} round={true} /></FacebookShareButton>

                      </div>
                    ) : (
                      <div className="body">
                        <p className="text-dark mb-2">{descripcion}</p>

                        <FacebookShareButton url={shareUrl}><FacebookIcon size={32} round={true} /></FacebookShareButton>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
        <MaxImage
          srcProp={img.src}
          visibleProp={img.visible}
          onClose={closeImg}
        />
      </React.Fragment>
    );
}

PNovedad.contextType = Consumer;

export default PNovedad;
