import React, { Component } from 'react';
import './NavItem.css';

class NavItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            label: props.label,
            link: props.link,
            target: props.target,
            icon: props.icon,
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
        let after;
        let textToShow = this.state.label;
        if (this.state.icon){
            // default behavior is if icon available, hide label text
            textToShow = '';
        }
        if (this.state.hover){
            after = <div className={'after'}
                     style={{
                         bottom: 0,
                         content: "",
                         display: 'block',
                         height: '1px',
                         left: 0,
                         position: 'absolute',
                         background: '#000',
                         transition: 'width 0.3s ease 0s, left 0.3s ease 0s',
                         width: '100%',
                     }}
                />
        } else {
            after = <div className={'after'}
                style={{
                    left: '50%',
                    width: 0
                }}
            />
        }

        return(
            <div className={'nav-item'}
                 id={`${this.state.label}`}
                 onClick={this.props.onClick}
                 onMouseEnter={this.handleMouseEnter}
                 onMouseLeave={this.handleMouseLeave}
                 style={{
                     padding: '20px 20px 8px'
                 }}
            >
                <a href={this.state.link} target={this.state.target}>
                    { this.state.icon }
                    { textToShow }
                </a>
                { after }
            </div>
        );
    }
}

export default NavItem;
