import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Lottie from 'lottie-react';

import Text from '../components/Text'
import ImageCard from '../components/ImageCard'
import InfoCard from '../components/InfoCard'
import Button from '../components/Button'
import CircleImage from '../components/CircleImage'
import record from '../Database/flower-database.json'
import LoadingAnimation from '../public/loading.json';

export default function Home() {


  // const [info, setInfo]= useState(false)
  const [loading, setLoading] = useState(true);
  const [expand, setExpand] = useState(Array(record.length).fill(false));

  const handleInfoClick = (index) => {
    setExpand((prevState) => {
      const nextState = [...prevState];
      nextState[index] = !nextState[index];
      return nextState;
    });
  };

  useEffect (() => {
    setTimeout(() => { 
      setLoading(false);
    }, 5000);
  })

  if (loading){
    return <div className={styles.Wrapper}>
      
      <Lottie style={{width:500, height:500}} animationData={LoadingAnimation} loop={true}/>
      <Text align='center' padding='40px' size='40px' weight='700' txt='Loading'/>
    </div>

  }
  

  return (
    <main className={styles.GalleryWrapper}>
      <Head>
        <title>Flowerpedia-Gallery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Flower Bouquet.png" />
      </Head>
        <div className={styles.Header}>
        <a href="/"><Button txt='Back'/></a>
        </div>

        <div className={styles.GalleryAbout}>
          <Text align='center' padding='40px' size='40px' weight='700' txt='Flower Gallery'/>
          <Text txt='The gallery displays flowers in three categories based on their level of maintenance required. These categories are as follows:'/>
          <ul>
            <li> <strong>Backyard Beginner (Easy):</strong> This category includes flowers that are relatively easy to care for and require minimal maintenance. They are suitable for beginners or those with limited time to devote to gardening</li>
            <li><strong>Green Thumb Grower (Medium):</strong>This category includes flowers that require a bit more attention and care than those in the easy maintenance category. They may require more frequent watering, fertilizing, and pruning to keep them healthy and blooming</li>
            <li><strong>Flourishing Horticulturist (Hard):</strong> This category includes flowers that are more challenging to grow and require a lot of care and attention to thrive. They may have specific soil and light requirements, and may need regular pest and disease control measures</li>
          </ul>
        </div>

      <div className={styles.Gallery} id="container">

        <div className={styles.Data}>
        <Text position='sticky' align='center' padding='40px' size='40px' weight='700' txt='Backyard Beginner'/>
        {record.map((rec, index) => {
              return rec.Maintenance == "low"  ? (
                <div onClick={() => handleInfoClick(index)} key={index}>
                  <ImageCard Name={rec.Name} Type={rec.PlantType} src={rec.Image} />
                  {expand [index] ? (
                    <InfoCard
                      descp={rec.Desc}
                      soil={rec.SoilNeeds}
                      height={rec.Height}
                      sun={rec.SunNeeds}
                      water={rec.WaterNeeds}
                      care={rec.Maintenance}
                    />
                  ) : null}
                </div>
              ) : null;
            })}
        </div>

        <div className={styles.Data}>
        <Text align='center' padding='40px' size='40px' weight='700' txt='Green Thumb Grower'/>
        {record.map((rec, index) => {
              return rec.Maintenance == "medium"  ? (
                <div onClick={() => handleInfoClick(index)} key={index}>
                  <ImageCard Name={rec.Name} Type={rec.PlantType} src={rec.Image} />
                  {expand [index] ? (
                    <InfoCard
                      descp={rec.Desc}
                      soil={rec.SoilNeeds}
                      height={rec.Height}
                      sun={rec.SunNeeds}
                      water={rec.WaterNeeds}
                      care={rec.Maintenance}
                    />
                  ) : null}
                </div>
              ) : null;
            })}
        </div>

        <div className={styles.Data}>
        <Text align='center' padding='40px' size='40px' weight='700' txt='Flourishing Horticulturist '/>
        {record.map((rec, index) => {
              return rec.Maintenance == "hard" ? (
                <div onClick={() => handleInfoClick(index)} key={index}>
                  <ImageCard Name={rec.Name} Type={rec.PlantType} src={rec.Image} />
                  {expand [index] ? (
                    <InfoCard
                      descp={rec.Desc}
                      soil={rec.SoilNeeds}
                      height={rec.Height}
                      sun={rec.SunNeeds}
                      water={rec.WaterNeeds}
                      care={rec.Maintenance}
                    />
                  ) : null}
                </div>
              ) : null;
            })}
        </div>

      </div>
    </main>
  )
}
