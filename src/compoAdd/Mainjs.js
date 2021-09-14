import React from "react";
import Card from "./Card";
import './stylenek.css';

const Mainjs = ({data}) => {
     return (
         <section className="main">
            <div className="container"> 
                <Card data={data}/>
            </div>
             
         </section>
     ); 
}

export default Mainjs;