import React, { useState, useEffect } from "react";

const NasaPhoto = (props) =>{
    if (!props.image) {return <h3>Loading...</h3>};
    return(
    <img src={props.image}/>
    )


}

export default NasaPhoto;