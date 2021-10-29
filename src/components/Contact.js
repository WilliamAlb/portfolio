import React from "react";
import { icons } from "./utils/icons";

function Contact(){

    return(
        <div className='splashscreen'>
            <h1 id='left'>Contact me!</h1>
            <h1 id='right'>I'm always happy to accept criticism</h1>
            <h1 id='right'>or hear from you!</h1>

            <div className='contact-container'>
                <a href='https://github.com/WilliamAlb' target='_blank' rel='noreferrer'>{icons.githubContact}</a>
                <a href='https://www.linkedin.com/in/william-allaberdyev-12590b211/' target='_blank' rel='noreferrer'>{icons.linkedinContact}</a>
                <a href='eridianwiliam@yahoo.com' target='_blank' rel='noreferrer'>{icons.mailContact}</a>
                <a href='https://www.codecademy.com/profiles/EridWill' target='_blank' rel='noreferrer'>{icons.codeacademyContact}</a>
            </div>
        </div>
    );
}

export default Contact;