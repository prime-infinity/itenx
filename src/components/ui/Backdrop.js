
import classes from './Ui.module.css';

function Backdrop({onDrop}){
    return(
        <div className={classes.backdrop} onClick={onDrop}>
        </div>
    );
}

export default Backdrop;