import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Link from './Link';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

import './CV.css';

class CV extends Component {

    render(){
        return(
            <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                marginLeft: '19%'
            }}>
                <div className={'table-of-contents'} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    padding: '20px'
                }}>
                    <Link label='Education'
                          link='#education'
                    />
                    <Link label='Professional History'
                          link='#history'
                    />
                    <Link label='Computer Skills & Courses'
                          link='#skills'
                    />
                    <Link label='Awards & Achievements'
                          link='#awards'
                    />
                    <Link label='Leadership Positions'
                          link='#leadership'
                    />
                    <Link label='Conferences Attended'
                          link='#conferences'
                    />
                </div>
                <div>
                    <div style={{
                        width: '60vw',
                        height: '90vh',
                        position: 'fixed',
                        overflowY: 'scroll',
                        overflowX: 'hidden'
                    }}>
                        <Grow in={true}>
                            <Paper elevation={3}>
                                {/*--- EDUCATION ---*/}
                                <CardContent>
                                    <Typography variant="h1" id='education'>
                                        Education
                                    </Typography>
                                    <div style={{marginBottom: '0.67em'}}>
                                        <div>
                                            2009-2013
                                            <div>
                                                <strong>University of Oregon</strong>
                                            </div>
                                            <div>
                                                Bachelor of Music, Saxophone Performance
                                            </div>
                                            <div>
                                                GPA 3.36
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <div style={{maxWidth: '900px'}}>
                                        2017-2020
                                        <div>
                                            <strong>Portland State University</strong>
                                        </div>
                                        <div>
                                            Master of Science, Computer Science
                                        </div>
                                        <div>
                                            GPA 3.89
                                        </div>
                                        <br />
                                        <div>
                                            Completed Specialty Tracks
                                            <br />
                                            <br />
                                            Systems & Networking
                                                <ul>
                                                    <li>
                                                        The Systems and Networking track studies the design and implementation of operating systems, wired and wireless computer networks including high performance computer systems, data centers, cloud computing architectures, distributed systems, fault tolerance, concurrency, systems programming, and theoretical topics related to these areas.
                                                    </li>
                                                </ul>
                                            Database Management
                                            <ul>
                                                <li>
                                                    The Database track covers concepts, languages, implementation and application of  database management systems. Other topics that have been offered in the track include formal  foundations of databases, databases for cloud and cluster environments, and data stream systems.
                                                </li>
                                            </ul>
                                            Software Engineering
                                            <ul>
                                                <li>
                                                    The Software Engineering track studies the principles, processes, techniques, and tools for building software systems.  Topics include software requirement, design, development, validation, and maintenance.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>

                                {/*--- PROFESSIONAL HISTORY ---*/}
                                <CardContent>
                                    <Typography variant="h1" id='history'>
                                       Professional History
                                    </Typography>
                                    <ul>
                                        <li>
                                            <strong>Highlights: </strong>
                                            <ul>
                                                <li>
                                                    2 years of industry experience prior to graduation
                                                </li>
                                                <li>
                                                    Award winning customer service
                                                </li>
                                            </ul>
                                        </li>
                                        <li> <strong>Autodesk Inc.</strong>, Software Engineer Intern</li>
                                        <ul>
                                            <li>
                                                June 2020 - Current
                                            </li>
                                            <li>
                                                Develop new features within Fusion 360, specifically those that enhance in-product messaging, as well as build utility programs to increase productivity and growth.
                                            </li>
                                            <li>
                                                JavaScript, React, C++, QT, Python, AWS.
                                            </li>
                                        </ul>
                                        <li> <strong>Intel Corporation</strong>, Software Engineer Intern </li>
                                        <ul>
                                            <li>
                                                June 2019 - June 2020
                                            </li>
                                            <li>
                                                Work along side the BIOS validation and automation team to identify areas of opportunities for efficiency and increase customer focus.
                                                Propose, design and build full-stack systems/tools to address inefficiencies as described above.
                                                Work collaboratively to advance projects from concept to production.
                                            </li>
                                            <li>
                                                Python, PyCharm, Django, Apache, Linux, HTML/css, Bootstrap4, Power BI, power query
                                            </li>
                                        </ul>
                                        <li> <strong>Rhode & Schwarz</strong>, Software Engineer Intern </li>
                                        <ul>
                                            <li>
                                                January 2018 - June 2019
                                            </li>
                                            <li>
                                                Develop and debug testing framework in C++ for R&S spectrum analyzers. Control and program equipment using SCPI. Write, track and update bug reports. Write and maintain command-line utilities and tools using Python.
                                            </li>
                                            <li>
                                                Python, SCPI, C++, Visual Studio, PyCharm
                                            </li>
                                        </ul>
                                    </ul>
                                </CardContent>

                                {/*--- Computer Skills ---*/}
                                <CardContent>
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap'
                                    }}>
                                    <Typography variant="h1" id='skills'>
                                        Computer Skills
                                    </Typography>
                                        <ul>
                                            <li> <strong>Languages </strong></li>
                                            <ul>
                                                <li>Python, fluent</li>
                                                <li>JavaScript, fluent</li>
                                                <li>C++, fluent</li>
                                                <li>C, basic competence</li>
                                                <li>Power Query, basic competence</li>
                                            </ul>
                                        </ul>
                                        <ul>
                                            <li> <strong>Frameworks </strong></li>
                                            <ul>
                                                <li>React</li>
                                                <li>Django</li>
                                                <li>Express.js</li>
                                                <li>Qt</li>
                                                <li>Apache Spark</li>
                                                <li>Processing Graphical Library</li>
                                            </ul>
                                        </ul>
                                        <ul>
                                            <li> <strong>Databases </strong></li>
                                            <ul>
                                                <li>MongoDB</li>
                                                <li>PostgreSQL</li>
                                                <li>Google Big Table</li>
                                                <li>Apache Hive</li>
                                                <li>Hadoop DFS</li>
                                            </ul>
                                        </ul>
                                        <ul>
                                            <li> <strong>Applications </strong></li>
                                            <ul>
                                                <li>Power BI</li>
                                                <li>Tableau</li>
                                                <li>Jetbrains IDE's</li>
                                                    <ul>
                                                        <li>PyCharm</li>
                                                        <li>Webstorm</li>
                                                        <li>CLion</li>
                                                        <li>DataGrip</li>
                                                    </ul>
                                                <li>Microsoft Visual Studio</li>
                                                <li>Adobe Creative Suite</li>
                                            </ul>
                                        </ul>
                                        <ul>
                                            <li> <strong>Platforms </strong></li>
                                            <ul>
                                                <li>Windows</li>
                                                <li>Linux</li>
                                                <li>Xv6</li>
                                                <li>Google Cloud Platform</li>
                                                <ul>
                                                    <li>Compute Engine</li>
                                                    <li>App Engine</li>
                                                    <li>Cloud Dataproc</li>
                                                    <li>Storage Bigtable</li>
                                                    <li>Storage Bucket</li>
                                                </ul>
                                            </ul>
                                        </ul>
                                        <ul>
                                            <li> <strong>Courses Taken: </strong></li>
                                            <ul>
                                                <li>Internet and Cloud Systems</li>
                                                <li>Full Stack Web Development</li>
                                                <li>Front End Web Technology</li>
                                                <li>Internetworking Protocols</li>
                                                <li>Cloud & Cluster Databases</li>
                                                <li>Data Science & Visualization</li>
                                                <li>Intro to Database Management</li>
                                                <li>Concepts of Operating Systems</li>
                                                <li></li>
                                            </ul>
                                        </ul>
                                        <ul>
                                            <li>  </li>
                                            <ul>
                                                <li>Intro to Computer Security</li>
                                                <li>Agile & Other XP Software</li>
                                                <li>Elements of Software Engineering</li>
                                                <li>Special Topics: Virtual Reality</li>
                                                <li>Special Topics: Communication Networks</li>
                                                <li>Algorithm Design & Analysis</li>
                                                <li>Programming Systems</li>
                                                <li>Programming Languages</li>
                                                <li>Data Structures</li>
                                                <li>Discrete Structures I & II</li>
                                            </ul>
                                        </ul>

                                    </div>
                                </CardContent>

                                {/*--- Honors & Awards ---*/}
                                <CardContent>
                                    <Typography variant={'h1'} id={'awards'}>
                                        Honors & Awards
                                    </Typography>
                                    <ul>
                                        <li>Facebook Grace Hopper Celebration Scholar 2019</li>
                                        <li>Academic Achievement and Leadership Apr 2020</li>
                                        <li>Academic Achievement and Leadership Jan 2020</li>
                                        <li>Academic Achievement and Leadership Jan 2019</li>
                                    </ul>

                                </CardContent>

                                {/*--- LEADERSHIP ---*/}
                                <CardContent>
                                    <Typography variant={'h1'} id={'leadership'}>
                                        Leadership
                                    </Typography>
                                    <ul>
                                        <li>WiCS President</li>
                                        <li>WiCS Mentorship Program Director</li>
                                        <li>Sound of Late Board Member</li>
                                        <li>Ova Novi Ensemble Co-Founder</li>
                                        <li>Oregon Music Festival Marketing Coordinator</li>
                                        <li>Oregon Music Festival Visiting Artists Coordinator</li>
                                    </ul>
                                </CardContent>

                                {/*--- CONFERENCES ---*/}
                                <CardContent>
                                    <Typography variant={'h1'} id={'conferences'}>
                                        Conferences
                                    </Typography>
                                    <ul>
                                        <li>CRA-WP Grad Cohort 2020 (cancelled due to Covid-19)</li>
                                        <li>Grace Hopper Celebration 2019, Orlando</li>
                                        <li>CRA-WP Grad Cohort 2019, Chicago</li>
                                        <li>Grace Hopper Celebration 2018, Houston</li>
                                    </ul>
                                </CardContent>

                            </Paper>
                        </Grow>
                    </div>
                </div>
            </div>
        );
    }
}

export default CV;
