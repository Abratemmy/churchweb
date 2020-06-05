import React, { Component } from 'react'

export class Pastorgallery extends Component {
    render() {
        return (
            <div className="">
                <div className="pastorgallery">
                    <div className=" container bannertext"> Our Pastors</div>
                </div>
                <div className="pastors container"style={{paddingTop:'30px'}}>
                    <div className="row">
                        <div className="col-lg-8 col-md-6 col-sm-12 masonry-item all ikorodu-zone">
                            <div className="gallery-portfolio">
                                <figure className="gallery-img-box">
                                    <img src="https://res.cloudinary.com/aitechma/image/upload/v1591033495/churchweb/prophet_Immanuel_orr0v7.jpg"width="100%" alt="TCKZone Ikorodu" />
                                    <div className="text">Ikorodu Zone</div>
                                </figure>                            
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all ikorodu-zone">
                        <div className="row">
                            <div className="col-lg-12 col-md-6 col-sm-12 masonry-item all ikorodu-zone">
                                <div className="gallery-portfolio">
                                    <figure className="gallery-img-box">
                                        <img src="https://res.cloudinary.com/aitechma/image/upload/v1591033495/churchweb/Rev.Martins_x9s33v.jpg"width="100%" alt="TCKZone Ikorodu" />
                                        <div className="text">Ikorodu Zone</div>
                                    </figure>                            
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-6 col-sm-12 masonry-item all ikorodu-zone">
                            <div className="single-portfolio-content">
                                <figure className="img-box">
                                    <img src="https://res.cloudinary.com/aitechma/image/upload/v1591033497/churchweb/Pst._Israel_vr4gnf.jpg"width="100%" alt="TCKZone Ikorodu" />
                                    <div className="text">Ikorodu Zone</div>
                                </figure>                            
                            </div>
                        </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
                </div>
        )
    }
}

export default Pastorgallery
