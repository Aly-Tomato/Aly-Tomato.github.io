import React, { Component } from 'react';
import './NavItem.css';

class NavItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            label: props.label,
            link: props.link,
            target: props.target,
            icon: props.icon
        };
    }

    render(){
        let textToShow = this.state.label;
        if (this.state.icon){
            // default behavior is if icon available, hide label text
            textToShow = '';
        }
        return(
            <div className={'nav-item'} onClick={this.props.onClick}>
                <a href={this.state.link} target={this.state.target} alt={`${this.state.label}-logo`}>
                    { this.state.icon }
                    { textToShow }
                </a>
            </div>
        );
    }
}

export default NavItem;
