import React, { Component } from 'react';

class Link extends Component {
    constructor(props){
        super(props);
        this.state = {
            label: props.label,
            link: props.link,
            target: props.target ? props.target : '',
            hover: false
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(event){
        this.setState({hover: true});
        //event.target.firstChild.style.color = '#3fa9d4';
    }

    handleMouseLeave(event){
        this.setState({hover: false});
        //event.target.firstChild.style.color = '#000';
    }

    render(){
        let style = {
            textDecoration: 'none',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            color: '#7DA1E2'
        };

        if (this.state.hover) {
            style.color = '#D98F66'
        }

        return(
            <div onMouseEnter={this.handleMouseEnter}
                 onMouseLeave={this.handleMouseLeave}
                 style={{
                     padding: '0.2em'
                 }}
            >
                <a href={this.state.link} target={this.state.target} style={style}>
                    { this.state.label }
                </a>
            </div>
        );
    }
}

export default Link;
