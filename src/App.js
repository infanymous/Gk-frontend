import logo from './logo.svg';
import axios from 'axios';
import React, { useState } from 'react';
import './App.css';
// import ImageForm from './components/ImageForm/ImageForm';
import TopBar from './components/TopBar/TopBar';
import ImageForm from './components/ImageForm/ImageForm';
import ImageCollection from './components/ImageCollection/ImageCollection';

const App = () => {
  const [image, SetImage] = useState();
  const [processedImage, SetProcessedImage] = useState();


  const OnFormSubmit = (img, formData) => {
    SetImage(URL.createObjectURL(img));
    postFormAsync(formData);
  }

  const postFormAsync = formData => {
    axios.post(`https://localhost:44317/image/Invert`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => {
        SetProcessedImage(res.data);
      })
  };

  const photosCollection =
    image != null && processedImage != null ?
      <ImageCollection originalImage={image} processedImage={processedImage} />
      : null;

  return (
    <div className="App">
      <TopBar />
      <ImageForm OnFormSubmit={OnFormSubmit} />
      {photosCollection}
    </div>
  );
}

export default App;
