import React, { Component } from 'react';
import './navigation.css';
import {Link} from 'react-router-dom';

export class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <p><img src="" alt="not found" /> </p>
                <header>
                    <div class="container">
                        <img src="" alt="not seen" class="logo"/>
                        <nav>
                            <ul>
                                <li><Link to="/" className="active">Home</Link> </li>
                                <li><Link to ="/about">About</Link> </li>
                                <li><Link to ="/gallery">Gallery</Link> </li>
                                <li><Link to ="/audio">Audio Sermon</Link> </li>
                                <li><Link to ="/contact">Contact</Link> </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}

export default Navigation
