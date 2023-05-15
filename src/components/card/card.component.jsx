// import { Component } from "react";
import './card.styles.css';

const Card = ({ name, id, email }) => {
  return (
    <div className='card-container'>
      <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

// class Card extends Component {
//   render() {
//     const { name, id, email } = this.props;
//     return (
//       <div className='card-container'>
//         <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`} />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     )
//   }
// }

export default Card;