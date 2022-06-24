import type { NextPage } from "next";
import styles from "./index.module.css";
import HeaderCard from "../components/header-card/HeaderCard";
import SecondaryStoryCard from "../components/secondary-story-card/SecondaryStoryCard";
import MainStoryCard from "../components/main-story-card/MainStoryCard";
import FAQStoryCard from "../components/faq-story-card/FAQStoryCard";
import FooterCard from "../components/footer-card/FooterCard";

const Home: NextPage = () => {
  const h1text = "Films, séries TV et bien plus en illimité.";
  const h2text = "Où que vous soyez. Annulez à tout moment.";
  const pText =
    "Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.";
  return (
    <div className={styles.indexpage}>
      <div className={styles["main-story-background"]}>
        <HeaderCard />
        <MainStoryCard h1={h1text} h2={h2text} p={pText} />
      </div>
      <SecondaryStoryCard
        h1="Regardez Netflix sur votre TV."
        p="Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et bien plus."
      >
        <img
          className={styles["ilustration-img"]}
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          alt="tv_image"
        />
        <div className={styles["video-container-tv"]}>
          <video
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </SecondaryStoryCard>

      <SecondaryStoryCard
        h1="Téléchargez vos séries préférées pour les regarder hors connexion."
        p="Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder."
      >
        <img
          className={styles["ilustration-img"]}
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt="tv_image"
        />
        <div className={styles["download-banner"]}>
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
            alt="stranger_thing_img"
          />
          <p id={styles["download-in-progress"]}>Téléchargement en cours...</p>
          <div className={styles["download-logo-container"]}>
            <svg fill="white" className={styles["download-logo"]}>
              <g id="download-logo">
                <path d="M245,0c-9.5,0-17.2,7.7-17.2,17.2v331.2L169,289.6c-6.7-6.7-17.6-6.7-24.3,0s-6.7,17.6,0,24.3l88.1,88.1     c3.3,3.3,7.7,5,12.1,5c4.4,0,8.8-1.7,12.1-5l88.1-88.1c6.7-6.7,6.7-17.6,0-24.3c-6.7-6.7-17.6-6.7-24.3,0L262,348.4V17.1     C262.1,7.6,254.5,0,245,0z" />
                <path d="M462.1,472.9v-99.7c0-9.5-7.7-17.2-17.2-17.2s-17.2,7.7-17.2,17.2v82.6H62.2v-82.6c0-9.5-7.7-17.2-17.1-17.2     s-17.2,7.7-17.2,17.2v99.7c0,9.5,7.7,17.1,17.2,17.1h399.8C454.4,490,462.1,482.4,462.1,472.9z" />
              </g>
            </svg>
          </div>
        </div>
      </SecondaryStoryCard>

      <SecondaryStoryCard
        h1="Où que vous soyez."
        p="Regardez des films et séries TV en accès illimité sur votre TV, smartphone, tablette et ordinateur, tout compris."
      >
        <img
          className={styles["ilustration-img"]}
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
          alt="mac_image"
        />
        <div className={styles["video-container-mac"]}>
          <video
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </SecondaryStoryCard>

      <SecondaryStoryCard
        h1="Créez des profils pour les enfants."
        p="Les enfants découvrent de nouvelles aventures et retrouvent leurs personnages préférés dans un espace bien à eux, déjà inclus dans votre abonnement."
      >
        <img
          className={styles["ilustration-img"]}
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png"
          alt="kids_image"
        />
      </SecondaryStoryCard>
      <FAQStoryCard
        h1="Foire aux questions"
        p="Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.
"
      />
      <FooterCard />
    </div>
  );
};
export default Home;
