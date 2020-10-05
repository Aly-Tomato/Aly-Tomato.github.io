import React, { Component } from 'react';
import AnimatedScroller from "./AnimatedScroller";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { GrFacebook, GrMailOption } from "react-icons/gr";
import CV from "./CV";
import NavItem from "./NavItem";
import Projects from "./Projects";
import Writing from "./Writing";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.css';

class App extends Component {

    render(){
        return (
            <Router>

            <div className={'container'}>
                <nav>
                    <div className={'internal-links'}>
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <NavItem label={'Alyssa Tamayo'} />
                        </Link>
                        <Link to="/projects" style={{textDecoration: 'none'}}>
                            <NavItem label={'Projects'} />
                        </Link>
                        <Link to="/cv" style={{textDecoration: 'none'}}>
                            <NavItem label={'Curriculum Vitae'} />
                        </Link>
                        <Link to="/writing" style={{textDecoration: 'none'}}>
                            <NavItem label={'Writing'} />
                        </Link>
                    </div>
                    <div className={'external-links'}>
                        <NavItem label={'LinkedIn'} icon={<SiLinkedin />} target={'_blank'} link={'https://www.linkedin.com/in/alyssartamayo/'} />
                        <NavItem label={'Instagram'} icon={<SiInstagram />} target={'_blank'} link={'https://www.instagram.com/aly_tomato/?hl=en'} />
                        <NavItem label={'Facebook'} icon={<GrFacebook />} target={'blank'} link={'https://www.facebook.com/aly.tomato'} />
                        <NavItem label={'Email'} icon={<GrMailOption />} target= {'blank'} link={'mailto:atamayo@pdx.edu'} />
                    </div>
                </nav>
                <main>
                    <Switch>
                        <Route path="/writing">
                            <Writing />
                        </Route>
                        <Route path="/cv">
                            <CV />
                        </Route>
                        <Route path="/projects">
                            <Projects />
                        </Route>
                        <Route path="/">
                            <AnimatedScroller
                                options={['Dog Mom', 'Couch  Potato', 'Coffee Enthusiast']}
                                colors={['#42c58a', '#3fa9d4', '#DC143C']}
                            />
                        </Route>
                    </Switch>
                </main>
            </div>
            </Router>
        );
    }
}

export default App;
