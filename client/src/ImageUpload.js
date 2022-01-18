import { useState, useRef } from 'react'

function ImageUpload({}) {

  const [caption, setCaption] = useState('')
  const [picture, setPicture] = useState(null)
  const imageUpload = useRef()

  const handleSubmit = e => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('caption', caption)
    formData.append('picture', picture)

    fetch('/images', {
      method: 'POST',
      body: formData
    })
  }

  return (
    <form onSubmit={handleSubmit}>

      <input type="text"
      onChange={e => setCaption(e.target.value)}
      value={caption}
      />

      <input type="file"
      onChange={e => setPicture(e.target.files[0]) }
      ref={imageUpload}
      />

      <input type="submit"
      value='Submit'
      />

    </form>
  )

}

export default ImageUpload
