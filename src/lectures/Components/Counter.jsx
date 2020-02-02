import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Counter extends React.Component {
  constructor(props){
    super(props);
    this.instance = props.instance;
    this.updateCounter = this.updateCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  
    this.state = {
      count: window.localStorage.getItem(this.instance+'-count') || 0
    };
  }

  updateCounter() {
   this.setState({
     count: this.state.count + 1
    }, () => {
      window.localStorage.setItem(this.instance+'-count', this.state.count);
    });
  };

  resetCounter(){
    this.setState({
      count: 0
    })
  };

  
  render(){
    const {count} = this.state;

    return (
      <div>
        <span>{count}</span><br />
        <button onClick={this.updateCounter}>+</button>
        <button onClick={this.resetCounter}>Reset</button>
      </div>
    );
  }
}


ReactDOM.render(
  <Fragment>
    <Counter instance="first" />
    <Counter instance="second" />
    <Counter instance="third" />
  </Fragment>,
  document.getElementById('root')
);

