import React, { Component } from 'react';
import AnimatedScroller from "./AnimatedScroller";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { GrFacebook, GrMailOption } from "react-icons/gr";
import CV from "./CV";
import NavItem from "./NavItem";
import Projects from "./Projects";
import Page from "./Page";
import Writing from "./Writing";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 'home',
            home: { hidden: false },
            projects: { hidden: true },
            cv: { hidden: true },
            writing: { hidden: true }
        };
        this.showPage = this.showPage.bind(this);
    }

    showPage(page){
        this.setState({activePage: page});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.activePage !== this.state.activePage){
            let cpyState = this.state;
            cpyState[`${prevState.activePage}`].hidden = true;
            cpyState[`${this.state.activePage}`].hidden = false;
            this.setState(cpyState);
        }
    }

    render(){
        return (
            <div className={'container'}>
                <nav>
                    <div className={'internal-links'}>
                        <NavItem label={'Alyssa Tamayo'} onClick={() => this.showPage('home')} />
                        <NavItem label={'Projects'} onClick={() => this.showPage('projects')} />
                        <NavItem label={'Curriculum Vitae'} onClick={() => this.showPage('cv')} />
                        <NavItem label={'Writing'} onClick={() => this.showPage('writing')}/>
                    </div>
                    <div className={'external-links'}>
                        <NavItem label={'LinkedIn'} icon={<SiLinkedin />} target={'_blank'} link={'https://www.linkedin.com/in/alyssartamayo/'} />
                        <NavItem label={'Instagram'} icon={<SiInstagram />} target={'_blank'} link={'https://www.instagram.com/aly_tomato/?hl=en'} />
                        <NavItem label={'Facebook'} icon={<GrFacebook />} target={'blank'} link={'https://www.facebook.com/aly.tomato'} />
                        <NavItem label={'Email'} icon={<GrMailOption />} target= {'blank'} link={'mailto:atamayo@pdx.edu'} />
                    </div>
                </nav>
                <main>
                    <Page
                        id={'home'}
                        hidden={this.state.home.hidden}
                        content={
                            <AnimatedScroller
                                options={['Dog Mom', 'Couch  Potato', 'Coffee Enthusiast']}
                                colors={['#42c58a', '#3fa9d4', '#DC143C']}
                            />
                        }
                    />
                    <Page
                        id={'projects'}
                        hidden={this.state.projects.hidden}
                        content={
                            <Projects />
                        }
                    />
                    <Page
                        id={'cv'}
                        hidden={this.state.cv.hidden}
                        content={
                            <CV />
                        }
                    />
                    <Page
                        id={'writing'}
                        hidden={this.state.writing.hidden}
                        content={
                            <Writing />
                        }
                    />
                </main>
            </div>
        );
    }
}

export default App;
