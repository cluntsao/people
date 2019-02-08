import React from 'react';
import Card from "./Card";

const CardList = ({ data }) => {
    
    return (
        <div>
            {
                data.map(user => 
                <Card id={user.id} 
                    name={user.name.first} 
                    email={user.email} 
                    key={user.id}
                    gender = {user.gender}
                />)
            }
        </div>
    )
}

export default CardList;