import React from "react";
import Image from 'react-bootstrap/Image'
import bg_img from '../img/ED08C064-DD9B-43AC-BEA8-DDCC7B719C23_1_105_c.jpeg'

import profile_img from '../img/K7.JPG'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="wrapper">
                <div className="about-wrapper">
                    <div className="profile-img-wrapper center">
                        <div className="profile-img-cropper">
                            <Image className="profile-img" src={profile_img}></Image>
                        </div>
                    </div>


                    <h1 className="center">About Me</h1>

                    <div className="about-body">
                        <p>
                            Hi, my name is Long-Hin Fung, I graduated from National Taiwan University with a Bachelor degree in Mathematics, and am now a graduate student in the Computer Science and Information Engineering department at the National Taiwan University.
                        </p>
                    </div>
                </div>
                <div className="bg-img-wrapper">
                    <Image className="bg-img" src={bg_img}></Image>
                </div>
            </div>
        </>
    )
}

export default Home