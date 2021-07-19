
function ParticularStuff(props){
    return (
        <div className="col-md-3 mr-5 ml-5 col-12 mb-4 mt-4 blackBorder">
            <div className="row">
                <img className="img-fluid" width="100%" src={` /stuffimages/${props.stuffprop.image }`} alt="imasge"/>
            </div>
        </div>
        
    );
}

export default ParticularStuff;