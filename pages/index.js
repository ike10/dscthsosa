import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import aboutHeaderImage from '../public/images/HeaderText.png'
import impactHeaderImage from '../public/images/HeaderText-impact.png'
import executivesHeaderImage from '../public/images/HeaderText-executives.png'
import newsContainerHeaderImage from '../public/images/HeaderText-updates.png'

import missionImage from '../public/images/mission.png'
import visionImage from '../public/images/vision.png'

import thosaActivityOne from '../public/images/thsChapterActivities1.jpeg'
import thosaActivityTwo from '../public/images/thsChapterActivities2.jpeg'
import thosaActivityThree from '../public/images/thsChapterActivites3.jpg'
import thosaActivityFour from '../public/images/thsChapterActivity.jpeg'
import thosaPresident from '../public/images/president.jpg'
// import thsosaLogo from '../public/images/THSOSA-logo.png'
import MainLogo from '../public/images/THSOSA-logo.png'
import { Link } from 'react-router-dom'
export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
      </Head>

      <main className={styles.main}>
        <div className={styles.navigationContainer}>
          <div className={styles.navigationLogo}>

            <Image alt='thsosa' src={MainLogo} />
          </div>
          <div className={styles.navigationLinks}>
            <Link href='/'><p>ABOUT US</p></Link>
            <Link href='/'><p>AGM 2022</p></Link>
            <Link href='/'><p>GALLERY</p></Link>
            <Link href='/'><p>CONTACT</p></Link>
            <Link href='/'><p>EVENTS</p></Link>
          </div>
          <div className={styles.navigationButtons}>
            <div className={styles.loginButton}>
              <p>Login</p>
            </div>
            <div className={styles.registerButton}>
              <p>Register</p>
            </div>
          </div>
        </div>
        <div className={styles.welcomeContainer}>
          <h2>MADE OF STEEL</h2>
          <p>Welcome to the official website of the DSC Technical High School Association.</p>
          <div className={styles.agmButton}>
            <p>Register for AGM</p>
          </div>
          <div className={styles.welcomeContainerOverlay}>
            <span />
          </div>
        </div>
        {/* end of welcome container */}
        <div className={styles.aboutContainer}>
          <div className={styles.aboutSection}>

            <Image alt='thsosa' src={aboutHeaderImage} className={styles.aboutHeader} />
            <h4>Who we are</h4>
            <p>DSC Technical High School Old Students’ Association evolved as a matter of necessity and the need for old students to come together for the development and support of ourselves and also our alma mater, as a way of giving back to society.

