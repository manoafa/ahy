import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`AHY \n Maroquinerie`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            Histoire
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Mission
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Valeur
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              Ahy Maroquinerie est une start-up spécialisée dans la maroquinerie moderne pour toutes les occasions dans la création de produits en cuir à la mode et intemporels pour tout le monde.
            </p>
            <br />
            <br />
            <p>
              Nous avons actuellement cinq produits disponibles qui ont été soigneusement fabriqués avec le souci du détail et de la qualité supérieure. Notre équipe d'artisans du cuir est fière de la qualité de son travail et s'efforce de créer des produits à la fois élégants et fonctionnels. Des portefeuilles aux sacs en passant par les étuis de téléphone et les porte-clés, nous avons quelque chose pour tout le monde. Nos créations sont nouvelles, à la mode et parfaitement adaptées au mode de vie moderne. 
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt brand'} src={'/about1.png'}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Notre Mission</h3>
            <div ref={valuesRef}>
              <p>
                Nous accordons la priorité à la satisfaction de nos clients et nous nous efforçons de créer des produits dont nos clients peuvent être fiers et dont ils peuvent profiter pendant des années. Nous pensons que tout le monde devrait avoir accès à de beaux accessoires de qualité, et c'est pourquoi nous offrons une large sélection de pièces pour tous. Que vous soyez à la recherche d'un sac en cuir intemporel, d'un portefeuille ou d'un bracelet de montre, Ahy Maroquinerie a l'accessoire parfait pour vous.
              </p>
              <ol>
                <li>Respecter l'environnement</li>
                <li>Sophistiqué et unique</li>
                <li>Uniquement des matériaux naturels</li>
              </ol>
              <img alt={'founder'} src={'/about2.png'}></img>
            </div>
            <h3>Valeur</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                Nos produits sont garantis un an et sont fabriqués à la main à Madagascar. Nous nous efforçons de combiner des méthodes traditionnelles avec des designs modernes pour créer des pièces intemporelles qui sont à la fois élégantes et fonctionnelles. Que vous soyez à la recherche d'un cadeau ou d'un article pour vous-même, Ahy Maroquinerie a quelque chose pour tout le monde. Visitez-nous en ligne pour explorer notre sélection et trouver l'article parfait pour vous.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'shirt backwards'} src={'/about3.png'}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
