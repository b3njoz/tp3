import { useState } from "react";

function Botones(){
    const [habilitarBoton, setHabilitarBoton] = useState("izquierdo");

    const cambiarEstado = (e) => {
        const boton = e.target.id;
        if (boton == "izquierdo"){
            setHabilitarBoton("centro")
        } else if (boton == "centro"){
            setHabilitarBoton("derecho")
        } else if (boton == "derecho"){
            setHabilitarBoton("izquierdo")
        }
    }

    return(
        <>
            <button id="izquierdo" onClick={cambiarEstado} disabled={habilitarBoton !== "izquierdo"}>Izquierdo</button>
            <button id="centro" onClick={cambiarEstado} disabled={habilitarBoton !== "centro"}>Centro</button>
            <button id="derecho" onClick={cambiarEstado} disabled={habilitarBoton !== "derecho"}>Derecho</button>
        </>
    )
}

export default Botones