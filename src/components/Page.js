import React, { Component } from 'react';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            hidden: props.hidden,
            id: props.id
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.hidden !== this.props.hidden){
            this.setState(this.props);
        }
    }

    render(){
        let content = this.state.content;
        if (this.state.hidden){
            content = "";
        }
        return(
            <div id={this.state.id}>
                { content }
            </div>
        );
    }
}

export default Page;
