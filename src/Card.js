import React from 'react'
import "./Card.css";

const Card = ({avatar, first_name, last_name, email}) => {
    return (
        <div className="card">
            <img src={avatar} className="profile-img" alt="something"/>
            <h3 className="name">{`${first_name} ${last_name}`}</h3>
            <h4 style={{color: "#ffffff", marginTop: "15px"}}>{email}</h4>
        </div>
    )
}

export default Card
