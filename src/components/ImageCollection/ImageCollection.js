import React from 'react';
import classes from './ImageCollection.module.css';

const ImageCollection = (props) =>
{
    console.log(props.originalImage);
    console.log(props.processedImage);

return <div className={classes.ImagesContainer}>
<div className={classes.Image}>
    <img src={props.originalImage} />
</div>
<div className={classes.Image}>
<img src={"data:image/png;base64,"+props.processedImage} />
</div>
</div>;
}
    

export default ImageCollection;