'use client';

import Character from './Character';
import styles from './styles.module.scss';

const paragraph = "ABOUT US";

const paragraph1 = "Trending Events";






export function Text_Opacity() {

  const words = paragraph.split(" ")
  return (
    <main>



        <Character paragraph={paragraph} className={styles.char} />




    </main>
  )
}

export function Text_Opacity1() {

  const words = paragraph.split(" ")
  return (
    <main>



        <Character paragraph={paragraph1} className={styles.char1} />




    </main>
  )
}

