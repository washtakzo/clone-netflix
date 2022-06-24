import React from "react";
import styles from "./FooterCard.module.css";
import StoryCard from "../UI/story-card/StoryCard";
import LangSwitcher from "../lang-switcher/LangSwitcher";

const DUMMY_LIST = [
  "FAQ",
  "Cantre d'aide",
  "Compte",
  "Press",
  "Relations Investisseurs",
  "Recrutement",
  "Utiliser des cartes cadeaux",
  "Acheter des cartes cadeaux",
  "Mode de lecture",
  "Conditions d'utilisation",
  "Confidentialité",
  "Préférences de cookes",
  "Mentions légales",
  "Nous contacter",
  "Test de vitesse",
  "Garantie légale",
  "Informations légales",
  "Seulement sur Netflix",
];

const FooterCard = () => {
  return (
    <StoryCard className={styles["footer-card"]}>
      <h6>
        Des questions ? Appelez le <a href="">(+33) 0805-543-063</a>
      </h6>
      <ul>
        {DUMMY_LIST.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <LangSwitcher className={styles.language} />
      <p>Netflix France</p>
    </StoryCard>
  );
};

export default FooterCard;
