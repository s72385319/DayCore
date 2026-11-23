import { useState } from 'react'
import noPic from '../assets/noPic.jpg'

export function File({ imgNone }) {
  const [img, setImg] = useState(imgNone)

  return (
    <>
      {img && <img src={img} width={90} height={90} style={{ borderRadius: 20, objectFit: 'cover' }} />}
      
      <p>
        <label className='custom-label'>
          <div id='selectBtn'>Select a photo</div>
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


export default function UserImg() {
  const user = {
    imgUrl: noPic
  }
  return <File imgNone={user.imgUrl} />
}