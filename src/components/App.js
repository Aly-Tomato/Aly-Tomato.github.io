import React, { Component } from 'react';
import AnimatedScroller from "./AnimatedScroller";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { GrFacebook, GrMailOption } from "react-icons/gr";
import NavItem from "./NavItem";
import Projects from "./Projects";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: { hidden: false },
            projects: { hidden: true }
        };
        this.showContent = this.showContent.bind(this);
        this.hideAll = this.hideAll.bind(this);
    }

    hideAll(){
        let cpyState = this.state;
        Object.keys(cpyState).forEach( prop => {
            console.log(prop);
            cpyState[`${prop}`].hidden = true;
        });
        this.setState(cpyState);
        console.log(this.state);
    }

    showContent(property){
        this.hideAll();
        let content = this.state[`${property}`];
        content.hidden = false;
        this.setState(content);
    }

    render(){
        return (
            <div className={'container'}>
                <nav>
                    <div className={'internal-links'}>
                        {/* Working on page navigation
                            <NavItem label={'Alyssa Tamayo'} onClick={() => this.showContent('home')} />
                            <NavItem label={'Projects'} onClick={() => this.showContent('projects')} />
                        */}
                        <NavItem label={'Alyssa Tamayo'} link={'#'} />
                        <NavItem label={'Projects'} link={'#'} />
                        <NavItem label={'Curriculum Vitae'} link={'#'} />
                        <NavItem label={'Writings'} link={'#'} />
                    </div>
                    <div className={'external-links'}>
                        <NavItem label={'LinkedIn'} icon={<SiLinkedin />} target={'_blank'} link={'https://www.linkedin.com/in/alyssartamayo/'} />
                        <NavItem label={'Instagram'} icon={<SiInstagram />} target={'_blank'} link={'https://www.instagram.com/aly_tomato/?hl=en'} />
                        <NavItem label={'Facebook'} icon={<GrFacebook />} target={'blank'} link={'https://www.facebook.com/aly.tomato'} />
                        <NavItem label={'Email'} icon={<GrMailOption />} target= {'blank'} link={'mailto:atamayo@pdx.edu'} />
                    </div>
                </nav>
                <main>
                    <AnimatedScroller
                        options={['Dog Mom', 'Couch  Potato', 'Coffee Enthusiast']}
                        //colors={['#E0B0FF', '#007664', '#CF7557']}
                        colors={['#42c58a', '#3fa9d4', '#DC143C']}
                        hidden={this.state.home.hidden}
                    />
                    <Projects hidden={this.state.projects.hidden}/>
                </main>
            </div>
        );
    }
}

export default App;
