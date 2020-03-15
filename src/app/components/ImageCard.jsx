import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {change} from 'redux-form';

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

    const handleClick = () => {
        props.changeFieldValue('tag', props.tag);
    };

    return (
        <div onClick={handleClick} id={`img_card${props.index}`} className={classes.card}>
            <img className={classes.img} src={props.url} alt={props.tag}/>
        </div>
    );

}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFieldValue: function (field, value) {
            dispatch(change('imageSelectForm', field, value))
        }
    }
};

export default connect(null, mapDispatchToProps)(ImageCard);