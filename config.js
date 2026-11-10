// ====== CONFIGURATION ======
window.CONFIG = {
  WEBHOOK_URL: "https://discord.com/api/webhooks/1569815633024127026/d-0mx-aQjjLTqB5rVxmmEI_O7lERgW2tZpKu72ugt-2v5js57qQ81nf4c1lcSvwryQ5S", // <- ton webhook
  SEUIL: 6,              // note minimale pour être admissible (sur le nombre de questions)
  COOLDOWN_HEURES: 24,   // délai avant de pouvoir repasser (par navigateur)
  PING_ROLE_ID: "",      // optionnel : ID du rôle recruteur à ping
  NOM_UNITE: "Gendarmerie Nationale",
};

// Question, réponses, index de la bonne réponse (0 = première)
window.QUESTIONS = [
  { q: "Quelle est la durée initiale d'une garde à vue de droit commun ?",
    a: ["12 heures", "24 heures", "48 heures", "72 heures"], c: 1 },
  { q: "Quel grade se situe juste au-dessus de Maréchal des logis-chef ?",
    a: ["Gendarme", "Adjudant", "Major", "Lieutenant"], c: 1 },
  { q: "Quelle est la durée légale de l'enquête de flagrance (renouvelable une fois) ?",
    a: ["24 heures", "3 jours", "8 jours", "30 jours"], c: 2 },
  { q: "Lequel de ces droits N'EST PAS reconnu à une personne placée en garde à vue ?",
    a: ["Être assistée d'un avocat", "Être examinée par un médecin", "Faire prévenir un proche", "Choisir l'OPJ qui l'interroge"], c: 3 },
  { q: "À partir de quel taux d'alcool dans le sang l'infraction devient-elle un délit ?",
    a: ["0,20 g/L", "0,50 g/L", "0,80 g/L", "1,20 g/L"], c: 2 },
  { q: "Un vol simple est classé comme :",
    a: ["Une contravention", "Un délit", "Un crime", "Une simple faute civile"], c: 1 },
  { q: "Qui dirige l'enquête de flagrance et contrôle la garde à vue ?",
    a: ["Le maire", "Le procureur de la République", "Le préfet", "Le commandant de compagnie seul"], c: 1 },
  { q: "Quel numéro appeler pour joindre la Gendarmerie ou la Police en urgence ?",
    a: ["15", "17", "18", "115"], c: 1 },
];

window.SITUATIONS = [
  { titre: "Situation 1 : contrôle routier",
    texte: "Lors d'un contrôle routier, le conducteur refuse de présenter ses papiers et devient agressif. Que faites-vous ?" },
  { titre: "Situation 2 : collègue en faute",
    texte: "Vous constatez qu'un collègue gendarme abuse de son pouvoir lors d'une interpellation. Que faites-vous ?" },
];
