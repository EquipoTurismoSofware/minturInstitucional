import React, { useState, useEffect } from "react";
import Novedadesfull from "../../components/news/NovedadesFull";
import Loading from "../../utils/Loading";

const PNovedades = () => {  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
    setLoading(false)
  }, [])

  return (
    <div className="PNovedades">
      {loading ? (
        <div className="PFiltroAlojamiento mb-5">
          <div>
            <Loading margins="96px" />
          </div>
        </div>
      ) : (
        <React.Fragment>
          <Novedadesfull />
        </React.Fragment>
      )}
    </div>
  );  
}

export default PNovedades;
