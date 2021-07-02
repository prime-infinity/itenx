
var timee =  false;
var style = {
    color:'red',
    backgroundColor:'blue',
}

var style2 = {
    color:'black',
    backgroundColor:'green',
}

function Header({title,naaa}){

    setTimeout(() => {
        timee  = true
    }, 2000);
    return(
        <div style={timee ? style:style2} >
            header says {title} of name {naaa}
        </div>
    );
}



export default Header;