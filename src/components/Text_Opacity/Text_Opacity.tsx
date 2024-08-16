'use client';

import Character from './Character';
import styles from './styles.module.scss';

const paragraph = "ABOUT US";






export function Text_Opacity() {

  const words = paragraph.split(" ")
  return (
    <main>



        <Character paragraph={paragraph} className={styles.char} />




    </main>
  )
}

