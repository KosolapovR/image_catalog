import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import InputField from "./InputField";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {Field, reduxForm} from "redux-form";
import {groupImageAC, ungroupImageAC} from "../state/catalog/operations";
import {clearImgListAC} from "../state/catalog/actions";
import {required} from "../utils/formValidator";


const useStyles = makeStyles({
    form: {
        margin: '20px'
    },
    button: {
        margin: "25px 5px"
    }
});

function Form({handleSubmit, isFetch, isGrouped, error, ...props}) {

    const changeGroupStatus = () => {
        isGrouped ? props.ungroup() : props.group();
    };

    const classes = useStyles();

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <Grid container justify="flex-end" spacing={0}>
                <Grid item xs={12} sm={3} md={5}>
                    <Field
                        name="tag"
                        type="text"
                        validate={[required]}
                        component={InputField}
                    />
                </Grid>
                <Grid item xs={12} sm={9} md={6}>
                    {isFetch ? <Button
                        className={classes.button}
                        variant="contained"
                        size="small"
                        color="primary"
                        type="submit"
                        disabled
                    >
                        Загрузка...
                    </Button> : <Button
                        className={classes.button}
                        variant="contained"
                        size="small"
                        color="primary"
                        type="submit"
                    >
                        Загрузить
                    </Button>}
                    <Button
                        onClick={() => {
                            props.clearImgList('imageSelectForm')
                        }}
                        className={classes.button}
                        variant="contained"
                        size="small"
                        color="secondary"
                    >
                        Очистить
                    </Button>
                    <Button
                        onClick={() => {
                            changeGroupStatus()
                        }}
                        className={classes.button}
                        variant="contained"
                        size="small"
                        color="default"
                    >
                        {isGrouped ? 'Разгруппировать' : 'Сгруппировать'}
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

const WrappedForm = reduxForm({form: 'imageSelectForm'})(Form);

const mapStateToProps = state => ({
    isFetch: state.catalog.isFetch,
    isGrouped: state.catalog.isGrouped
});

const mapDispatchToProps = dispatch => ({
    group: () => {
        dispatch(groupImageAC());
    },
    ungroup: () => {
        dispatch(ungroupImageAC());
    },
    clearImgList: () => {
        dispatch(clearImgListAC());
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(WrappedForm);