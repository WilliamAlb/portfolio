import React from "react";
import {WorkItem} from './WorkItem';
import { images } from "./utils/images";
import './Work.css'

const testitem=[
    {
        name:'Rythmic Gymnastics',
        description:"A website developed for my mother's rhythmic gymnastics business in Karmi'el, implementing a minimalistic style and a modern feeling all the while attempting to maintain the integrity and personality of both the business itself and the owner, the development process taught me to better implement flex and grid type layouts as well as solidify my knowledge in JavaScript and styling prowess with CSS, all the while utilizing Photoshop and Figma as aids in the construction process, due to this being my first project a substantial amount of idependant problem solving existed",
        stack:['css','html','js'],
        picture:images.rythmicproject
    },
    {
        name:'Find your hat',
        description:'A Javascript project assigned during my course, a small terminal game which involves a grid and a random number of "bombs" spread across it with a single win state objective, the player must navigate through using keyboard stroke inputs to achieve his goal, which is the "hat".',
        stack:['js'],
        picture:images.hatproject
    },
    {
        name:'cool project',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec magna nisi. Phasellus blandit dui porttitor sollicitudin ultrices. Sed sagittis mauris metus, rutrum luctus nunc porta eleifend. Integer ut bibendum enim. Praesent ligula lectus, vehicula non lorem at, fermentum varius sem. Maecenas consequat elit vehicula dictum suscipit. Nullam tortor metus, accumsan eu euismod sit amet, blandit vel ante. Ut tristique justo sit amet metus mattis placerat. Donec blandit maximus leo ut vulputate. Etiam id nulla et quam tristique mollis. Nunc id arcu sem.',
        stack:['css','html','js'],
        picture:images.rythmicproject
    }
]
function Work(){
    return(
        <section className='page-work'>
            <h1 className='title'>My Work</h1>
            {
                testitem.map((item,index) =>{
                    return index%2!==0?<WorkItem right={false} workItem={item}/>:<WorkItem right={true} workItem={item}/>
                })

            }
        </section>
        

    );
}

export default Work;