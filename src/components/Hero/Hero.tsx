import React from 'react'
import styles from './styles.module.scss'

const Hero = () => {
  return (
    <section className="pt-24 pb-0 ">
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Left big card */}
          <div className={styles.row1}>
            <div
              className={styles.card}
              style={{
                backgroundImage: 'url(/images/2.jpeg)',
                backgroundPosition: 'center left',
                backgroundSize: 'cover',
              }}
            >
             
              
              {/* Card Image overlay */}
              <div className={styles.overlay}>
                <div className="w-full mt-auto">
                  
                  
                  {/* Card title */}
                  <h2 className={styles.heading1}>
                    <a href="post-single-4.html" className={styles.btn_link}>
                      Ten tell-tale signs you need to get a new startup.
                    </a>
                  </h2>
                  <p className={styles.para}>
                    No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
          {/* Right small cards */}
          <div className={styles.row1}>
            <div className={styles.row}>
              {/* Card item START */}
              <div className={styles.smol_card2}>
                <div
                  className={styles.right_card}
                  style={{
                    backgroundImage: 'url(/images/2.jpeg)',
                    backgroundPosition: 'center left',
                    backgroundSize: 'cover',
                  }}
                >
                  {/* Card Image overlay */}
                  <div className={styles.overlay}>
                    <div className="w-full mt-auto">
                      
                      
                      {/* Card title */}
                      <h4 className={styles.heading4}>
                        <a href="post-single-4.html" className={styles.btn_link}>
                          Best Pinterest boards for learning about business
                        </a>
                      </h4>
                      
                    </div>
                  </div>
                </div>
              </div>
              {/* Card item END */}
              {/* Card item START */}
              <div className={styles.row1}>
                <div
                  className={styles.right_card}
                  style={{
                    backgroundImage: 'url(/images/2.jpeg)',
                    backgroundPosition: 'center left',
                    backgroundSize: 'cover',
                  }}
                >
                  {/* Card Image overlay */}
                  <div className={styles.overlay}>
                    <div className="w-full mt-auto">
                      
                      
                      {/* Card title */}
                      <h4 className={styles.heading4}>
                        <a href="post-single-4.html" className={styles.btn_link}>
                          Five intermediate guide to business
                        </a>
                      </h4>
                      
                    </div>
                  </div>
                </div>
              </div>
              {/* Card item END */}
              {/* Card item START */}
              <div className={styles.row1}>
                <div
                  className={styles.right_card}
                  style={{
                    backgroundImage: 'url(/images/2.jpeg)',
                    backgroundPosition: 'center left',
                    backgroundSize: 'cover',
                  }}
                >
                  
                  <div className={styles.overlay}>
                    <div className="w-full mt-auto">
                      
                      <h4 className={styles.heading4}>
                        <a href="post-single-4.html" className={styles.btn_link}>
                          15 reasons to choose startup
                        </a>
                      </h4>
                      
                     
                    </div>
                  </div>
                </div>
              </div>
              {/* Card item END */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
