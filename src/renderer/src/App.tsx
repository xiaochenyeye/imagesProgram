import { useState } from 'react'

function App(): JSX.Element {
  const [isSharing, setIsSharing] = useState(false)

  const startScreenSharing = async () => {
    try {
      const constraints: { audio: boolean; video: boolean } = {
        audio: false,
        video: true
      }

      const video = document.querySelector('video')!
      const stream = await navigator.mediaDevices.getDisplayMedia(constraints)
      video.srcObject = stream
      video.play()
      setIsSharing(true)
    } catch (error) {
      console.error('Error sharing screen:', error)
    }
  }

  return (
    <>
      <video></video>
      <button onClick={startScreenSharing} disabled={isSharing}>
        {isSharing ? 'Sharing Screen' : 'Start Screen Sharing'}
      </button>
    </>
  )
}

export default App
