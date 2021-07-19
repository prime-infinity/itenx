//import classes from '../stuffs/Stuffs.module.css'

function ParticularStuff(props){

    function showStuffOptions(){
        //console.log(props.stuffprop.id)
    }
 
    return (
        <div className={`col-md-3 mr-5 ml-5 col-12 mb-4 mt-4 blackBorder`} id={`stuffdiv${props.stuffprop.id}`} onClick={showStuffOptions}>
            <div className="row">
                <img className="img-fluid" width="100%" src={` /stuffimages/${props.stuffprop.image }`} alt="imasge"/>
            </div>
        </div>
        
    );
}

export default ParticularStuff;