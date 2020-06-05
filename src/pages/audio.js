import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';

// const displayaudio=[
//     {   
//         audiocd: audio,
//     },
//     {   
//         audiocd: audio,
//     },
// ]

export class Audio extends Component {
    render() {
        return (
            <div>
                <div className="pastorgallery audioMp3" >
                    <div className="container bannertext"> Listen to our Sermon</div>
                </div>
                <div className="sermon" style={{textAlign:'center', padding: '0px 0px 50px 0px'}}>
                    <h1 className="sermon-header">Sermon for the month</h1>
                    <p>Experience God's presence</p>
                </div>

                <div className="container-fluid" style={{background:'rgb(236, 230, 230)'}}>
                <div className="container audiosermon" id="sermon">
                    <div className="row d-flex sermon-wrap">
                    <div className="col-md-6 d-flex align-items-stretch ftco-animate fadeInUp ftco-animated">
                        <div className="img">
                            <img src="https://colorlib.com/preview/theme/spring/images/sermon-1.jpg" alt="not found"width="100%" className="sermon-image" />
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <h2 className="mb-4"><Link to='#sermon'className="sermon-topic">Lord is Sufficient for all of our needs</Link></h2>
                        <div className="meta">
                            <p>
                                <span>Sermon from: <Link to ='#sermon' className="spanlink">Felix Gonner</Link></span>
                                <span>Categories: <Link to='#sermon'className="spanlink">God</Link>, <Link to = '#sermon'className="spanlink">Pray</Link></span>
                                <span><Link to ='#sermon'className="spanlink">On Sunday 13 Jan, 2019</Link></span>
                            </p>
                        </div>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <div className="playaudio" style={{top:'-200px', position:'relative'}}>
                            <ReactPlayer controls width='480px' height='280px' url='https://res.cloudinary.com/aitechma/video/upload/v1591202403/audio/audio1.mp3_m1yq3k.mp3'/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                {/* codes for others sermons */}
                <div className="sermon" style={{textAlign:'center', padding: '0px 0px 50px 0px'}}>
                    <h1 className="sermon-header">Our sermons</h1>
                    <p>Experience God's presence</p>
                </div>
            </div>
        )
    }
}

export default Audio
