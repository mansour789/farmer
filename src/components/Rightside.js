import React, { Component } from 'react'
import { PlantContext } from '../Context';
 class Rightside extends Component {

    static contextType = PlantContext;
    render() {
        const {data, name, wiki, image} = this.context;
        console.log(data)
        console.log(name)
        console.log(wiki)
        console.log(image)
        
        return (
            <>
               <h1>Name is: {name}</h1> 
               {/* <a href=""></a> */}
            </>
        )
    }
}

export default Rightside
