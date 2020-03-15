import React from 'react';
import {connect} from 'react-redux';
import ImageCard from "./ImageCard";
import {splitGroup} from "../utils/groupSpliter";
import Grid from "@material-ui/core/Grid"
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    groupWrapper: {
        marginBottom: '10px',
        padding: '10px',
        border: '1px solid #969696',
        borderRadius: '7px'
    }
});

function GroupedImageList({images}) {

    const classes = useStyles();

    const splittedImages = splitGroup(images);

    const keys = Object.keys(splittedImages);
    const values = Object.values(splittedImages);

    let groups = [];

    for (let i = 0; i < keys.length; i++) {
        groups = [...groups, {tag: keys[i], urls: values[i]}]
    }

    return (
        <Grid container spacing={2}>
            {groups.map((images, index) => <Grid className={classes.groupWrapper} key={index} item xs={12}>
                <Typography component="h2" variant='h5'>{images.tag}</Typography>
                <Grid container spacing={2}>
                    {
                        images.urls.map((url, index) => (
                            <Grid
                                key={index}
                                item
                                xs={12}
                                sm={6}
                                md={4}
                            >
                                <ImageCard url={url} tag={images.tag}/>
                            </Grid>
                        ))}
                </Grid>
            </Grid>)}
        </Grid>
    );
}

const mapStateToProps = state => ({
    images: state.catalog.images
});

export default connect(mapStateToProps, {})(GroupedImageList);