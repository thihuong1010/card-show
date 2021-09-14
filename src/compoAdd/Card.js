 import React from "react";
 import {Link} from 'react-router-dom';
 import './stylenek.css';


 const Card = ({data}) => {
     return ( 
        <>
        {data.map((card, index) => (
            <div key={index} className="card">
                <h4>{card.name}</h4>
                <p>@{card.username}</p>
                <a href="#">{card.website}</a>
                <Link className="button" to={`/cards/${card.username}`}>More Details</Link>
            </div>
        ))}
        </>
     );
 }

 export default Card;