import { React, useState } from 'react';
import classes from './ImageForm.module.css';

const ImageForm = (props) => {
    const [imageFile, setImageFile] = useState();
    const [operationType, setOperationType] = useState("invert");

    const onFileChange = (e) => {
        setImageFile(e.target.files[0]);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (imageFile == null || operationType == null) {
            return;
        }
        var formData = new FormData();
        formData.append("image", imageFile);
        formData.append("operation", operationType);

        props.OnFormSubmit(imageFile, formData);
    }

    const onOptionChange = (e) => {
        setOperationType(e.target.value);
    };

    return <div className={classes.FormContainer}>
        <form className={classes.Form} onSubmit={onSubmit}>
            <label>
                Wybierz zdjęcie:
            </label>
            <input type="file" onChange={onFileChange} />
            <label className={classes.OptionsLabel}>
                Wybierz, co chcesz zrobić ze zdjęciem:
            </label>
            <div>
                <input type="radio" checked={operationType === "invert"} value="invert" name="opChoice" onChange={onOptionChange} />
                <label for="invert">Odwróć kolory</label>
            </div>
            <div>
                <input type="radio" checked={operationType === "grayscale"} value="grayscale" name="opChoice" onChange={onOptionChange}/>
                <label for="grayscale">Odcienie szarości</label>
            </div>
            <div>
                <input type="radio" checked={operationType === "edge"} value="edge" name="opChoice" onChange={onOptionChange}/>
                <label for="edge">Wykrywanie krawędzi (Sobel)</label>
            </div>
            <input className={classes.Submit} type="submit" value="Wyślij" />
        </form>
    </div>;
};

export default ImageForm;