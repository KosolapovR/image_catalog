import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import WrappedForm from "../components/SelectionForm";
import UngroupedImageList from "../components/UngroupedImageList";
import GroupedImageList from "../components/GroupedImageList";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {getImage, hidePopUpAC} from "../state/catalog/operations";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function CatalogPage({images, requestStatus, isGrouped, ...props}) {

    console.log(requestStatus);

    const [open, setOpen] = useState(false);
    const [statusMessage, setStatusMessage] = useState({text: '', status: ''});

    useEffect(() => {
        if (requestStatus === 'error') {
            setStatusMessage({text: 'Произошла http ошибка', status: 'error'});
            setOpen(true);
            props.hidePopUpAC();
        } else if (requestStatus === 'empty') {
            setStatusMessage({text: 'По тегу ничего не найдено', status: 'info'});
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
            {isGrouped ? <GroupedImageList/> : <UngroupedImageList/>}
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={statusMessage.status}>
                    {statusMessage.text}
                </Alert>
            </Snackbar>
        </>
    );
}

const mapStateToProps = state => ({
    images: state.catalog.images,
    requestStatus: state.catalog.request.status,
    isGrouped: state.catalog.isGrouped
});

export default connect(mapStateToProps, {getImage, hidePopUpAC})(CatalogPage);