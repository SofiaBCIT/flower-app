import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import { motion } from "framer-motion"


import ImageCard from '../components/ImageCard'
import InfoCard from '../components/InfoCard'
import Button from '../components/Button'
import CircleImage from '../components/CircleImage'
import Text from '../components/Text'



export default function Home() {
  const [info, setInfo] = useState(false);
  const [showExploreButton, setShowExploreButton] = useState(true);

  useEffect(() => {
    if (info) {
      setShowExploreButton(false);
    }
  }, [info]);

  return (
    <main className={styles.Wrapper}>
      <Head>
        <title>Flowerpedia - Home</title>
        <meta name="Flower Mini-Site" content="Generated by create next app" />
        <link rel="icon" href="/Flower Bouquet.png" />
      </Head>

      {/* <div className={styles.HeroImageWrapper}>
        <CircleImage />
      </div> */}
        <div className={styles.AboutWrapper}>

          <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 100}}
          transition={{ duration: 0.8, delay: 0.3 }}>
            <img src='/Flower Bouquet.png' width={100}/>
          </motion.div>

          <motion.div className={styles.About}
           initial={{ opacity: 0}}
           animate={{ opacity: 100}}
           transition={{ duration: 0.8, delay: 0.6 }}>
            <Text align='center' padding="15px" size="32px" weight="700" txt="Welcome to Floral Finds" />
          </motion.div>

          {info && (
            <motion.div className={styles.Info}
            initial={{ opacity: 0}}
            animate={{ opacity: 100}}
            transition={{ duration: 0.8, }}>
              <Text
                padding="15px"
                txt="A comprehensive online resource dedicated to providing information on various types of flowers, including their description and maintenance tips. Whether you are a gardening enthusiast or simply want to learn more about the beauty of flowers, Flowerpedia has everything you need to know to care for these plants and make them thrive. Explore our mini-site to discover the many different types of flowers and how to keep them healthy and vibrant. "
              />
              <a href='/gallery'>
                <Button margin='20px' txt="Go to Flower Gallery" />
              </a>
            </motion.div>
          )}
          {showExploreButton && (
            <motion.div onClick={() => setInfo(!info)}
            initial={{ opacity: 0}}
            animate={{ opacity: 100}}
            transition={{ duration: 0.8, delay: 0.9}}>
              <Button txt="Learn More" />
            </motion.div>
          )}
        </div>
    </main>
  );
}
