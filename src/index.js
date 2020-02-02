import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {getPeople} from './services/star-wars-service';




class StarWarsPeopleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      isLoading: true
    };
  }

  componentDidMount(){
    getPeople().then((data => {
      this.setState({
        people: data,
        isLoading: false
      });
    }).bind(this));
  };

  render () {
    const {people, isLoading} = this.state;
    if(isLoading) {
      return 'isLoading...'
    }

    return (
      <ul>
        <li>
        {
          people.map(person => (
            <h5>{person.name}</h5>
          ))
        }
        </li>
      </ul>
    )
  };



}


ReactDOM.render(
  <StarWarsPeopleList />,
  document.getElementById('root')
);