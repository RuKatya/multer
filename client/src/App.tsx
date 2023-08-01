import { useState, useCallback } from "react"
import axios from "axios"

function App() {
  const [img, setImg] = useState(null);
  const [avatar, setAvatar] = useState(null);

  // const sendFile = async () => {
  //   try {
  //     const data = new FormData()
  //     data.append("avatar", img!)

  //     await axios.post("/api/upload", data, {
  //       headers: {
  //         'content-type': "mulpipart/form-data"
  //       }
  //     }).then(res => setAvatar(res.data.path))
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  const sendFile = useCallback(async () => {
    try {
      const data = new FormData()
      data.append("avatar", img!)

      await axios.post("/api/upload", data, {
        headers: {
          'content-type': "mulpipart/form-data"
        }
      }).then(res => setAvatar(res.data.path))
    } catch (error) {
      console.error(error);
    }
  }, [img])

  return (
    <div className="main">
      <div className="main__center">
        {avatar
          ? <img className="main__image" src={avatar} alt="avatar" />
          : <img className="main__image" src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" alt="avatar" />
        }
      </div>
      <input type="file" name="avatar" onChange={(e: any) => setImg(e.target.files[0])} />
      <button onClick={sendFile}>Change</button>
    </div>
  );
}

export default App;
