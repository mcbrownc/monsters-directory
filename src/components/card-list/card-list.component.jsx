import { Component } from 'react';
import Card from '../card/card.component'
import './card-list.styles.css'; 

class CardList extends Component {
  render() {
    return (
      <Card monsters={this.props.monsters}/>
    )
  }
}

export default CardList;