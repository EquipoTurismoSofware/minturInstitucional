import React, { useEffect, useState} from "react";

const MaxImage = (props) => {
 const {visibleProp, srcProp, onClose} = props;  
 const [top, setTop]= useState(0);
 const [visible, setVisible] = useState("hidden");
 const [prevProps, setPrevProps] = useState({src: srcProp, visible: visibleProp})

 const [src, setSrc]= useState("")
    
 const setData = () =>{
    let visibilidad = "hidden";
    let top = 0; 
    if(visibleProp === true) {
        visibilidad = "visible";
    }
    if(document.body.scrollTop) {
        top = document.body.scrollTop;
    } else {
        top = document.documentElement.scrollTop;
    }
    setTop(top);
    setVisible(visibilidad)
    setSrc(srcProp)
 }
    useEffect(() => {
      if(srcProp !== prevProps.src || visibleProp !== prevProps.visible) {
          setPrevProps({src: srcProp, visible: visibleProp})
          setData();
      }
    }, [visibleProp, srcProp])

    useEffect(() => {
        setData();
    }, [])

    return(
        <React.Fragment>
            <div className="visor animated bounceIn delay-2s" style={{visibility: visible, top: top}}>
                <div className="visor-content">
                    <div className="visor-close" onClick={onClose}><i className="fas fa-times"></i></div>
                    <img className="" src={src} alt="Full-View" />
                </div>
            </div>
        </React.Fragment>
    );
}
export default MaxImage;