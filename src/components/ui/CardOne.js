
import classes from './Card.module.css';

function CardOne(props){
    return(
        <div className={classes.cardOne}>
            {props.children}
        </div>
    );
}

export default CardOne;