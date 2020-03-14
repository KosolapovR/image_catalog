import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        height: '270px',
        border: '1px solid #969696',
        borderRadius: '5px',
        overflow: 'hidden'
    },
    img: {
        width: '100%',
        height: 'auto',
    }
});


function ImageCard(props) {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            <img
                className={classes.img}
                src={props.url}
                alt={props.tag}
            />
        </div>
    );
}

export default ImageCard;