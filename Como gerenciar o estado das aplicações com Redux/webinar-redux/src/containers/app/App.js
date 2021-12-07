import React, { Component } from 'react';
import {connect} from 'react-redux' ;

import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import List from '../../components/list/List';

import {addTodo} from '../../store/actions/todo'

class App extends Component {
    state = {
        input: ''
    } 

    handleOnClick = () => {
        console.log("Button was clicked");
    }

    handleOnChange = event => {
        this.setState({input: event.target.value});
    }

    render(){
        const {input} = this.state;
        return(
            <div>
                <List todoList={[]} />
                <Input onChange={event => this.handleOnChange(event)} value={input}/>
                <Button onClick={() => this.handleOnClick()}>Adicionar</Button>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    listTodo: state.todo
})

export default connect(mapStateToProps, { addTodo })(App);