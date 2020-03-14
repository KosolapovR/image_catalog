import React from 'react';
import {connect} from 'react-redux';
import ImageCard from "./ImageCard";
import Grid from "@material-ui/core/Grid"

function ImageList(props) {
    return (
        <Grid container spacing={2}>
            {props.images.map((img, index) => (
                <Grid
                    key={index}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                >
                    <ImageCard tag={img.tag} url={img.url}/>
                </Grid>
            ))}
        </Grid>
    );
}

const mapStateToProps = state => ({
    images: state.catalog.images
});

export default connect(mapStateToProps, {})(ImageList);