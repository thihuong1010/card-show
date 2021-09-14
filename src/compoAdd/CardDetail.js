import React from "react";
import { useParams } from "react-router-dom";

const CardDetail = ({data}) => {
    let { username } = useParams();  
    return (
        <section className="detail">
            <div className="container">
                {data
                .filter((card) => card.username === username)
                .map((card, index) => (
                    <div key={index} className="cardDetail">
                        <ul>
                            <li>Name: {card.name}</li>
                            <li>Username: {card.username}</li>
                            <li>Email: {card.email}</li>
                            <li>Phone: {card.phone}</li>
                            <li>Company: {card.company.name}</li>
                            <li>Website: {card.website}</li>
                            <li>Address:<br/>
                                - Street: {card.address.street}<br/>
                                - Suite: {card.address.suite}<br/>
                                - City: {card.address.city}<br/>
                                - Zipcode: {card.address.zipcode}
                            </li>
                </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CardDetail;