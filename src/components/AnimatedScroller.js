import React, { Component } from 'react';
import './AnimatedScroller.css';

class AnimatedScroller extends Component {
    constructor(props){
        super(props);
        this.state = {
            options: props.options,
            colors: props.colors,
            hidden: props.hidden
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.hidden !== this.props.hidden){
            this.setState(this.props);
        }
    }

    render(){
        return(
            <div className="row" hidden={this.state.hidden}>
                <div id={'talents-head'}>
                    Software Engineer By Day.
                    <div id={'flip'}>
                        { this.state.options.map( (option, index) => {
                            return (
                                <div key={`${option}-div`} >
                                    <div className={'option-text'}
                                         style={{
                                             background: this.state.colors[index % this.state.colors.length]
                                         }}
                                    > { option } </div>
                                </div>
                            );
                        })}
                    </div>
                    By Night.
                </div>
            </div>
        );
    }
}

export default AnimatedScroller;
