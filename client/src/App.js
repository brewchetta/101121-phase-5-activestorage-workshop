import React, { useState, useEffect } from 'react'
import ImageUpload from "./ImageUpload"

function App() {

  const [imagePath, setImagePath] = useState('')

  useEffect(() => {
    fetch('/images/1')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setImagePath(data.image_url.url)
    })
  }, [])

  return (
    <div className="App">

      <ImageUpload />

      <img src={imagePath} alt='nothing' />

    </div>
  );
}

export default App;
