import React, { useEffect, useState} from "react";
import { Consumer } from "../../context";
import axios from "axios";
import Estadistica from "../../components/stats/Estadistica";
//.
const PListadoEstadisticas = () => {
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);
     
     const getData = () => {
        //let token = this.context.token;
        
        axios({
            method: "get",
            headers: {
                //"Authorization": token
            },
            url: `${process.env.REACT_APP_API}/reporte/all`,
            responseType: "json"
        })
        .then((response) => {
            if(response.data.data.registros.length > 0) {
                setData(response.data.data.registros)
            }
        })
        .catch((error) => {
            console.log(error);
        });
      }

      useEffect(() => {
        document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
  
        getData();  
      }, []);
    
      const graph = data.map((element) => {
        var color = "rgb(168, 0, 219)"
        return(
            <div>
                 <div className="card" style={{borderColor:"#fff"}}>
                    <div className="card-header" id={`est-${element.id}`} style={{backgroundColor:"#fff"}} >
                        <h5 className="mb-0 d-flex justify-content-between">
                            <button className="btn" style={{width: "100%", height: "50px", fontSize: "1.2rem", lineHeight: "1.8rem", fontWeight: "700", backgroundColor: color, color:"#fff"}} type="button" data-toggle="collapse" data-target={`#collapse-activo-${element.id}`} aria-expanded="true" aria-controls={`collapse-activo-${element.id}`} onClick={() => { setFlag(element.id)}}>
                                {element.nombre}
                            </button>
                            {/*<button className="btn btn-danger" type="button" onClick={(e) => { this.msgDelAtractivo(this.state.atractivo.id, this.state.atractivo.nombre, e) }}>
                                <i className="fas fa-trash"></i>
                               </button>*/}
                        </h5>
                    </div>
                    <div id={`collapse-activo-${element.id}`} className="collapse" aria-labelledby={`atractivo-${element.id}`} data-parent="#accordionAtractivos">
                        <div className="card-body">
                          <Estadistica idEst={element.id} updateOnOpen={flag}></Estadistica>
                        </div>
                    </div>
                </div>
             
            </div>      
        )
    });
      return (
          <React.Fragment>
            <div className="container">
              <div className="est-main" >
                <div
                  className="ZonaDetalle-titulo"
                  style={{backgroundColor: `#722789` }}
                >
                  <h3 style={{ color: `#722789` }}>
                    LISTADO DE ESTADÍSTICAS
                  </h3>
                </div>
              </div>
              <div style={{margin:"0 20px 20px 20px"}}>
                <div className="accordion" id="accordionAtractivos">
                  {graph}
                </div>
              </div>
            </div>   
          </React.Fragment>                    

      );
  }

  PListadoEstadisticas.contextType = Consumer;

  export default PListadoEstadisticas;