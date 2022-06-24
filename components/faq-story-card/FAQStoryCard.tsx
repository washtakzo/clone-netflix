import React from "react";
import styles from "./FAQStoryCard.module.css";
import StoryCard from "../UI/story-card/StoryCard";
import FAQElement from "../faq-element/FAQElement";
import ActionButton from "../action-button/ActionButton";

const DUMMY_ELEMENTS = [
  {
    id: Math.random().toString(),
    title: "Netflix qu'est-ce que c'est ?",
    text: `Netflix est un service de streaming qui propose une vaste sélection de séries TV, films, animes, documentaires et autres programmes primés sur des milliers d'appareils connectés à Internet.\n \n Regardez tout ce que vous voulez, quand vous voulez, sans publicité et à un tarif mensuel très attractif. Découvrez de nouveaux films et séries TV chaque semaine, il y en a pour tous les goûts !`,
  },
  {
    id: Math.random().toString(),
    title: "Combien coûte Netflix ?",
    text: "Regardez Netflix sur votre smartphone, tablette, Smart TV, ordinateur ou appareil de streaming, le tout pour un tarif mensuel fixe. Les forfaits vont de 8,99 € à 17,99 € par mois. Pas de contrat ni de frais supplémentaires.",
  },
  {
    id: Math.random().toString(),
    title: "Où puis-je regarder Netflix ?",
    text: `Netflix, c'est où vous voulez, quand vous voulez. Connectez-vous à votre compte pour regarder Netflix en ligne sur netflix.com depuis votre ordinateur ou tout appareil connecté à Internet avec l'application Netflix, comme les Smart TV, smartphones, tablettes, lecteurs de streaming et consoles de jeu.

    Vous pouvez aussi télécharger vos séries préférées avec l'application iOS, Android ou Windows 10. Téléchargez des titres pour les regarder sur votre appareil mobile, même sans connexion Internet. Emportez Netflix partout avec vous.`,
  },
  {
    id: Math.random().toString(),
    title: "Comment puis-je annuler mon forfait ?",
    text: "Netflix offre une grande souplesse. Pas de contrat compliqué. Sans engagement. Deux clics suffisent pour annuler votre compte en ligne. Pas de frais d'annulation : ouvrez ou fermez votre compte à tout moment.",
  },
  {
    id: Math.random().toString(),
    title: "Que puis-je regarder sur Netflix ?",
    text: "Netflix propose un vaste catalogue comprenant notamment des longs métrages, des documentaires, des séries TV, des animes et des programmes originaux Netflix primés. Regardez Netflix à volonté, quand vous le voulez.",
  },
  {
    id: Math.random().toString(),
    title: "Est-ce que Netflix est adapté aux enfants ?",
    text: `Netflix Jeunesse est inclus dans votre abonnement et offre un meilleur contrôle aux parents, ainsi qu'un espace dédié aux enfants, avec des films et des séries destinés à toute la famille.

    Les profils Enfants comportent des fonctionnalités de contrôle parental avec code PIN permettant de modifier la catégorie d'âge des contenus que vos enfants peuvent regarder et de bloquer des titres spécifiques.`,
  },
];

const FAQStoryCard = (props: any) => {
  return (
    <StoryCard className={styles["faq-story-card"]}>
      <h1>{props.h1}</h1>
      <ul>
        {DUMMY_ELEMENTS.map((element: any) => {
          return (
            <FAQElement
              key={element.id}
              id={element.id}
              title={element.title}
              text={element.text}
            />
          );
        })}
      </ul>
      <p id={styles["ready-to-watch"]}>{props.p}</p>
      <input type="email" placeholder="Adresse e-mail" />
      <ActionButton text="Commencer" />
    </StoryCard>
  );
};

export default FAQStoryCard;
