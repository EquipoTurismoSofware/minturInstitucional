import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js"

const Graficos = (props) => {
  const {tipo, data, title, color} = props
  const [myChart, setMyChart] = useState(null)
  const [prevProp, setPrevProp] = useState(data)
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
    useEffect(() => {
      if(prevProp !== data){
        setPrevProp(data)
        myChart.data.labels = data.map(d => d.etiqueta);
        myChart.data.datasets[0].data = data.map(d => d.valor);
        myChart.update();
        getData() 
      } 
    },[data]);

    useEffect(() => {
      getData()  
    })
    

    return (
      <canvas ref={canvasRef} />
    );  
}

export default Graficos;

/*
import React, { Component } from "react";
import Chart from "chart.js"

class Graficos extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.getData = this.getData.bind(this);
  }

  getData(){
    this.myChart = new Chart(this.canvasRef.current, {
      type: this.props.tipo == "bar-withouty" ? "bar" : this.props.tipo,
      options: {
        maintainAspectRatio: false,
        animation: {
          easing: "easeInOutElastic",
          duration: 1300,
        },
        scales: this.props.tipo == "bar" ? {
          yAxes: [
            {
              ticks: {
                min: 0
              }
            }
          ],
        } : this.props.tipo == "bar-withouty" ? {
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
        labels: this.props.data.map(d => d.etiqueta),
        datasets: [{
          label: this.props.title,
          data: this.props.data.map(d => d.valor),
          backgroundColor: this.props.color,
        }]
      }
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.myChart.data.labels = this.props.data.map(d => d.etiqueta);
      this.myChart.data.datasets[0].data = this.props.data.map(d => d.valor);
      this.myChart.update();
      this.getData();
    }
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    return (
      <canvas ref={this.canvasRef} />
    );
  }
}

export default Graficos;*/