import React, {Fragment} from 'react';

class Counter extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      count: 0,
      initialCount: 0
    };

    this.increment = this.increment.bind(this);
  };

  static getDerivedStateFromProps(props, state){
    if(state.count !== state.initialCount) {
      return {
        count: state.count
      }
    };
    
    return {
      count: props.initialCount,
      initialCount: props.initialCount
    };
  }

  increment(){
    this.setState((prevState) => ({
      count: ++prevState.count
    }))
  }

  decrement = () => {
    this.setState((prevState) => ({
      count: --prevState.count
    }))
  }


  render(){
    const {count} = this.state;
    return (
      <div>
        <span>{count}</span><br />
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }

  componentDidMount(){
    console.log('Counter is ready');
  }

}

export default Counter;