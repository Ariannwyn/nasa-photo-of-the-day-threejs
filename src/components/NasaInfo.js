import React, { useState, useEffect } from "react";

const NasaInfo = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <p>{props.description}</p>
        </div>
    )


}

export default NasaInfo;