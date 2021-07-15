import React, { useEffect, useState, useRef } from "react";
import {Chart} from "chart.js"

const Graficos = (props) => {
    const {tipo, data, title, color} = props
    const [myChart, setMyChart] = useState(null)
    const canvasRef = useRef(null);

  const getData = () => {
    var myChart1 = new Chart(canvasRef.current, {
      type: tipo == "bar-withouty" ? "bar" : tipo,
      options: {
        maintainAspectRatio: false,
        animation: {
          easing: "easeInOutElastic",
          duration: 1300,
        },
        scales: tipo == "bar" ? {
          yAxes: [
            {
              ticks: {
                min: 0
              }
            }
          ],
        } : tipo == "bar-withouty" ? {
          yAxes: [
            {
              display: false,
              ticks: {
                min: 0
              }
            }
          ],
          xAxes: [{
            gridLines: {
              display: false,
            },
          }]
        }
          :
          ""
      },
      data: {
        labels: data.map(d => d.etiqueta),
        datasets: [{
          label: title,
          data: data.map(d => d.valor),
          backgroundColor: color
        }]
      }
    });
    setMyChart(myChart1)
  }

  /*componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.myChart.data.labels = this.props.data.map(d => d.etiqueta);
      this.myChart.data.datasets[0].data = this.props.data.map(d => d.valor);
      this.myChart.update();
      this.getData();
    }
  }*/

    useEffect((prevProps) => {
        if (data !== prevProps.data) {
            myChart.data.labels = data.map(d => d.etiqueta);
            myChart.data.datasets[0].data = data.map(d => d.valor);
            myChart.update();
        }
        getData()
    },[]);

    return (
      <canvas ref={canvasRef} />
    );  
}

export default Graficos;