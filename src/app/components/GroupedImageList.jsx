import React from 'react';
import {connect} from 'react-redux';
import ImageCard from "./ImageCard";
import {splitGroup} from "../utils/groupSpliter";
import Grid from "@material-ui/core/Grid"

function GroupedImageList({images}) {
    /** MAP */
    const splittedImages = splitGroup(images);

    let keys = Object.keys(splittedImages);
    let values = Object.values(splittedImages);

    let groups = [];

    for (let i = 0; i < keys.length; i++) {
        groups = [...groups, {tag: keys[i], urls: values[i]}]
    }


    return (
        <Grid container spacing={2}>
            {groups.map((images, index) => <Grid key={index} item xs={12}>
                <Grid container spacing={2}>
                    <div>{images.tag}</div>
                    {
                        images.urls.map((url, index) => (
                            <Grid
                                key={index}
                                item
                                xs={12}
                                sm={6}
                                md={4}
                            >
                                <ImageCard index={Math.floor(Math.random() * Math.floor(1000))}
                                           url={url}/>
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