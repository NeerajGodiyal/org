import React from 'react'
import styles from './style.module.scss'
import Text_Mask from '@/components/Text/Text_Mask'
import Encrypt from '../Encrypt/Encrypt'

const Video = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <video autoPlay muted loop>
          <source src="/medias/pubg.mp4" type="video/mp4" />
        </video>
        <div className={styles.textMask}>
          <Encrypt />
        </div>
      </div>
    </main>
  )
}

export default Video
