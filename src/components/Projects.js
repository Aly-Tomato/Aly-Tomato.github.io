import React, { Component } from 'react';

class Projects extends Component {

    render(){
        return(
            <div hidden={this.props.hidden}>
                <h1>Projects</h1>
            </div>
        );
    }
}

export default Projects;
