import React, { useEffect, useState, useRef } from "react";
import Graficos from "../../components/stats/Graficos"
import { Consumer } from "../../context";
import axios from "axios";

const Estadistica = (props) => {
    const {idEst, updateOnOpen} = props
    const [data, setData] = useState([]);
    const [id, setId] = useState(0);
    const [flag, setFlag] = useState(false);
    const [dataFinal, setDataFinal] = useState([{
          title: "",
          data: []
          }, {
            title: "",
            data: []
          },
          {
          title: "",
              data: []
          },
          {
            title: "",
            data: []
        }])

    const getData = () => {
        let data1 = [];
        //let token = this.context.token;
        
        axios({
            method: "get",
            headers: {
                "Authorization": "token"
            },
            url: `${process.env.REACT_APP_API}/graficos/${id}`,
            responseType: "json"
        })
        .then((response) => {
            if(response.data.data.registros.length > 0) {
                setData(response.data.data.registros);
                console.log(response.data.data.registros)
                data.forEach(element => {
                    data1.push({
                        title: element.tipoNombre,
                        data: element.valores
                    });  
                });
                setDataFinal(data1);
            }else{
            }
        })
        .catch((error) => {
            console.log(error);
        });
      }
        
    useEffect(() => {
        document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
        setId(idEst)
        setFlag(updateOnOpen)

        if(updateOnOpen){
            getData();
        }
    }, [])

    useEffect(() => {
        document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
        setId(idEst)
        setFlag(updateOnOpen)

        if(updateOnOpen == idEst){
            getData(0);
        }
    }, [idEst, updateOnOpen])

    var pos = -1;

    const graph = data.map((element) => {
        console.log(element)
    pos++;
    var año = element.fechaDesde.toString().substring(0, 4)
    var fechDesde = element.fechaDesde.toString().substring(8, 10);
    var fechHasta = element.fechaHasta.toString().substring(8, 10);

    if(element.tipoGrafico == "bar" || element.tipoGrafico == "bar-withouty"){
        return(
        <div className="sub-chart-wrapper">
            <div className="sub-chart-wrapper-titulo">{`${element.titulo} del ${fechDesde} al ${fechHasta} de ${año}`}</div>
            <div className="sub-chart-wrapper-subtitulo">{element.tipoNombre}</div>
            <Graficos
            tipo={element.tipoGrafico}
            data={dataFinal[pos].data}
            title={dataFinal[pos].title}
            color="#46BFBD"
        />
        </div>
        );
    }else{
        return(
            <div className="sub-chart-wrapper">
                <div className="sub-chart-wrapper-titulo">{`${element.titulo} del ${fechDesde} al ${fechHasta} de ${año}`}</div>
                <div className="sub-chart-wrapper-subtitulo">{element.tipoNombre}</div>
                <Graficos
                tipo={element.tipoGrafico}
                data={dataFinal[pos].data}
                title={dataFinal[pos].title}
                color={["#F7464A", "#46BFBD", "#FDB45C", '#3e517a', '#b08ea2', '#BBB6DF', '#20E000', '#8032BF', '#FF8B09', '#D5FF42', '#F77373', '#66FFEE', '#F0F57D']}
            />
            </div>
        );
    }
});
    return (
        <React.Fragment>     
        <div className="main-chart-wrapper" >
            {graph}
        </div>                       
        </React.Fragment>                    
    );
}
  

  Estadistica.contextType = Consumer;

  export default Estadistica;

