/**
 * @file translation.js
 * @description Contains translations for the website in English, Italian, and Portuguese, covering various sections such as navbar, RSVP, registry, and more.
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
        dates: [{ bold: true, text: "Date : " }, "Samedi 13 Juin 2026."],
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
        description_1: ["Merci de laisser les places autour de l'église pour les personnes handicapées. Vous trouverez des places :"],
        description_2: ["au parking de la gare de Tassin - 1 All. des Tilleuls, 69160 Tassin-la-Demi-Lune."],
        description_3: ["au parking du cimetière - 12b Chem. de la Mansion, 69160 Tassin-la-Demi-Lune"],
        description_4: ["à la pharmacie - 2 Rue Professeur Deperet, 69160 Tassin-la-Demi-Lune"],
        transport_details: {
          arrival: {
            title: "La cérémonie commence à 16h00",
            desc1: [{ bold: true, text: "Merci d'arriver au moins 15 minutes AVANT" }, " ou vous ferez parti du cortège d'honneur ! "],
            desc2: [
              { bold: true, text: "La cérémonie durera environ 30 minutes. " },
              " Nous ferons quelques photos à la fin avant de partir au lieu de réception.",
            ],
          },
          departure: {
            title: "Le cocktail/vin d'honneur commencera vers 17h00",
            desc1: [
              {
                bold: true,
                text: "Le parking du chateau de la Croix Laval est assez grand pour accueillir tous les invités en voiture.",
              },
              " Le parking n'est pas surveillé donc ne laissez rien de valeur dans vos voitures, un vestiaire sera mis à disposition sur le lieu de réception.",
            ],
          },
        },
      },
      contact: { title: "Contactez-nous" },
    },
    rsvp_section: {
      top_title: "Réponses",
      title: { main: "Confirmez votre", sub: "Présence" },
      description_1: [
        { bold: true, text: "Répondez avant le 1er avril s'il vous plait ! Sinon venez avec un sandwich !" },
        " Cherchez votre nom dans le formulaire et répondez à notre invitation.",
      ],
      description_2:
        "Laissez-nous un mot en cas de régime alimentaire ou intolérance particulière ainsi que si vous avez une quelconque question. On souhaiterait que tout le monde passe un bon moment et soit à l'aise !",
      label: "Cherchez votre nom",
      placeholder: "Cherchez votre nom...",
      no_found: "Pas d'invité trouvé avec ce nom...",
      multiple_guests_1: { hi: "Hey ", you: " Vous, ", and: " et ", are_invited: ", êtes chaleureusement invité à vous joindre à nous pour ce jour spécial. Le célébrer avec vous tous le rendra inoubliable !" },
      multiple_guests_2: "Choisissez qui se rend au mariage. On espère vous y voir.",
      single_guest_1: { hi: "Bonjour ", are_invited: " êtes chaleureusement invité à vous joindre à nous pour ce jour spécial. Le célébrer avec vous tous le rendra inoubliable ! " },
      single_guest_2: "Are you attending the wedding?",
      answers: { yes: "Oui", no: "Non", unknown: "Je ne sais pas encore" },
      note_placeholder: "Souhaiteriez-vous nous laisser un mot ?",
      rsvp_success: { thanks: "Merci !", submitted: " Votre réponse a été envoyée.", change_by: ["Souvenez-vous que vous pouvez changer votre disponibilité jusqu'au", { bold: true, text: "1er avril 2026" }, "."] },
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
    couple: { her: "Anaïs", him: "Louis", footer_her: "Anaïs", footer_him: "Louis" },
    navbar: { welcome: "Vetrina", save_the_date: "Segna la Data", schedule: "Timeline Matrimonio", info: "Dettagli", rsvp: "Conferma la Presenza", registry: "Lista Nozze", music: "Playlist" },
    welcome_section: { small_text: "Il matrimonio di...", days: "Giorni", day: "Giorno", hours: "Ore", hour: "Ora", minutes: "Minuti", minute: "Minuto", seconds: "Secondi", second: "secondo", button: "Segna la Data" },
    saveTheDate_section: { title: "SEGNA", title_cursive: "La Data", date: "13 Giugno 2026", place: "a Charbonnière les bains, Francia", story_1: "Ci Siamo Conosciuti", story_2: "Ci Siamo Fidanzati", story_3_future: "Ci Sposiamo", story_3_past: "Ci Siamo Sposati" },
    schedule_section: { title: { main: "MATRIMONIO", sub: "Timeline" }, description: "Il matrimonio avrà luogo il 13 giugno 2026.", day_1: { title: "Cerimonia", events: { ceremony: { time: "16:00", title: "Cerimonia in chiesa" }, photo: { time: "16:30", title: "Foto" } } }, day_2: { title: "Ricevimento", party_continues: { dinner: { time: "17:00", title: "Cocktail & Vin d'honneur" }, dance: { time: "19:00", title: "Lancio del bouquet e dei salumi" }, photo: { time: "17:00 - 20:00", title: "Foto" }, dinner2: { time: "20:00", title: "Cena" }, cake_cutting: { time: "23:00", title: "Dessert" }, party: { time: "Tutta la notte", title: "Mangia, Bevi, Balla, ripeti!" }, end: { time: "4:00", title: "The End" } } } },
    info_section: { title: { main: "DETTAGLI", sub: "" }, details: { when_where: "Quando & Dove", dates: [{ bold: true, text: "Data: " }, "13 Giugno 2026"], ceremony_location: [{ bold: true, text: "Luogo della cerimonia: " }, "Paroisse St Claude Tassin au 83 Av. du Docteur Laurent, 69160 Tassin-la-Demi-Lune"], reception_location: [{ bold: true, text: "Luogo del ricevimento: " }, "Chateau de la Croix Laval au 1171 Av. de Lacroix-Laval, 69280 Marcy-l Étoile"], button_loc_ceremony: "Vedi luogo cerimonia", button_loc_reception: "Vedi luogo ricevimento" } },
    accommodations: { title: "Hotel", description_1: ["Per gli ospiti provenienti da lontano ci sono hotel vicini. ", { bold: true, text: "Potete approfittarne per visitare l'ovest di Lione o Lyon." }], breakfast: [{ bold: true, text: "Hotel le beaulieu" }, " 19 Av. Général de Gaulle, 69260 Charbonnières-les-Bains ", { bold: true, text: "Pavillon de la rotonde" }, " 3 Av. Georges Bassinet, 69260 Charbonnières-les-Bains ", { bold: true, text: "Appart Hotel" }, " 80 Av. Marcel Mérieux, 69280 Marcy-l'Étoile "], checkout: [{ bold: true, text: "In caso di problemi" }, " non esitate a contattarci. "] },
    travel_transport: { title: "Per la Chiesa", description_1: ["Grazie di lasciare i posti vicino alla chiesa per le persone con disabilità."], transport_details: { arrival: { title: "La cerimonia inizia alle 16:00", desc1: [{ bold: true, text: "Arrivate almeno 15 minuti PRIMA" }, " per far parte del corteo d'onore!"] }, departure: { title: "Il cocktail/vin d'honneur inizierà verso le 17:00", desc1: [{ bold: true, text: "Il parcheggio del chateau è abbastanza grande per tutti gli invitati." }, " Non sorvegliato, non lasciare oggetti di valore in auto."] } } },
    contact: { title: "Contattaci" },
    rsvp_section: { top_title: "RSVP", title: { main: "Conferma la tua", sub: "Presenza" }, description_1: [{ bold: true, text: "Rispondere entro il 1 aprile, altrimenti porta un panino!" }], label: "Cerca il tuo nome", placeholder: "Cerca...", answers: { yes: "Sì", no: "No", unknown: "Non so" }, button: { submit: "Invia", loading: "Caricamento..." } },
    registry_section: { title: { main: "Lista Nozze", sub: "" }, description_1: "La tua presenza è già un grande regalo!", description_2: "Se vuoi, puoi contribuire al nostro fondo luna di miele.", button: "Accedi ai dettagli bancari" },
    music_section: { title: { main: "LA", sub: "Playlist" }, description: "Aggiungi le tue canzoni preferite alla nostra playlist!", placeholder: "Nome della canzone" },
    footer: { text_1: "Sito creato con ", text_2: "da ", text_3: "Foto di" },
    not_found: { message: "La pagina cercata non esiste.", button: "Torna indietro" },
  },

  // PORTUGUÊS <---------------------------------------------------------------------------------------
  pt: {
    couple: { her: "Anaïs", him: "Louis", footer_her: "Anaïs", footer_him: "Louis" },
    navbar: { welcome: "Bem-vindo", save_the_date: "Reserve a Data", schedule: "Cronograma do Casamento", info: "Detalhes", rsvp: "RSVP", registry: "Lista de Presentes", music: "Playlist" },
    welcome_section: { small_text: "O casamento de...", days: "dias", day: "dia", hours: "horas", hour: "hora", minutes: "minutos", minute: "minuto", seconds: "segundos", second: "segundo", button: "Reserve a Data" },
    saveTheDate_section: { title: "RESERVE", title_cursive: "a Data", date: "13 de Junho de 2026", place: "em Charbonnière les bains, França", story_1: "Nos conhecemos", story_2: "Noivamos", story_3_future: "Vamos nos casar", story_3_past: "Nos casamos" },
    schedule_section: { title: { main: "CRONOGRAMA", sub: "Casamento" }, description: "O casamento será no dia 13 de junho de 2026.", day_1: { title: "Cerimônia", events: { ceremony: { time: "16:00", title: "Cerimônia na igreja" }, photo: { time: "16:30", title: "Fotos" } } }, day_2: { title: "Recepção", party_continues: { dinner: { time: "17:00", title: "Coquetel & Vin d'honneur" }, dance: { time: "19:00", title: "Lançamento do buquê" }, photo: { time: "17:00 - 20:00", title: "Fotos" }, dinner2: { time: "20:00", title: "Jantar" }, cake_cutting: { time: "23:00", title: "Sobremesas" }, party: { time: "Toda noite", title: "Coma, Beba, Dance!" }, end: { time: "4:00", title: "Fim" } } } },
    info_section: { title: { main: "DETALHES", sub: "" }, details: { when_where: "Quando & Onde", dates: [{ bold: true, text: "Data: " }, "13 de Junho de 2026"], ceremony_location: [{ bold: true, text: "Local da cerimônia: " }, "Paroisse St Claude Tassin au 83 Av. du Docteur Laurent, 69160 Tassin-la-Demi-Lune"], reception_location: [{ bold: true, text: "Local da recepção: " }, "Chateau de la Croix Laval au 1171 Av. de Lacroix-Laval, 69280 Marcy-l Étoile"], button_loc_ceremony: "Ver local da cerimônia", button_loc_reception: "Ver local da recepção" } },
    accommodations: { title: "Hotéis", description_1: ["Para os convidados que vêm de longe, há hotéis próximos. ", { bold: true, text: "Você pode aproveitar para visitar Lyon." }] },
    travel_transport: { title: "Para a Igreja", description_1: ["Por favor, deixe os lugares próximos à igreja para pessoas com deficiência."] },
    contact: { title: "Contate-nos" },
    rsvp_section: { top_title: "RSVP", title: { main: "Confirme sua", sub: "Presença" }, description_1: [{ bold: true, text: "Responda até 1º de abril, por favor!" }], label: "Procure seu nome", placeholder: "Procure...", answers: { yes: "Sim", no: "Não", unknown: "Não sei" }, button: { submit: "Enviar", loading: "Carregando..." } },
    registry_section: { title: { main: "Lista de Presentes", sub: "" }, description_1: "Sua presença é o maior presente!", description_2: "Se quiser, contribua com nosso fundo lua de mel." },
    music_section: { title: { main: "NOSSA", sub: "Playlist" }, description: "Adicione suas músicas favoritas à nossa playlist!", placeholder: "Nome da música" },
    footer: { text_1: "Site criado com ", text_2: "por ", text_3: "Fotos de" },
    not_found: { message: "A página que você procura não existe.", button: "Voltar" },
  },
};

export default translations;
