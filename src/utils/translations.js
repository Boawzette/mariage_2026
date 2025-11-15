/**
 * @file translation.js
 * @description Contains translations for the website in English, Italian, Portuguese, and Polish, covering various sections such as navbar, RSVP, registry, and more.
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
      place: "à Charbonnière-les-Bains, France",
      story_1: "On se rencontre",
      story_2: "On se fiance",
      story_3_future: "On se marie",
      story_3_past: "On s'est marié",
    },
    schedule_section: {
      title: {
        main: "Mariage",
        sub: "Organisation" 
      },
      description:
        "Le mariage prendra place le samedi 13 juin 2026.",
      day_1: {
        title: "Cérémonie",
        events: {
          ceremony: {
            time: "16h00",
            title: "Cérémonie à l'église" },
          photo: {
            time: "16h30",
            title: "Photos" },
        },
      },
      day_2: {
        title: "Réception",
        events: {
          party_continues: {
            time: "17h00",
            title: "Cocktail dinatoire & Vin d'honneur" },
          dance: { 
            time: "19h00", 
            title: "Jeter de bouquet et de saucissons" },
          photo: { 
            time: "17h00 à 20h00", 
            title: "Photos" },
          dinner: { 
            time: "20h00", 
            title: "Dinner" },
          cake_cutting: { 
            time: "23h00", 
            title: "Desserts" },
          party: {
             time: "Toute la nuit", 
             title: "Mangez, Buvez, Dansez, on repeat !" },
          end: {
            time: "4h00",
            title: "The End" },
        },
      },
    },
    info_section: {
      title: {
        main: "LES",
        sub: "Détails" 
      },
      details: {
        when_where: "Quand & Où",
        dates: [
          {
            bold: true,
            text: "Date : " ,
          },
          "Samedi 13 Juin 2026.",
        ],
        location: [
          {
            bold: true,
            text: "Lieu de cérémonie religieuse : " 
          },
          'Paroisse St Claude Tassin, 83 Av. du Docteur Laurent, 69160 Tassin-la-Demi-Lune.',
        ],
        location_reception: [
          { bold: true, text: "Lieu de réception : " },
          'Chateau de la Croix Laval, 1171 Av. de Lacroix-Laval, 69280 Marcy-l’Étoile.',
        ],
        button_loc: "Voir le lieu de cérémonie",
        button_loc_reception: "Voir le lieu de réception",
      },
      accommodations: {
        title: "Hôtels",
        description_1: [
          "Pour les invités venant de loin, vous trouverez des hôtels à proximité. ",
          {
            bold: true,
            text: "Vous pourrez en profiter pour visiter l'ouest lyonnais ou Lyon." 
          },
        ],
        breakfast: [
          { bold: true, text: "Hotel le Beaulieu" },
          " 19 Av. Général de Gaulle, 69260 Charbonnières-les-Bains ",
          { bold: true, text: "Pavillon de la Rotonde" },
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
              " ou vous ferez partie du cortège d'honneur ! ",
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
              " Le parking n'est pas surveillé donc ne laissez rien de valeur dans vos voitures, un vestiaire sera mis à disposition sur le lieu de réception.",
            ],
          },
        },
      },
      contact: {
        title: "Contactez-nous",
        // Email and numbers added on the front end
      },
    },
    rsvp_section: {
      top_title: "Réponses",
      title: { main: "Confirmez votre", sub: "Présence" },
      description_1: [
        { bold: true, text: "Répondez avant le 1er avril s'il vous plaît ! Sinon venez avec un sandwich !" },
        " Cherchez votre nom dans le formulaire et répondez à notre invitation.",
      ],
      description_2:
        "Laissez-nous un mot en cas de régime alimentaire ou intolérance particulière ainsi que si vous avez une quelconque question. On souhaiterait que tout le monde passe un bon moment et soit à l'aise !",
      label: "Cherchez votre nom",
      placeholder: "Cherchez votre nom...",
      no_found: "Pas d'invité trouvé avec ce nom...",
      multiple_guests_1: {
        hi: "Hey ",
        you: " Vous, ",
        and: " et ",
        are_invited:
          ", êtes chaleureusement invité à vous joindre à nous pour ce jour spécial. Le célébrer avec vous tous le rendra inoubliable !",
      },
      multiple_guests_2:
        "Choisissez qui se rend au mariage. On espère vous y voir.",
      single_guest_1: {
        hi: "Bonjour ",
        are_invited:
        " êtes chaleureusement invité à vous joindre à nous pour ce jour spécial. Le célébrer avec vous tous le rendra inoubliable ! ",
      },
      single_guest_2: "Participerez-vous au mariage ?",
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
      button: {
        submit: "Envoyer RSVP",
        loading: "Chargement..." 
      },
    },
    registry_section: {
      title: { main: "Cadeaux", sub: "" },
      description_1:
        "Votre présence à notre mariage est déjà un gros cadeau surtout de la part de ceux venant de loin !",
      description_2:
        "Cependant, si vous souhaitez nous laisser un cadeau, nous apprécierons une contribution à notre fond de lune de miel.",
      description_3:
        "Cela nous permettrait de nous envoler pour le Japon et vivre l'expérience pleinement.",
      description_4:
        "Une urne sera installée sur le lieu de réception, si vous souhaitez contribuer.",
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
      dialog_title: {
        before: "Enter the password",
        after: "The password is correct" },
      placeholder: "Enter password",
      submit_button: { submit: "Submit", loading: "Checking..." },
      copy_all: "Copy All",
    },
    music_section: {
      title: { main: "NOTRE", sub: "Playlist" },
      description:
      "Ajoutez vos chansons favorites à notre playlist de soirée ! Nous sélectionnerons nos favorites !",
      placeholder: "Saisissez le nom de votre chanson",
      small_note:
        "* Les chansons ne peuvent pas tourner sur le site, mais vous pouvez toujours les ajouter à la playlist.",
      toast_success: {
        title: "Musique ajoutée à la playlist",
        description: "Y a t-il une autre musique à laquelle vous pensez ?" 
      },
      toast_error: {
        title: "Impossible d'ajouter la chanson",
        description:
        "Nous sommes désolés, une erreur est apparue de notre côté. Essayez plus tard ou contactez-nous." 
      },
    },
    footer: {
      text_1: "Site créé avec ",
      text_2: "par ",
        text_3: "Photos de" 
    },
    not_found: {
        message: "La page que vous cherchez n'existe pas.", button: "Retournez en arrière"
    },
  },
  // ITALIAN <---------------------------------------------------------------------------------------
  it: {
    couple: {
      her: "Anaïs",
      him: "Louis",
      footer_her: "Anaïs",
      footer_him: "Louis",
    },
    navbar: {
    welcome: "Benvenuti",
    save_the_date: "Segnate la data",
    schedule: "Programma",
    info: "Dettagli",
    rsvp: "RSVP",
    registry: "Regali",
    music: "Playlist della festa",
    },
    welcome_section: {
    small_text: "Il matrimonio di...",
    days: "Giorni",
    day: "Giorno",
    hours: "Ore",
    hour: "Ora",
    minutes: "Minuti",
    minute: "Minuto",
    seconds: "Secondi",
    second: "Secondo",
    button: "Segnate la data",
    },
    saveTheDate_section: {
    title: "Segnate",
    title_cursive: "La Data",
    date: "13 Giugno 2026",
    place: "a Charbonnière-les-Bains, Francia",
    story_1: "Ci incontriamo",
    story_2: "Ci fidanzamo",
    story_3_future: "Ci sposiamo",
    story_3_past: "Ci siamo sposati",
    },
    schedule_section: {
    title: { main: "Matrimonio", sub: "Programma" },
    description: "Il matrimonio si terrà sabato 13 giugno 2026.",
      day_1: {
      title: "Cerimonia",
        events: {
        ceremony: { time: "16:00", title: "Cerimonia in chiesa" },
        photo: { time: "16:30", title: "Foto" },
        },
      },
      day_2: {
      title: "Ricevimento",
        events: {
        party_continues: { time: "17:00", title: "Cocktail & Aperitivo" },
        dance: { time: "19:00", title: "Lanciatore del bouquet e dei salumi" },
        photo: { time: "17:00-20:00", title: "Foto" },
        dinner2: { time: "20:00", title: "Cena" },
        cake_cutting: { time: "23:00", title: "Dolci" },
        party: { time: "Tutta la notte", title: "Mangiate, Bevete, Ballate, repeat!" },
        end: { time: "4:00", title: "Fine" },
        },
      },
    },
    info_section: {
    title: { main: "I", sub: "Dettagli" },
      details: {
        when_where: "Quando & Dove",
        dates: [
        { bold: true, text: "Data: " },
        "Sabato 13 Giugno 2026.",
        ],
        location: [
          {
            bold: true,
            text: "Luogo della cerimonia religiosa: " 
          },
        "Paroisse St Claude Tassin, 83 Av. du Docteur Laurent, 69160 Tassin-la-Demi-Lune.",
      
        ],
        
      location_reception: [
        { bold: true, text: "Luogo del ricevimento: " },
        "Chateau de la Croix Laval, 1171 Av. de Lacroix-Laval, 69280 Marcy-l’Étoile.",
      ],
      button_loc: "Vedi il luogo della cerimonia",
      button_loc_reception: "Vedi il luogo del ricevimento",
      },
      accommodations: {
      title: "Hotel",
        description_1: [
        "Per gli ospiti che arrivano da lontano, troverete hotel nelle vicinanze. ",
        { bold: true, text: "Potrete approfittarne per visitare l'ovest di Lione o Lione." },
        ],
        breakfast: [
        { bold: true, text: "Hotel le Beaulieu" },
        " 19 Av. Général de Gaulle, 69260 Charbonnières-les-Bains ",
        { bold: true, text: "Pavillon de la Rotonde" },
        " 3 Av. Georges Bassinet, 69260 Charbonnières-les-Bains ",
        { bold: true, text: "Appart Hotel" },
        " 80 Av. Marcel Mérieux, 69280 Marcy-l'Étoile ",
        ],
        checkout: [
        { bold: true, text: "In caso di problemi" },
        " non esitate a contattarci. ",
        ],
      },
      travel_transport: {
      title: "Per la chiesa",
        description_1: [
        "Grazie di lasciare posti vicini alla chiesa per le persone con disabilità. Troverete parcheggi:",
        ],
        description_2: [
        "al parcheggio della stazione di Tassin - 1 All. des Tilleuls, 69160 Tassin-la-Demi-Lune.",
        ],
        description_3: [
        "al parcheggio del cimitero - 12b Chem. de la Mansion, 69160 Tassin-la-Demi-Lune",
        ],
        description_4: [
        "alla farmacia - 2 Rue Professeur Deperet, 69160 Tassin-la-Demi-Lune",
        ],
        transport_details: {
          arrival: {
          title: "La cerimonia inizia alle 16:00",
            desc1: [
            { bold: true, text: "Arrivate almeno 15 minuti PRIMA" },
            " o farete parte del corteo d'onore! ",
            ],
            desc2: [
            { bold: true, text: "La cerimonia durerà circa 30 minuti. " },
            "Faremo alcune foto alla fine prima di partire per il ricevimento.",
            ],
          },
          departure: {
          title: "Il cocktail/aperitivo inizierà verso le 17:00",
            desc1: [
            { bold: true, text: "Il parcheggio del Chateau de la Croix Laval è abbastanza grande per tutti gli ospiti." },
            " Il parcheggio non è sorvegliato, quindi non lasciate oggetti di valore nelle auto; sarà disponibile un guardaroba sul luogo del ricevimento.",
            ],
          },
        },
      },
      contact: {
        title: "Contattaci",
      // Email e numeri aggiunti nel front-end
      },
    },
    rsvp_section: {
      top_title: "RSVP",
    title: { main: "Confermate", sub: "Presenza" },
      description_1: [
      { bold: true, text: "Rispondete entro il 1° aprile! Altrimenti venite con un panino!" },
      " Cercate il vostro nome nel modulo e rispondete al nostro invito.",
      ],
    description_2: "Lasciateci un messaggio in caso di dieta speciale o intolleranza, oppure se avete domande. Vogliamo che tutti si divertano e siano a loro agio!",
    label: "Cerca il tuo nome",
    placeholder: "Cerca il tuo nome...",
    no_found: "Nessun ospite trovato con questo nome...",
      multiple_guests_1: {
      hi: "Ciao ",
      you: " voi, ",
        and: " e ",
      are_invited: ", siete cordialmente invitati a unirvi a noi per questo giorno speciale. Festeggiarlo con tutti voi lo renderà indimenticabile!",
      },
    multiple_guests_2: "Scegli chi parteciperà al matrimonio. Speriamo di vedervi tutti lì.",
      single_guest_1: {
        hi: "Ciao ",
      are_invited: " sei cordialmente invitato a unirti a noi per questo giorno speciale. Festeggiarlo con te lo renderà indimenticabile!",
      },
      single_guest_2: "Parteciperai al matrimonio?",
    answers: { yes: "Sì", no: "No", unknown: "Non so ancora" },
    note_placeholder: "Vuoi lasciarci un messaggio?",
      rsvp_success: {
        thanks: "Grazie!",
      submitted: " La tua risposta è stata inviata.",
        change_by: [
        "Ricorda che puoi modificare la tua disponibilità fino al",
        { bold: true, text: "1° aprile 2026" },
          ".",
        ],
      },
    error_enter_name: "Inserisci la tua risposta prima di inviare.",
    error_submitting: "Errore nell'invio. Riprova.",
    button: { submit: "Invia RSVP", loading: "Caricamento..." },
    },
    registry_section: {
    title: { main: "Regali", sub: "" },
    description_1: "La tua presenza al nostro matrimonio è già un grande regalo, soprattutto da chi viene da lontano!",
    description_2: "Tuttavia, se desideri farci un regalo, apprezzeremmo un contributo per la nostra luna di miele.",
    description_3: "Ci permetterà di volare in Giappone e vivere l'esperienza appieno.",
    description_4: "Sarà presente un'urna al ricevimento, se desideri contribuire.",
    button: "",
    thanks: "Grazie!",
    error_from_api: "C'è un problema. Riprova più tardi o contattaci",
      error_incorrect_password: "Password errata",
      error_insert_password: "Inserisci la password",
      account_holder: "Beneficiario: ",
      iban: "IBAN: ",
    bank_name: "Banca: ",
      bic: "BIC / SWIFT: ",
    sort_code: "Codice filiale: ",
    account_number: "Numero conto: ",
      eur: "Euro",
      gbp: "Sterlina",
    pln: "Zloty polacco",
      toast_copied: "Copiato negli appunti",
    toast_error: "Impossibile copiare",
    dialog_title: { before: "Inserisci la password", after: "Password corretta" },
      placeholder: "Inserisci la password",
    submit_button: { submit: "Invia", loading: "Controllo..." },
      copy_all: "Copia tutto",
    },
    music_section: {
    title: { main: "LA NOSTRA", sub: "Playlist" },
    description: "Aggiungi le tue canzoni preferite alla nostra playlist della festa! Selezioneremo le nostre preferite!",
    placeholder: "Inserisci il nome della canzone",
    small_note: "* Le canzoni non possono essere riprodotte sul sito, ma puoi comunque aggiungerle alla playlist.",
    toast_success: { title: "Musica aggiunta alla playlist", description: "C'è un'altra canzone a cui pensi?" },
    toast_error: { title: "Impossibile aggiungere la canzone", description: "Ci dispiace, si è verificato un errore. Riprova più tardi o contattaci." },
    },
  footer: { text_1: "Sito creato con ", text_2: "da ", text_3: "Foto di" },
  not_found: { message: "La pagina che stai cercando non esiste.", button: "Torna indietro" },
  },
// PORTUGUESE <---------------------------------------------------------------------------------------
pt: {
  couple: {
    her: "Anaïs",
    him: "Louis",
    footer_her: "Anaïs",
    footer_him: "Louis",
  },
  navbar: {
    welcome: "Bem-vindos",
    save_the_date: "Reserve a Data",
    schedule: "Programação",
    info: "Detalhes",
    rsvp: "RSVP",
    registry: "Presentes",
    music: "Playlist da Festa",
  },
  welcome_section: {
    small_text: "O casamento de...",
    days: "Dias",
    day: "Dia",
    hours: "Horas",
    hour: "Hora",
    minutes: "Minutos",
    minute: "Minuto",
    seconds: "Segundos",
    second: "Segundo",
    button: "Reserve a Data",
  },
  saveTheDate_section: {
    title: "Reserve",
    title_cursive: "A Data",
    date: "13 de Junho de 2026",
    place: "em Charbonnière-les-Bains, França",
    story_1: "Nós nos conhecemos",
    story_2: "Noivamos",
    story_3_future: "Vamos nos casar",
    story_3_past: "Casamo-nos",
  },
  schedule_section: {
    title: { main: "Casamento", sub: "Programação" },
    description: "O casamento ocorrerá no sábado, 13 de junho de 2026.",
    day_1: {
      title: "Cerimônia",
      events: {
        ceremony: { time: "16:00", title: "Cerimônia na igreja" },
        photo: { time: "16:30", title: "Fotos" },
      },
    },
    day_2: {
      title: "Recepção",
      events: {
        party_continues: { time: "17:00", title: "Coquetel & Aperitivo" },
        dance: { time: "19:00", title: "Lançamento do buquê e frios" },
        photo: { time: "17:00-20:00", title: "Fotos" },
        dinner: { time: "20:00", title: "Jantar" },
        cake_cutting: { time: "23:00", title: "Bolo" },
        party: { time: "Durante toda a noite", title: "Coma, Beba, Dance, repita!" },
        end: { time: "4:00", title: "Fim" },
      },
    },
  },
  info_section: {
    title: { main: "I", sub: "Detalhes" },
    details: {
      when_where: "Quando & Onde",
      dates: [
        { bold: true, text: "Data: " },
        "Sábado, 13 de Junho de 2026.",
      ],
      location: [
        { bold: true, text: "Local da cerimônia religiosa: " },
        "Paroisse St Claude Tassin, 83 Av. du Docteur Laurent, 69160 Tassin-la-Demi-Lune.",
      ],
      location_reception: [
        { bold: true, text: "Local da recepção: " },
        "Chateau de la Croix Laval, 1171 Av. de Lacroix-Laval, 69280 Marcy-l’Étoile.",
      ],
      button_loc: "Ver local da cerimônia",
      button_loc_reception: "Ver local da recepção",
    },
    accommodations: {
      title: "Hotéis",
      description_1: [
        "Para os convidados que vêm de longe, há hotéis próximos. ",
        { bold: true, text: "Aproveite para visitar o oeste de Lyon ou a própria Lyon." },
      ],
      breakfast: [
        { bold: true, text: "Hotel le Beaulieu" },
        " 19 Av. Général de Gaulle, 69260 Charbonnières-les-Bains ",
        { bold: true, text: "Pavillon de la Rotonde" },
        " 3 Av. Georges Bassinet, 69260 Charbonnières-les-Bains ",
        { bold: true, text: "Appart Hotel" },
        " 80 Av. Marcel Mérieux, 69280 Marcy-l'Étoile ",
      ],
      checkout: [
        { bold: true, text: "Em caso de problemas" },
        " não hesite em nos contatar. ",
      ],
    },
    travel_transport: {
      title: "Para a igreja",
      description_1: [
        "Por favor, deixe vagas próximas à igreja para pessoas com mobilidade reduzida. Há estacionamento disponível:",
      ],
      description_2: [
        "No estacionamento da estação Tassin - 1 All. des Tilleuls, 69160 Tassin-la-Demi-Lune.",
      ],
      description_3: [
        "No estacionamento do cemitério - 12b Chem. de la Mansion, 69160 Tassin-la-Demi-Lune",
      ],
      description_4: [
        "Na farmácia - 2 Rue Professeur Deperet, 69160 Tassin-la-Demi-Lune",
      ],
      transport_details: {
        arrival: {
          title: "A cerimônia começa às 16:00",
          desc1: [
            { bold: true, text: "Chegue pelo menos 15 minutos ANTES" },
            " ou você fará parte da entrada de honra!",
          ],
          desc2: [
            { bold: true, text: "A cerimônia durará cerca de 30 minutos. " },
            "Faremos algumas fotos no final antes de ir para a recepção.",
          ],
        },
        departure: {
          title: "O coquetel/aperitivo começará por volta das 17:00",
          desc1: [
            { bold: true, text: "O estacionamento do Chateau de la Croix Laval é grande o suficiente para todos os convidados." },
            " O estacionamento não é vigiado, então não deixe objetos de valor no carro; haverá guarda-volumes na recepção.",
          ],
        },
      },
    },
    contact: {
      title: "Contate-nos",
      // Email e números adicionados no front-end
    },
  },
  rsvp_section: {
    top_title: "RSVP",
    title: { main: "Confirme", sub: "Presença" },
    description_1: [
      { bold: true, text: "Responda até 1º de abril! Caso contrário, traga um sanduíche!" },
      " Procure seu nome no formulário e responda ao nosso convite.",
    ],
    description_2: "Deixe-nos uma mensagem sobre dieta especial ou intolerância, ou se tiver dúvidas. Queremos que todos se divirtam e se sintam confortáveis!",
    label: "Procure seu nome",
    placeholder: "Procure seu nome...",
    no_found: "Nenhum convidado encontrado com esse nome...",
    multiple_guests_1: {
      hi: "Olá ",
      you: " vocês, ",
      and: " e ",
      are_invited: ", estão cordialmente convidados a se juntar a nós neste dia especial. Celebrar com vocês tornará tudo inesquecível!",
    },
    multiple_guests_2: "Escolha quem participará do casamento. Esperamos ver todos lá.",
    single_guest_1: {
      hi: "Olá ",
      are_invited: ", você está cordialmente convidado a se juntar a nós neste dia especial. Celebrar com você tornará tudo inesquecível!",
    },
    single_guest_2: "Você participará do casamento?",
    answers: { yes: "Sim", no: "Não", unknown: "Ainda não sei" },
    note_placeholder: "Quer nos deixar uma mensagem?",
    rsvp_success: {
      thanks: "Obrigado!",
      submitted: " Sua resposta foi enviada.",
      change_by: [
        "Lembre-se que você pode alterar sua disponibilidade até",
        { bold: true, text: "1º de abril de 2026" },
        ".",
      ],
    },
    error_enter_name: "Insira sua resposta antes de enviar.",
    error_submitting: "Erro ao enviar. Tente novamente.",
    button: { submit: "Enviar RSVP", loading: "Carregando..." },
  },
  registry_section: {
    title: { main: "Presentes", sub: "" },
    description_1: "Sua presença no nosso casamento já é um grande presente, especialmente para quem vem de longe!",
    description_2: "No entanto, se desejar nos presentear, apreciaríamos uma contribuição para nossa lua de mel.",
    description_3: "Isso nos permitirá viajar ao Japão e aproveitar a experiência ao máximo.",
    description_4: "Haverá uma urna na recepção caso queira contribuir.",
    button: "",
    thanks: "Obrigado!",
    error_from_api: "Há um problema. Tente novamente mais tarde ou nos contate",
    error_incorrect_password: "Senha incorreta",
    error_insert_password: "Insira a senha",
    account_holder: "Beneficiário: ",
    iban: "IBAN: ",
    bank_name: "Banco: ",
    bic: "BIC / SWIFT: ",
    sort_code: "Código da agência: ",
    account_number: "Número da conta: ",
    eur: "Euro",
    gbp: "Libra",
    pln: "Zloty Polonês",
    toast_copied: "Copiado para a área de transferência",
    toast_error: "Não foi possível copiar",
    dialog_title: { before: "Insira a senha", after: "Senha correta" },
    placeholder: "Insira a senha",
    submit_button: { submit: "Enviar", loading: "Verificando..." },
    copy_all: "Copiar tudo",
  },
  music_section: {
    title: { main: "NOSSA", sub: "Playlist" },
    description: "Adicione suas músicas favoritas à nossa playlist da festa! Selecionaremos nossas preferidas!",
    placeholder: "Digite o nome da música",
    small_note: "* As músicas não podem ser reproduzidas no site, mas você ainda pode adicioná-las à playlist.",
    toast_success: { title: "Música adicionada à playlist", description: "Tem outra música em mente?" },
    toast_error: { title: "Não foi possível adicionar a música", description: "Desculpe, ocorreu um erro. Tente novamente mais tarde ou nos contate." },
  },
  footer: { text_1: "Site criado com ", text_2: "por ", text_3: "Fotos de" },
  not_found: { message: "A página que você procura não existe.", button: "Voltar" },
},
};

export default translations;
