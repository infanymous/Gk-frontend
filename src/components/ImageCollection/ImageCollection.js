import React from 'react';
import classes from './ImageCollection.module.css';

const ImageCollection = (props) => {
    
    const loadedPhoto = props.loading == true ?
        <div className={classes.loadingScreen}>loading...</div> : <img src={"data:image/png;base64," + props.processedImage} />
    
    return <div className={classes.ImagesContainer}>
        <div className={classes.Image}>
            <img src={props.originalImage} />
        </div>
        <div className={classes.Image}>
            {loadedPhoto}
        </div>
    </div>;
}


export default ImageCollection;