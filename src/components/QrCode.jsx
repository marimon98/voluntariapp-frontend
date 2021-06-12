import React, {Component} from 'react';
import QRCode from "react-qr-code";


function QrCode () {
    return (
        <div style={column}>
            <div style={localitzacio}> <QRCode value="hey" /> </div> <br />
            <div style={localitzacio}> <button onClick={() => alert("Código QR generado con éxito")}>Generate</button> </div>
        </div>       
    );
}

const column = {
    float: "left",
    width: "100%",
    padding: "200px",
    alignItem: "center"

};

const localitzacio = {
    fontSize: 22,
    justifyContent: "center",
    display: "flex"
};

export default QrCode;