import React, { useState, useEffect } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";
import SwiperCore, {Pagination} from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';

// install Swiper modules
SwiperCore.use([Pagination]);
const Novedades = (props) => {
  const {time} = props;
  const [loading, setLoading] = useState(true);
  const [data, setData]= useState([]);
  const [index, setIndex] = useState(0);
  const [timerID, setTimerID] = useState(false)
   
  const carouselTimer = () => {
    let indice = parseInt(index, 10);
    indice++;
    if (indice > data.length - 1) {
      indice = 0;
    }
    setIndex(indice);
    let oldData = Object.assign([], data);
    oldData = oldData.map((d) => {
      return { ...d, display: "none" };
    });
    let newDataItem = oldData[indice];
    newDataItem["display"] = "block";
    oldData[indice] = newDataItem;
    setData(oldData)  
  }

  useEffect(() => {
    var self = this;
    axios({
      method: "get",
      headers: {
        Authorization: "token",
      },
      url: `${process.env.REACT_APP_API}/novedades/12`,
      responseType: "json",
    })
      .then((response) => {
        let data = response.data.data.registros
        setData(data)
        setLoading(false)
        if (parseInt(response.data.data.count, 10) > 0) {
          let timer = setInterval(self.carouselTimer, time);
          setTimerID(timer)    
          carouselTimer();
            
        } 
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

    const items = data.map((item) => {
      let descripcion = item.descripcion.substr(0, 150) + "...";
      let fecha = item.fecha.split("-");
      return (
        <SwiperSlide
          key={`ci-${item.id}`}
          className="blog-slider__item"
        >
            <div className="blog-slider__img">
              <img
                style={{ height: "300px" }}
                src={`${process.env.REACT_APP_API_RECURSOS}/recursos/novedades/${item.foto_uno}`}
                alt="Foto"
              />
            </div>

            <div class="blog-slider__content">
            <div className="col-sm-11">
              <Link
                to={`/novedad/${item.id}`}
                className="link"
                style={{ color: "black", textDecoration:"none" }}
              >
               
                       <span className="blog-slider__code">{`${fecha[2]}/${fecha[1]}/${fecha[0]}`}</span>
                     <div className="blog-slider__title">
                        <h2>{item.titulo}</h2>
                      </div>
                      <div><h4>{item.subtitulo}</h4></div>

                    
                      <div class="blog-slider__text">
                        {descripcion}
                      </div>
                      <div class="blog-slider__button">
                          Leer más
                      </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      );
    });

    return (
      <div className="container mb-3 Novedades">
          <Link to="/novedades" className="novedades-leyenda" style={{textDecoration:"none"}}>
            <span>NOVEDADES</span>
          </Link>
            
              <Swiper
                 spaceBetween={30}
                 effect={"fade"}
                 direction={"vertical"}
                 loop={false}
                 pagination={{el: '.blog-slider__pagination',
                 clickable: true,
                 dynamicBullets: true}}
                 className="blog-slider"
              >
                  {items}
              <div className="blog-slider__pagination"></div>
              </Swiper>
      </div>
    );
  }

Novedades.contextType = Consumer;

export default Novedades;
