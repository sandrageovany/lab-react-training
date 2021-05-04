import React from 'react';

class LikeButton extends React.Component{
    state={
        counter: 0
    }
    incrementCounter= ()=>{
        this.setState({
            counter: this.state.counter +1
        });
    }
    render(){
        const {counter}=this.state
        return(
            <button onClick= {this.incrementCounter}>{counter} like</button>

        )
    }
}

export default LikeButton;