Every year, we come together as a body to Meet | Network | Impact each other and plan a way to foster growth for ourselves and our alma mater.</p>
            <div className={styles.aboutButton}>
              <p className={styles.aboutButtonText}>Learn More</p>
            </div>
          </div>
          <div className={styles.missionSection}>
            <div className={styles.missionIcon}>
              <Image alt='thsosa' src={missionImage} className={styles.missionIcon} />
            </div>

            <h4>Our Mission</h4>
            <p>DSC Technical High School Old Students’ Association evolved as a matter of necessity and the need for old students to come together for the development and support of ourselves and also our alma mate</p>

          </div>
          <div className={styles.missionSection}>
            <div className={styles.missionIcon}>
              <Image alt='thsosa' src={visionImage} className={styles.missionIcon} />
            </div>

            <h4>Our Values</h4>
            <p>DSC Technical High School Old Students’ Association evolved as a matter of necessity and the need for old students to come together for the development and support of ourselves and also our alma mater, as a way of </p>

          </div>
        </div>
        {/* end of container */}
        {/* beginning of impact container */}
        <div className={styles.impactContainer}>
          <div className={styles.impactHeaderImage} >

            <Image alt='thsosa' src={impactHeaderImage} />
          </div>
          <p className={styles.impactText}>DSC Technical High School Old Students’ Association evolved as a matter of necessity and the need for old students to come together for the development and support of ourselves and also our alma mater, as a way of giving back to society.
            Every year, we come together as a body to Meet | Network | Impact each other and plan a way to foster growth for ourselves and our alma mater.</p>
          <div className={styles.impactGallerySection}>
            <div className={styles.impactGallerySectionOne}>
              <div className={styles.galleryOne}>
                <Image alt='thsosa' src={thosaActivityOne} style={{
                  borderRadius: '10px'
                }} />
              </div>
            </div>
            <div className={styles.impactGallerySectionTwo}>
              <div className={styles.galleryTwo}>
                <Image alt='thsosa' src={thosaActivityTwo} style={{
                  borderRadius: '10px'
                }} />
              </div>
              <div className={styles.impactGallerySectionInner}>
              <div className={styles.galleryThree}>
                  <Image alt='thsosa' src={thosaActivityThree} style={{
                    borderRadius: '10px'
                  }} />
                </div>
                <div className={styles.galleryFour}>
                  <Image alt='thsosa' src={thosaActivityFour} style={{
                    borderRadius: '10px'
                  }} />
                </div>
              </div>

            </div>

          </div>
          <div className={styles.carouselContainer}>
            <span className={styles.carouselSlider}>
              <span className={styles.carouselSliderActive} />
              <span />
              <span />
              <span />
            </span>
          </div>
          <div className={styles.metricsContainer}>
            <div className={styles.metricsCard}>
              <h4>30</h4>
              <p>Projects</p>
            </div>
            <div className={styles.metricsCard}>
              <h4>30</h4>
              <p>Projects</p>
            </div>
            <div className={styles.metricsCard}>
              <h4>30</h4>
              <p>Projects</p>
            </div>
            <div className={styles.metricsCard}>
              <h4>30</h4>
              <p>Projects</p>
            </div>
          </div>
        </div>
        {/* end of impact container */}
        {/* begining of executives container */}
        <div className={styles.executivesContainer}>
          <div className={styles.executivesHeaderImage} >
            <Image alt='thsosa' src={executivesHeaderImage} />

          </div>
          <div className={styles.executivesImageSection}>
            <div className={styles.executivesImageSectionInner}>
              <div className={styles.executivesCard}>
                <Image alt='thsosa' src={thosaPresident} />
              </div>
              <div className={styles.executivesCard}>
                <Image alt='thsosa' src={thosaPresident} />
              </div>
              <div className={styles.executivesCard}>
                <Image alt='thsosa' src={thosaPresident} />
              </div>
              <div className={styles.executivesCard}>
                <Image alt='thsosa' src={thosaPresident} />
              </div>
              <div className={styles.executivesCard}>
                <Image alt='thsosa' src={thosaPresident} />
              </div>
              <div className={styles.executivesCard}>
                <Image alt='thsosa' src={thosaPresident} />

              </div>
            </div>
          </div>
        </div>
        {/* end of executives container */}
        {/* beginning of news/blog container */}
        <div className={styles.newsContainer}>
          <div className={styles.newsContainerHeaderImage} >
            <Image alt='thsosa' src={newsContainerHeaderImage} />

          </div>
          <div className={styles.newsContainerInner}>
            <div className={styles.newsSection}>
              <div className={styles.newsCard}>
                <div className={styles.newsCardImage}>

                  <Image alt='thsosa' src={thosaActivityOne} />
                </div>
                <div className={styles.newsCardInner}>
                  <h5>Jun 8, 2022</h5>
                  <h3>THSOSA HOLDS 2022 AGM</h3>

                  <p>DSC Technical High School Old Students’ Association evolved as a matter of necessity and the need for old students to come together for the development and support of ourselves and also our alma mater, as a way of giving back to society..</p>
                </div>
              </div>
              <div className={styles.newsCard}>
                <div className={styles.newsCardImage}>

                  <Image alt='thsosa' src={thosaActivityOne} />
                </div>
                <div className={styles.newsCardInner}>
                  <h5>Jun 8, 2022</h5>
                  <h3>THSOSA HOLDS 2022 AGM</h3>

                  <p>DSC Technical High School Old Students’ Association evolved as a matter of necessity and the need for old students to come together for the development and support of ourselves and also our alma mater, as a way of giving back to society..</p>
                </div>
              </div>
              <div className={styles.newsCard}>
                <div className={styles.newsCardImage}>

                  <Image alt='thsosa' src={thosaActivityOne} />
                </div>
                <div className={styles.newsCardInner}>
                  <h5>Jun 8, 2022</h5>
                  <h3>THSOSA HOLDS 2022 AGM</h3>

                  <p>DSC Technical High School Old Students’ Association evolved as a matter of necessity and the need for old students to come together for the development and support of ourselves and also our alma mater, as a way of giving back to society..</p>
                </div>
              </div>
            </div>
            <div className={styles.eventSection}>
              <div className={styles.eventCard}>
                <div className={styles.eventCardInnerOne}>
                  <h4>JUL<br /> 24</h4>
                  <p>Venue</p>
                </div>
                <div className={styles.eventCardInnerTwo}>
                  <h5>Social</h5>
                  <h3>ANNUAL GET-TOGETHER AND FUNDRAISER</h3>
                  <p>Lagos</p>
                </div>
              </div>
              <div className={styles.eventCard}>
                <div className={styles.eventCardInnerOne}>
                  <h4>JUL<br /> 24</h4>
                  <p>Venue</p>
                </div>
                <div className={styles.eventCardInnerTwo}>
                  <h5>Social</h5>
                  <h3>ANNUAL GET-TOGETHER AND FUNDRAISER</h3>
                  <p>Lagos</p>
                </div>
              </div>
              <div className={styles.eventCard}>
                <div className={styles.eventCardInnerOne}>
                  <h4>JUL<br /> 24</h4>
                  <p>Venue</p>
                </div>
                <div className={styles.eventCardInnerTwo}>
                  <h5>Social</h5>
                  <h3>ANNUAL GET-TOGETHER AND FUNDRAISER</h3>
                  <p>Lagos</p>
                </div>
              </div>
              <div className={styles.eventCard}>
                <div className={styles.eventCardInnerOne}>
                  <h4>JUL<br /> 24</h4>
                  <p>Venue</p>
                </div>
                <div className={styles.eventCardInnerTwo}>
                  <h5>Social</h5>
                  <h3>ANNUAL GET-TOGETHER AND FUNDRAISER</h3>
                  <p>Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of meet news/blog container */}
      </main>
      {/* beginning of footer section */}
      <div className={styles.footer}>
        <div className={styles.footerInnerOne}>
          <div className={styles.footerLinks}>
            <div>
              <h5>ABOUT US</h5>
              <p>Home</p>
              <p>Impact</p>
              <p>Blog & News</p>
              <p>Cooperative</p>
              <p>Mentorship</p>
            </div>
            <div>
              <h5>COMMUNITY</h5>
              <p>Facebook</p>
              <p>Telegram</p>
              <p>Youtube</p>
            </div>
            <div>
              <h5>CONTACT</h5>
              <p>Phone</p>
              <p>Email</p>
              <p>whatsapp</p>
            </div>
          </div>
          <div className={styles.footerForm}>
            <div className={styles.footerFormInnerOne}>
              <input placeholder='Name' />
              <input placeholder='Email' />
            </div>
            <div className={styles.footerFormInnerTwo}>
              <input placeholder='Message' />
            </div>
            <div className={styles.footerFormButton}>
              <p>Submit</p>
            </div>
          </div>
        </div>
        <div className={styles.footerInnerTwo}>
          <p>2022 ThSOSA all rights reserved</p>
          <p>Privacy policy</p>
          <p>Terms and conditions</p>
        </div>
      </div>
    </div>
  )
}
