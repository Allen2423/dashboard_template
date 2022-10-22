import React from 'react';
import Dashboard from './Dashboard';
import '../App.css'
import App from './../App';

const About = () => {
    return (
            <div className='aboutContainer'>
                <h1>About</h1>

                <div class="row mt-4">
                    <div class="col-sm-6 ">
                        <div class="card BoxShadow">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 ">
                        <div class="card BoxShadow">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}


export default About;