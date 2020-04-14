import React, { Component } from 'react';
// import styled from 'styled-components';
import Button from './Button';
import Title from './Text';
import Wrapper from './Wrapper';

class Increment extends Component{
    constructor(props){
        super(props);
        this.state = {
            number:0,
            show:true
        };
    }
    IncrementNumber = () => {
        this.setState({number : this.state.number + 1});
    }
    DecreaseNumber = () => {
        this.setState({number : this.state.number - 1});
        
        if(this.state.number === 0){
            window.alert('Tak bisa minus!');
            this.setState({number:0});
        }
    }
    ResetNumber = () =>{
        this.setState({number : 0});
    }

    render(){
        return(
            <>
            <div>
                <Wrapper>
                <Button onClick={this.IncrementNumber}>+</Button>
                <Title>{ this.state.show ? <p>{ this.state.number }</p> : '0' }</Title>
                <Button onClick={this.DecreaseNumber}>-</Button>
                </Wrapper>
                <Button primary onClick={this.ResetNumber}><p>Reset</p></Button>
            </div>    
        </>
        )
    }
}

export default Increment;