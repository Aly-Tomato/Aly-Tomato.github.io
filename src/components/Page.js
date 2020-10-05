import React, { Component } from 'react';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            id: props.id
        }
    }

    render(){
        return(
            <div id={this.state.id}
                 style={{
                     display: 'flex',
                     justifyContent: 'center',
                     margin: '20px'
                 }}
            >
                { this.state.content }
            </div>
        );
    }
}

export default Page;
