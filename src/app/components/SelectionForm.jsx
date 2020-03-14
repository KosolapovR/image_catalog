import React from 'react';
import {connect} from 'react-redux';
import InputField from "./InputField";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {Field, reduxForm} from "redux-form";
import {clearImgList} from "../state/catalog/operations";


const useStyles = makeStyles({
    form: {
        margin: '20px'
    },
    button: {
        margin: "20px 5px"
    }
});

function Form(props) {

    const {handleSubmit, isFetch} = props;

    const classes = useStyles();

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <Grid container justify="flex-end" spacing={0}>
                <Grid item xs={12} sm={3} md={5}>
                    <Field
                        name="tag"
                        type="text"
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
                        className={classes.button}
                        variant="contained"
                        size="small"
                        color="default"
                    >
                        Сгруппировать
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

const WrappedForm = reduxForm({form: 'imageSelectForm'})(Form);

const mapStateToProps = state => ({
    isFetch: state.catalog.isFetch
})

export default connect(mapStateToProps, {clearImgList})(WrappedForm);