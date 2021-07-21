import classes from '../stuffs/Stuffs.module.css'
import { useState } from 'react';

function ParticularStuff(props){

    const [addingId, addClassToId] = useState();

    function showStuffOptions(){
        //console.log(props.stuffprop.id)
        addClassToId(props.stuffprop.id)
        

        if(addingId === props.stuffprop.id){
            addClassToId(0)
        }
       
    }
 
    return (
        <div className={`col-md-3 mr-5 ml-5 col-12 mb-4 mt-4 blackBorder ${addingId === props.stuffprop.id ? classes.stuffPopout:""}`} id={`stuffdiv${props.stuffprop.id}`} onClick={showStuffOptions}>
            <div className="row">
                <img className="img-fluid" width="100%" src={` /stuffimages/${props.stuffprop.image }`} alt="imasge"/>
            </div>
        </div>
        
    );
}

export default ParticularStuff;