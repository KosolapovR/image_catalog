import React from 'react';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    input: {
        marginBottom: '10px'
    },
    inputWrapper: {
        height: '50px'
    }
});

function InputField({input, name, type, meta: {touched, error}}) {
    const classes = useStyles();

    if (touched && error) {
        return (
            <div className={classes.inputWrapper}>
                <TextField
                    error
                    helperText="Заполните тег"
                    className={classes.input}
                    size={"small"}
                    variant="outlined"
                    margin="normal"
                    id={name}
                    {...input}
                    name={name}
                    type={type}
                />
            </div>
        );
    } else {
        return (
            <div className={classes.inputWrapper}>
                <TextField
                    className={classes.input}
                    size={"small"}
                    variant="outlined"
                    margin="normal"
                    id={name}
                    {...input}
                    name={name}
                    type={type}
                />
            </div>
        );
    }
}

export default InputField;