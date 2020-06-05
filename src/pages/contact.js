import React, { Component } from 'react';
import { BsFillEnvelopeFill} from "react-icons/bs";
import {FaRegAddressCard, FaPhone  } from 'react-icons/fa';

export class Contact extends Component {
    render() {
        return (
            <div>
                 <div className="pastorgallery" >
                    <div className="container bannertext"> Contact us</div>
                </div>

                <section class="contact-section" style={{paddingBottom:'40px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 contact-column">
                                <div className="contact-info">
                                    <div className="contact-title">Get In Touch</div>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-sm-12 column">
                                            <div className="left-column contactaddress centred">
                                                <div className="icon-box"><FaRegAddressCard className="contact-icons"/></div>
                                                <h5>Address</h5>
                                                <div className="text">AJ - 325, SEC - 2, SALTLAKE, KOLKATA - 700091</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 column">
                                            <div className="right-column contactaddress">
                                                <div className="icon-box"><BsFillEnvelopeFill className="contact-icons"/></div>
                                                <h5>Email</h5>
                                                <div className="text">info@church.com</div>
                                            </div>
                                            <div className="right-column contactaddress">
                                                <div className="icon-box"><FaPhone className="contact-icons"/></div>
                                                <h5>Phone No</h5>
                                                <div className="text">0202 00 2365</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 contact-column">
                                <div className="contact-form-area">
                                    <div className="contact-title">Send Us A Message</div>
                                    <form id="contact-form" name="contact_form" class="default-form" action="https://tckzone.com/add-request" method="post">
                                        <input type="hidden" name="_token" value="o9xEoIeBnpo1kgJQPEMiKhCCXEBPrTt3jTdKByox"/> 
                                        <input type="hidden" name="_method" value="POST"/>
                                        <div className="row">
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <label>Name *</label>
                                                <input type="text" name="name" value="" required="" className="inputfield"/>
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <label>Email *</label>
                                                <input type="email" name="email" value="" required="" className="inputfield"/>
                                            </div>
                                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                <label>Subject</label>
                                                <input type="text" name="subject" value="" required="" className="inputfield"/>
                                            </div>
                                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                <label>Messsage</label>
                                                <textarea name="message" required="" row="3" className="inputfield"></textarea>
                                            </div>
                                            <div classNAme="form-group col-lg-12 col-md-12 col-sm-12" style={{paddingLeft: '30px'}}>
                                                <button type="submit" class="theme-btn" data-loading-text="Please wait..." className="button-primary button-primary1">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
    </section>
            </div>
        )
    }
}

export default Contact
