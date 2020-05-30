import React, { Component } from 'react'
import Background from '../components/background';
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom';
import { FiClock, FiPhoneCall } from "react-icons/fi";
import {MdLocationOn} from 'react-icons/md'
import './home.css';
import Blog from '../components/blog';
import Testimony from '../components/testimony';


export class Home extends Component {
    render() {
        return (
            <div className="" id="homepage">
                <Background/>
                <div className="churchmission">
                    <div className="container">
                        <div className="feature-content">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 feature-column">
                                        <div className="single-feature-content" >
                                            <div className="icon-box"><i class="flaticon-dollar"></i></div>
                                            <div className="link-goal"><a href="">Our Goal</a></div>
                                            <div className="text">We are constantly creating events to reach out to more creative kids. Our goal is to train 10,000 African kids at no cost in the space of 10 years.
                                                you can be a part of this exciting and life changing journey with us!</div>
                                            
                                        </div>
                                    
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 feature-column">
                                
                                        <div className="single-feature-content" style={{background:('images/resource/feature-1.jpg')}}>
                                            <div className="icon-box"><i class="flaticon-dollar"></i></div>
                                            <div className="link-goal"><a href="">Our Mission</a></div>
                                            <div className="text">We are constantly creating events to reach out to more creative kids. Our goal is to train 10,000 African kids at no cost in the space of 10 years.
                                                you can be a part of this exciting and life changing journey with us!</div>
                                        
                                        </div>
                                    
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12 feature-column">
                                    <div className="single-feature-content" style={{background:('images/resource/feature-1.jpg')}}>
                                        <div className="icon-box"><i class="flaticon-dollar"></i></div>
                                        <div className="link-goal"><a href="">Our Mission</a></div>
                                        <div className="text">We are constantly creating events to reach out to more creative kids. Our goal is to train 10,000 African kids at no cost in the space of 10 years.
                                            you can be a part of this exciting and life changing journey with us!</div>
                                    
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* homepage about us code */}
                <div className="container homePageabout" style={{color: 'black', position:'relative', paddingBottom:'30px'}}>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 about-column">
                            <div className="homeheader"><span className="homeheader-span">About</span> us</div>
                            <p>Quisque ut urna posuere, gravida nisl eu, dictum diam. In hac habitasse platea dictumst. Phasellus egestas 
                                dignissim tellus. Proin sit amet euismod lacus, in auctor nisl. Vestibulum rhoncus dui ut pellentesque congue. Mauris tristique erat et nulla tincidunt, in viverra urna pretium eu sagittis.
                                 Rauris eleifend nisi justo, in volutpat magna scelerisque eget habitasse imperdiet elit eu nunc viverra.</p>
                            <div className="linkto text-center">
                                <Link to="/about" className="button-primary">View more</Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12 col-sm-12 video-column" style={{paddingTop: '30px'}}>
                            <div className="video-gallery wow fadeInRight animated" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationduration: '1500ms', animationDelay: '0ms', animationName: 'fadeInRight'}}>
                                {/* <img src="images/resource/video-gallery.jpg" alt="Awesome Video Gallery"/> */}
                                <div className="overlay-gallery">
                                    <div className="icon-holder">
                                        <div className="icon wow zoomIn animated" data-wow-delay="300ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '300ms', animationName: 'zoomIn'}}>
                                            <ReactPlayer controls width='480px' height='280px' url='https://www.youtube.com/watch?v=ZILtoYyCOC4'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>

                {/* homepage blog code */}

                <Blog />

                {/* code for upcoming events start here */}
                <div className="upcoming-event container-fluid text-center">
                    <div className="container">
                    <div className="container">
                        <div className="homeheader"><span className="homeheader-span">Upcoming </span> event</div>
                        <p>Dont miss the chance in joining us in any of our programs</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-10 col-sm-12 ">
                            <div className="card">
                                <div className="card-horizontal">
                                    <div className="img-square-wrapper">
                                        <h3>DEC</h3>
                                        <h2>14-16</h2>
                                        
                                    </div>
                                    <div className="card-body text-left">
                                        <div className="event-topic">
                                            <Link to='./'>2020 CHANGE EXPERIENCE CANADA CONFERENCE </Link>< br />
                                            <span>EGLISE DU ROYAUME DU CHRIST</span>
                                        </div>
                                        <div className="card-text event-card-text" ><span className="icon-span"><FiClock className="react-icons" /></span>
                                            7: 30PM Prompt
                                            <span className="phone"><FiPhoneCall className="react-icons"/> 4186444000</span>
                                            <div><span className=""><MdLocationOn className="react-icons"/>Quebec city convention centre, 900 Boulevard Renelevesques E quebec city QC GIR 2B5 Canada </span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-10 col-sm-12 ">
                            <div className="card">
                                <div className="card-horizontal">
                                    <div className="img-square-wrapper">
                                        <h3>DEC</h3>
                                        <h2>29</h2>
                                        
                                    </div>
                                    <div className="card-body text-left">
                                        <div className="event-topic">
                                            <Link to='./'>HEAL THE LAND </Link>< br />
                                            <span>EGLISE DU ROYAUME DU CHRIST</span>
                                        </div>
                                        <div className="card-text event-card-text" ><span className="icon-span"><FiClock className="react-icons" /></span>
                                            7: 30PM Prompt
                                            <span className="phone"><FiPhoneCall className="react-icons"/> 4186444000</span>
                                            <div><span className=""><MdLocationOn className="react-icons"/>Quebec city convention centre, 900 Boulevard Renelevesques E quebec city QC GIR 2B5 Canada </span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="col-lg-6 col-md-10 col-sm-12 ">
                            <div className="card">
                                <div className="card-horizontal">
                                    <div className="img-square-wrapper">
                                        <h3>DEC</h3>
                                        <h2>29</h2>
                                        
                                    </div>
                                    <div className="card-body text-left">
                                        <div className="event-topic">
                                            <Link to='./'>HEAL THE LAND </Link>< br />
                                            <span>EGLISE DU ROYAUME DU CHRIST</span>
                                        </div>
                                        <div className="card-text event-card-text" ><span className="icon-span"><FiClock className="react-icons" /></span>
                                            7: 30PM Prompt
                                            <span className="phone"><FiPhoneCall className="react-icons"/> 4186444000</span>
                                            <div><span className=""><MdLocationOn className="react-icons"/>Quebec city convention centre, 900 Boulevard Renelevesques E quebec city QC GIR 2B5 Canada </span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6 col-md-10 col-sm-12 ">
                            <div className="card">
                                <div className="card-horizontal">
                                    <div className="img-square-wrapper">
                                        <h3>DEC</h3>
                                        <h2>29</h2>
                                        
                                    </div>
                                    <div className="card-body text-left">
                                        <div className="event-topic">
                                            <Link to='./'>HEAL THE LAND </Link>< br />
                                            <span>EGLISE DU ROYAUME DU CHRIST</span>
                                        </div>
                                        <div className="card-text event-card-text" ><span className="icon-span"><FiClock className="react-icons" /></span>
                                            7: 30PM Prompt
                                            <span className="phone"><FiPhoneCall className="react-icons"/> 4186444000</span>
                                            <div><span className=""><MdLocationOn className="react-icons"/>Quebec city convention centre, 900 Boulevard Renelevesques E quebec city QC GIR 2B5 Canada </span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>

                {/* code for how to help us */}
                <section className="overlay-bg centred homedonation">
                    <div className="container text-center" style={{color:'white', padding:'20px 0px 70px 0px'}}>
                        <div className="homeheader" style={{color: 'white'}}><span className="homeheader-span">Make </span> Donations</div>
                        <div className="text">Every of your penny can help us. . Give and it shall be given unto you, good measure 
                            press down and shaking together shall men give unto your bossom.
                        </div>
                        <div className="donate-box" style={{paddingTop:'20px'}}><Link to='/donation' className="button-primary button-primary1"> Donate </Link></div>
                    </div>
                </section>
                {/* section part two, who to help */}
                <section className="whotohelp" >
                    <div className="container text-center">
                        <div className="homeheader" ><span className="homeheader-span">Who </span> to <span className="homeheader-span">Help</span></div>
                        <p>Your donation can go far and god bless you</p>

                        <div className="row whotohelprow">
                            <div className="col-lg-3 col-md-6 col-sm-12 help-column">
                                <div className="single-help-content">
                                    <figure className="img-box">
                                        <Link to='/donation'><img src="https://image.shutterstock.com/image-photo/church-building-260nw-264314027.jpg" alt="not seen" className="imgsection"/></Link>                                        
                                    </figure>
                                    <div className="lower-content">
                                        <h4><Link to='/donation' className="whotohelplink">Church development</Link></h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 help-column">
                                <div className="single-help-content">
                                    <figure className="img-box">
                                        <Link to='/donation'><img src="https://cdn.pixabay.com/photo/2017/07/27/11/16/person-2544996__340.jpg" alt="not seen" className="imgsection"/>
                                        </Link>
                                    </figure>
                                    <div className="lower-content">
                                        <h4><Link to='/donation' className="whotohelplink">Give Old People</Link></h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 help-column">
                                <div className="single-help-content">
                                    <figure className="img-box">
                                        <Link to='/donation'><img src="https://image.shutterstock.com/image-photo/children-playing-tug-war-park-260nw-459100483.jpg" alt="not seen" className="imgsection"/>
                                        </Link>
                                    </figure>
                                    <div className="lower-content">
                                        <h4><Link to='/donation' className="whotohelplink">Children & Orphans</Link></h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 help-column">
                                <div className="single-help-content">
                                    <figure className="img-box">
                                        <Link to='/donation'><img src="https://cdn.pixabay.com/photo/2016/11/13/16/05/hospice-1821429__340.jpg" alt="not seen" className="imgsection"/>
                                        </Link>
                                    </figure>
                                    <div className="lower-content">
                                        <h4><Link to='/donation' className="whotohelplink">Less Privilege</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </section>

                {/* this code is for testimony */}
                <Testimony />
            </div>
           
        )
    }
}

export default Home
