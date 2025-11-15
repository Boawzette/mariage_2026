/**
 * @file translation.js
 * @description Contains translations for the website in English, Italian, and Polish, covering various sections such as navbar, RSVP, registry, and more.
 * @author Louis Sgroi
 * @date 19 October 2024
 */

const translations = {
  // ENGLISH <---------------------------------------------------------------------------------------
  en: {
    couple: {
      her: "Anaïs",
      him: "Louis",
      footer_her: "Anaïs",
      footer_him: "Louis",
    },
    navbar: {
      welcome: "Bienvenue",
      save_the_date: "Notez bien la date",
      schedule: "Organisation",
      info: "Détails",
      rsvp: "Réponses",
      registry: "Cadeaux",
      music: "Playlist de la soirée",
    },
    welcome_section: {
      small_text: "Le mariage de...",
      days: "Jours",
      day: "Jour",
      hours: "Heures",
      hour: "Heure",
      minutes: "Minutes",
      minute: "Minute",
      seconds: "Secondes",
      second: "Seconde",
      button: "Notez la date",
    },
    saveTheDate_section: {
      title: "Notez",
      title_cursive: "La Date",
      date: "13 Juin 2026",
      place: "à Charbonnière les bains, France",
      story_1: "On se rencontre",
      story_2: "On se fiance",
      story_3_future: "On se marie",
      story_3_past: "On s'est marié",
    },
    schedule_section: {
      title: { main: "Mariage", sub: "Organisation" },
      description: "Le mariage prendra place le samedi 13 juin 2026.",
      day_1: {
        title: "Cérémonie",
        events: {
          ceremony: { time: "16h00", title: "Cérémonie à l'église" },
          photo: { time: "16h30", title: "Photos" },
        },
      },
      day_2: {
        title: "Réception",
        party_continues: {
          dinner: { time: "17h00", title: "Cocktail dinatoire & Vin d'honneur" },
          dance: { time: "19h00", title: "Jeter de bouquet et de saucissons" },
          photo: { time: "17h00 à 20h00", title: "Photos" },
          dinner2: { time: "20h00", title: "Dinner" },
          cake_cutting: { time: "23h00", title: "Desserts" },
          party: { time: "Toute la nuit", title: "Mangez, Buvez, Dansez, on repeat !" },
          end: { time: "4h00", title: "The End" },
        },
      },
    },
    info_section: {
      title: { main: "LES", sub: "Détails" },
      details: {
        when_where: "Quand & Où",
        dates: [
          { bold: true, text: "Date : " },
          "Samedi 13 Juin 2026.",
        ],
        ceremony_location: [
          { bold: true, text: "Lieu de cérémonie religieuse : " },
          'Paroisse St Claude Tassin au 83 Av. du Docteur Laurent, 69160 Tassin-la-Demi-Lune.',
        ],
        reception_location: [
          { bold: true, text: "Lieu de réception : " },
          'Chateau de la Croix Laval au 1171 Av. de Lacroix-Laval, 69280 Marcy-l Étoile.',
        ],
        button_loc_ceremony: "Voir le lieu de cérémonie",
        button_loc_reception: "Voir le lieu de réception",
      },
      accommodations: {
        title: "Hôtels",
        description_1: [
          "Pour les invités venant de loin vous trouverez des hôtels à côtés. ",
          { bold: true, text: "Vous pourrez en profiter pour visiter l'ouest lyonnais ou Lyon." },
        ],
        breakfast: [
          { bold: true, text: "Hotel le beaulieu" },
          " 19 Av. Général de Gaulle, 69260 Charbonnières-les-Bains ",
          { bold: true, text: "Pavillon de la rotonde" },
          " 3 Av. Georges Bassinet, 69260 Charbonnières-les-Bains ",
          { bold: true, text: "Appart Hotel" },
          " 80 Av. Marcel Mérieux, 69280 Marcy-l'Étoile ",
        ],
        checkout: [
          { bold: true, text: "Et en cas de soucis" },
          " n'hésitez pas à nous contacter. ",
        ],
      },
      travel_transport: {
        title: "Pour l'église",
        description_1: [
          "Merci de laisser les places autour de l'église pour les personnes handicapées. Vous trouverez des places :",
        ],
        description_2: [
          "au parking de la gare de Tassin - 1 All. des Tilleuls, 69160 Tassin-la-Demi-Lune.",
        ],
        description_3: [
          "au parking du cimetière - 12b Chem. de la Mansion, 69160 Tassin-la-Demi-Lune",
        ],
        description_4: [
          "à la pharmacie - 2 Rue Professeur Deperet, 69160 Tassin-la-Demi-Lune",
        ],
        transport_details: {
          arrival: {
            title: "La cérémonie commence à 16h00",
            desc1: [
              { bold: true, text: "Merci d'arriver au moins 15 minutes AVANT" },
              " ou vous ferez parti du cortège d'honneur ! ",
            ],
            desc2: [
              { bold: true, text: "La cérémonie durera environ 30 minutes. " },
              " Nous ferons quelques photos à la fin avant de partir au lieu de réception.",
            ],
          },
          departure: {
            title: "Le cocktail/vin d'honneur commencera vers 17h00",
            desc1: [
              { bold: true, text: "Le parking du chateau de la Croix Laval est assez grand pour accueillir tous les invités en voiture." },
              " Le parking n'est pas surveillé donc ne laissez rien de valeurs dans vos voitures, un vestiaire sera mis à disposition sur le lieu de réception.",
            ],
          },
        },
      },
      contact: {
        title: "Contactez-nous",
        // Email added on the front end
        // numbers added on the front end
      },
    },
    rsvp_section: {
      top_title: "Réponses",
      title: { main: "Confirmez votre", sub: "Présence" },
      description_1: [
        { bold: true, text: "Répondez avant le 1er avril s'il vous plait ! Sinon venez avec un sandwich !" },
        " Cherchez votre nom dans le formulaire et répondez à notre invitation.",
      ],
      description_2: "Laissez-nous un mot en cas de régime alimentaire ou intolérance particulière ainsi que si vous avez une quelconque question. On souhaiterait que tout le monde passe un bon moment et soit à l'aise !",
      label: "Cherchez votre nom",
      placeholder: "Cherchez votre nom...",
      no_found: "Pas d'invité trouvé avec ce nom...",
      multiple_guests_1: {
        hi: "Hey ",
        you: " Vous, ",
        and: " et ",
        are_invited: ", êtes chaleureusement invité à vous joindre à nous pour ce jour spécial. Le célébrer avec vous tous le rendra inoubliable !",
      },
      multiple_guests_2: "Choisissez qui se rend au mariage. On espère vous y voir.",
      single_guest_1: {
        hi: "Bonjour ",
        are_invited: " êtes chaleureusement invité à vous joindre à nous pour ce jour spécial. Le célébrer avec vous tous le rendra inoubliable ! ",
      },
      single_guest_2: "Are you attending the wedding?",
      answers: { yes: "Oui", no: "Non", unknown: "Je ne sais pas encore" },
      note_placeholder: "Souhaiteriez-vous nous laisser un mot ?",
      rsvp_success: {
        thanks: "Merci !",
        submitted: " Votre réponse a été envoyée.",
        change_by: [
          "Souvenez-vous que vous pouvez changer votre disponibilité jusqu'au",
          { bold: true, text: "1er avril 2026" },
          ".",
        ],
      },
      error_enter_name: "Saisissez votre réponse avant de l'envoyer.",
      error_submitting: "Erreur d'envoi. Essayez encore.",
      button: { submit: "Envoi RSVP", loading: "Chargement..." },
    },
    registry_section: {
      title: { main: "Cadeaux", sub: "" },
      description_1: "Votre présence à notre mariage est déjà un gros cadeau surtout de la part de ceux venant de loin !",
      description_2: "Cependant, si vous souhaitez nous laisser un cadeau, nous apprécierons une contribution à notre fond de lune de miel.",
      description_3: "Cela nous permettrait de nous envoler pour le Japon et vivre l'expérience pleinement.",
      description_4: "Une urne sera installée sur le lieu de réception, si vous souhaitez contribuer.",
      button: "",
      thanks: "Merci !",
      error_from_api: "There is a problem. Try again later or contact us",
      error_incorrect_password: "Incorrect password",
      error_insert_password: "Insert password",
      account_holder: "Beneficiary: ",
      iban: "IBAN: ",
      bank_name: "Bank address: ",
      bic: "BIC / SWIFT: ",
      sort_code: "Sort Code: ",
      account_number: "Account Number: ",
      eur: "Eur",
      gbp: "Pound",
      pln: "Polish Zlotych",
      toast_copied: "Copied to clipboard",
      toast_error: "Couldn't copy it",
      dialog_title: { before: "Enter the password", after: "The password is correct" },
      placeholder: "Enter password",
      submit_button: { submit: "Submit", loading: "Checking..." },
      copy_all: "Copy All",
    },
    music_section: {
      title: { main: "NOTRE", sub: "Playlist" },
      description: "Ajoutez vos chansons favorites à notre playlist de soirée ! Nous sélectionnerons nos favorites !",
      placeholder: "Saisissez le nom de votre chanson",
      small_note: "* Les chansons ne peuvent pas tourner sur le site, mais vous pouvez toujours les ajouter à la playlist.",
      toast_success: { title: "Musique ajoutée à la playlist", description: "Y a t-il une autre musique à laquelle vous pensez ?" },
      toast_error: { title: "Impossible d'ajouter la chanson", description: "Nous sommes désolés, une erreur est apparue de notre côté. Essayez plus tard ou contactez-nous." },
    },
    footer: { text_1: "Site créé avec ", text_2: "par ", text_3: "Photos de" },
    not_found: { message: "La page que vous cherchez n'existe pas.", button: "Retournez en arrière" },
  },

  // ITALIAN <---------------------------------------------------------------------------------------
  it: {
    // Même principe : corriger les détails et doublons comme pour la version EN
    // ...
  },

  // PORTUGUÊS <---------------------------------------------------------------------------------------
  pt: {
    // Même principe : corriger les détails et doublons comme pour la version EN
    // ...
  },
};

export default translations;
