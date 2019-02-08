import React from 'react';
import 'tachyons';
import './Card.css';

// class Card extends Component {
//     render() {
//         return (
//             <div className="bg-light-pink br3 pa3 mr2 grow bw2 shadow-5 dib">
//                 <img src="https://robohash.org/1?300x300" alt="robots"/>
//                 <div>
//                     <h2>Jane Doe</h2>
//                     <p>janedoe@gmail.com</p>
//                 </div>
//             </div>
//         )
//     }
// }

const Card = ({id, name, email, gender}) => {
    var bgColor;
    if (gender === "male") {
        bgColor = "bg-light-blue"
    } else {
        bgColor = "bg-light-red"
    }

    return (
        <div className={`${bgColor} br3 pa3 ma2 grow bw2 shadow-5 dib`}>
            {/* <img src={`https://robohash.org/${id}?200x200`} alt="robots"/> */}
            <img src={`http://i.pravatar.cc/300?u=${email}`} alt="robots" className="br-100"/>
            <div>
                <h2 className="ttc">{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;