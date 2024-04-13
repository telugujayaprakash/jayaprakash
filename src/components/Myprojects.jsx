import React from 'react';
import './components.css';
import 'animate.css';
import test from '../images/csscards.jpg'

function myprojects() {
    return (
        <>
            <h1 className='mpro animate__animated animate__pulse'>My Projects</h1>
                <div className='myproj'>
                    <div class="card">
                        <div class="overlay">
                            <div class="text">
                                <h2>Project Title</h2>
                                <p>Project Description</p>
                            </div>
                        </div>
                        <div class="content">
                            <img src={test} alt="Project Image" />
                        </div>
                    </div>
                    <div class="card">
                        <div class="overlay">
                            <div class="text">
                                <h2>Project Title</h2>
                                <p>Project Description</p>
                            </div>
                        </div>
                        <div class="content">
                            <img src="image.jpg" alt="Project Image" />
                        </div>
                    </div>
                    <div class="card">
                        <div class="overlay">
                            <div class="text">
                                <h2>Project Title</h2>
                                <p>Project Description</p>
                            </div>
                        </div>
                        <div class="content">
                            <img src="image.jpg" alt="Project Image" />
                        </div>
                    </div>
                    <div class="card">
                        <div class="overlay">
                            <div class="text">
                                <h2>Project Title</h2>
                                <p>Project Description</p>
                            </div>
                        </div>
                        <div class="content">
                            <img src="image.jpg" alt="Project Image" />
                        </div>
                    </div>
                </div>
        </>
    );
}
export default myprojects;