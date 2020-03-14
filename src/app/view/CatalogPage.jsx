import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import WrappedForm from "../components/SelectionForm";
import ImageList from "../components/ImageList";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {getImage, hidePopUpAC} from "../state/catalog/operations";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function CatalogPage({images, requestStatus, ...props}) {

    const [open, setOpen] = useState(false);

    useEffect(()=>{
        if(requestStatus === 'error'){
            setOpen(true);
            props.hidePopUpAC();

        }
    });


    const handleSubmit = (values) => {
        props.getImage(values.tag);
    };

    const handleClose = (event, reason) => {
        setOpen(false);
    };

    return (
        <>
            <WrappedForm onSubmit={handleSubmit}/>
            <ImageList/>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Произошла http ошибка
                </Alert>
            </Snackbar>
        </>
    );
}

const mapStateToProps = state => ({
    images: state.catalog.images,
    requestStatus: state.catalog.request.status
});

export default connect(mapStateToProps, {getImage, hidePopUpAC})(CatalogPage);