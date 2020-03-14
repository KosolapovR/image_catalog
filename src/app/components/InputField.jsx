import React from 'react';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    input: {
        marginBottom: '10px'
    }
});

function InputField({input, name, type}) {
    const classes = useStyles();

    return (
        <TextField
            className={classes.input}
            size={"small"}
            variant="outlined"
            margin="normal"
            required
            id={name}
            {...input}
            name={name}
            autoFocus
            type={type}
        />
    );
}

export default InputField;