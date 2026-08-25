import { useState } from 'react'

export default function File({ imgNone }) {
  const [img, setImg] = useState(imgNone)

  return (
    <>
      {img && <img src={img} width={90} height={90} style={{ borderRadius: 20, objectFit: 'cover' }} />}
      
      <p>
        <label className='custom-label'>
          Select a photo
          <input
            type="file"
            accept="image/*"
            onChange={e => setImg(URL.createObjectURL(e.target.files[0]))}
            style={{
              display: "none"
            }}
          />
        </label>
      </p>
    </>
  )
}