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
        main: "Organisation",
        sub: "du mariage" 
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
            title: "Jeter de bouquet" },
          photo: { 
            time: "17h00 à 20h00", 
            title: "Photos" },
          dinner: { 
            time: "20h00", 
            title: "Dîner" },
          cake_cutting: { 
            time: "23h00", 
            title: "Desserts" },
          party: {
             time: "Toute la nuit", 
             title: "Mangez, Buvez, Dansez, toute la nuit !" },
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
          {bold: true,text: "Lieu de cérémonie religieuse : "},
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
        title: "Hôtels :",
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
            title: "La cérémonie commence à 16h00.",
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
            title: "Le cocktail/vin d'honneur commencera vers 17h00.",
            desc1: [
              { bold: true, text: "Le parking du château de la Croix Laval est assez grand pour accueillir tous les invités en voiture." },
              " Cependant le parking n'est pas surveillé donc ne laissez rien de valeur dans vos voitures. Un vestiaire sera mis à disposition sur le lieu de réception.",
            ],
          },
        },
      },
      contact: {
        title: "Contacts :",
        // Email and numbers added on the front end
      },
    },
    rsvp_section: {
      top_title: "Réponses",
      title: { main: "Confirmez votre", sub: "Présence" },
      description_1: [
        { bold: true, text: "Répondez avant le 1er avril s'il vous plaît ! Sinon venez avec un sandwich et une chaise !" },
        " Cherchez votre nom dans le formulaire en écrivant votre prénom et répondez à notre invitation.",
      ],
      description_2: [
        "Laissez-nous un mot en cas de ",
        { text: "régime alimentaire", bold: true },
        " ou ",
        { text: "intolérance particulière", bold: true },
        " ainsi que si vous avez une quelconque question.",
        "On souhaiterait que tout le monde passe un bon moment et soit à l'aise !"
      ],
      abel: "Tapez votre nom",
      placeholder: "Cherchez votre nom...",
      no_found: "Pas d'invité trouvé avec ce nom, cherchez votre surnom ou contactez nous...",
      multiple_guests_1: {
        hi: "Salut ",
        you: " Vous, ",
        and: " et ",
        are_invited:
          ", êtes chaleureusement invité à vous joindre à nous pour ce jour spécial. Le célébrer avec vous tous le rendra inoubliable !",
      },
      multiple_guests_2:
        "Choisissez qui se rend au mariage. On espère vous y voir.",
      single_guest_1: {
        hi: "Salut ",
        are_invited:
        ", tu es chaleureusement invité à te joindre à nous pour ce jour spécial. Le célébrer avec vous tous le rendra inoubliable ! ",
      },
      single_guest_2: "Seras-tu présent au mariage ?",
      answers: { yes: "Oui", no: "Non", unknown: "Je ne sais pas encore" },
      note_placeholder: "Souhaiteriez-vous nous laisser un mot ?",
      rsvp_success: {
        thanks: "Merci !",
        submitted: " Votre réponse a été envoyée.",
        change_by: [
          "Souvenez-vous que vous pouvez changer votre disponibilité jusqu'au ",
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
    welcome: "Benvenuto",
    save_the_date: "Salva la data",
    schedule: "Programma",
    info: "Dettagli",
    rsvp: "RSVP",
    registry: "Regali",
    music: "Playlist della serata",
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
    button: "Salva la data",
  },
  saveTheDate_section: {
    title: "Salva",
    title_cursive: "La Data",
    date: "13 Giugno 2026",
    place: "a Charbonnière-les-Bains, Francia",
    story_1: "Ci incontriamo",
    story_2: "Ci fidanzamo",
    story_3_future: "Ci sposiamo",
    story_3_past: "Ci siamo sposati",
  },
  schedule_section: {
    title: {
      main: "Programma",
      sub: "del matrimonio"
    },
    description:
      "Il matrimonio avrà luogo sabato 13 giugno 2026.",
    day_1: {
      title: "Cerimonia",
      events: {
        ceremony: {
          time: "16:00",
          title: "Cerimonia in chiesa"
        },
        photo: {
          time: "16:30",
          title: "Foto"
        },
      },
    },
    day_2: {
      title: "Ricevimento",
      events: {
        party_continues: {
          time: "17:00",
          title: "Cocktail e aperitivo"
        },
        dance: {
          time: "19:00",
          title: "Lancio del bouquet"
        },
        photo: {
          time: "17:00 - 20:00",
          title: "Foto"
        },
        dinner: {
          time: "20:00",
          title: "Cena"
        },
        cake_cutting: {
          time: "23:00",
          title: "Dessert"
        },
        party: {
          time: "Tutta la notte",
          title: "Mangiate, bevete, ballate tutta la notte!"
        },
        end: {
          time: "4:00",
          title: "Fine"
        },
      },
    },
  },
  info_section: {
    title: {
      main: "I",
      sub: "Dettagli"
    },
    details: {
      when_where: "Quando & Dove",
      dates: [
        { bold: true, text: "Data: " },
        "Sabato 13 Giugno 2026."
      ],
      location: [
        { bold: true, text: "Luogo della cerimonia religiosa: " },
        "Parrocchia St Claude Tassin, 83 Av. du Docteur Laurent, 69160 Tassin-la-Demi-Lune."
      ],
      location_reception: [
        { bold: true, text: "Luogo del ricevimento: " },
        "Castello de la Croix Laval, 1171 Av. de Lacroix-Laval, 69280 Marcy-l’Étoile."
      ],
      button_loc: "Vedi il luogo della cerimonia",
      button_loc_reception: "Vedi il luogo del ricevimento",
    },
    accommodations: {
      title: "Hotel:",
      description_1: [
        "Per gli invitati che vengono da lontano, troverete hotel nelle vicinanze. ",
        { bold: true, text: "Potrete approfittarne per visitare la zona o la città di Lione." }
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
        { bold: true, text: "E in caso di problemi" },
        " non esitate a contattarci. "
      ],
    },
    travel_transport: {
      title: "Per la chiesa",
      description_1: [
        "Si prega di lasciare i posti intorno alla chiesa per le persone con disabilità. Troverete parcheggi:"
      ],
      description_2: [
        "al parcheggio della stazione di Tassin - 1 All. des Tilleuls, 69160 Tassin-la-Demi-Lune."
      ],
      description_3: [
        "al parcheggio del cimitero - 12b Chem. de la Mansion, 69160 Tassin-la-Demi-Lune"
      ],
      description_4: [
        "alla farmacia - 2 Rue Professeur Deperet, 69160 Tassin-la-Demi-Lune"
      ],
      transport_details: {
        arrival: {
          title: "La cerimonia inizia alle 16:00.",
          desc1: [
            { bold: true, text: "Vi preghiamo di arrivare almeno 15 minuti PRIMA" },
            " altrimenti entrerete nel corteo d’onore!"
          ],
          desc2: [
            { bold: true, text: "La cerimonia durerà circa 30 minuti. " },
            " Faremo alcune foto alla fine prima di partire per il luogo del ricevimento."
          ],
        },
        departure: {
          title: "Il cocktail e l’aperitivo inizieranno verso le 17:00.",
          desc1: [
            { bold: true, text: "Il parcheggio del Castello de la Croix Laval è abbastanza grande per accogliere tutti gli invitati in auto." },
            " Tuttavia il parcheggio non è sorvegliato, quindi non lasciate oggetti di valore nelle auto. Sarà disponibile un guardaroba al luogo del ricevimento."
          ],
        },
      },
    },
    contact: {
      title: "Contatti:",
    },
  },
  rsvp_section: {
    top_title: "RSVP",
    title: { main: "Confermate la vostra", sub: "Presenza" },
    description_1: [
      { bold: true, text: "Rispondete entro il 1° aprile per favore! Altrimenti venite con un panino e una sedia!" },
      " Cercate il vostro nome nel modulo scrivendo il vostro nome e rispondete al nostro invito."
    ],
    description_2: [
      "Lasciateci un messaggio in caso di ",
      { text: "regime alimentare", bold: true },
      " o ",
      { text: "intolleranza particolare", bold: true },
      " e se avete qualunque domanda. ",
      "Vorremmo che tutti passassero un bel momento e si sentissero a proprio agio!"
    ],
    abel: "Scrivi il tuo nome",
    placeholder: "Cerca il tuo nome...",
    no_found: "Nessun invitato trovato con questo nome, prova il soprannome o contattaci...",
    multiple_guests_1: {
      hi: "Ciao ",
      you: " voi, ",
      and: " e ",
      are_invited:
        ", siete calorosamente invitati a unirvi a noi per questo giorno speciale. Celebrarlo con voi lo renderà indimenticabile!"
    },
    multiple_guests_2:
      "Scegli chi parteciperà al matrimonio. Speriamo di vedervi lì.",
    single_guest_1: {
      hi: "Ciao ",
      are_invited:
        ", sei calorosamente invitato a unirti a noi per questo giorno speciale. Celebrarlo con voi lo renderà indimenticabile!"
    },
    single_guest_2: "Parteciperai al matrimonio?",
    answers: { yes: "Sì", no: "No", unknown: "Non lo so ancora" },
    note_placeholder: "Vuoi lasciarci un messaggio?",
    rsvp_success: {
      thanks: "Grazie!",
      submitted: " La tua risposta è stata inviata.",
      change_by: [
        "Ricorda che puoi modificare la tua disponibilità fino al ",
        { bold: true, text: "1 aprile 2026" },
        "."
      ],
    },
    error_enter_name: "Inserisci la tua risposta prima di inviarla.",
    error_submitting: "Errore nell’invio. Riprova.",
    button: {
      submit: "Invia RSVP",
      loading: "Caricamento..."
    },
  },
  registry_section: {
    title: { main: "Regali", sub: "" },
    description_1:
      "La vostra presenza al nostro matrimonio è già un grande regalo, soprattutto da parte di chi viene da lontano!",
    description_2:
      "Tuttavia, se desiderate farci un regalo, apprezzeremmo un contributo al nostro fondo luna di miele.",
    description_3:
      "Ci permetterebbe di volare in Giappone e vivere un’esperienza indimenticabile.",
    description_4:
      "Una urna sarà disponibile al ricevimento, se desiderate contribuire.",
    button: "",
    thanks: "Grazie!",
    error_from_api: "C’è un problema. Riprova più tardi o contattaci.",
    error_incorrect_password: "Password errata",
    error_insert_password: "Inserisci la password",
    account_holder: "Beneficiario: ",
    iban: "IBAN: ",
    bank_name: "Indirizzo banca: ",
    bic: "BIC / SWIFT: ",
    sort_code: "Sort Code: ",
    account_number: "Numero di conto: ",
    eur: "Euro",
    gbp: "Sterlina",
    pln: "Zloty polacco",
    toast_copied: "Copiato negli appunti",
    toast_error: "Impossibile copiare",
    dialog_title: {
      before: "Inserisci la password",
      after: "La password è corretta"
    },
    placeholder: "Inserisci la password",
    submit_button: { submit: "Invia", loading: "Verifica..." },
    copy_all: "Copia tutto",
  },
  music_section: {
    title: { main: "LA NOSTRA", sub: "Playlist" },
    description:
      "Aggiungi le tue canzoni preferite alla playlist della serata! Sceglieremo le nostre preferite!",
    placeholder: "Scrivi il nome della tua canzone",
    small_note:
      "* Le canzoni non possono essere riprodotte sul sito, ma puoi comunque aggiungerle alla playlist.",
    toast_success: {
      title: "Musica aggiunta alla playlist",
      description: "Hai un’altra canzone in mente?"
    },
    toast_error: {
      title: "Impossibile aggiungere la canzone",
      description:
        "Ci dispiace, si è verificato un errore. Riprova più tardi o contattaci."
    },
  },
  footer: {
    text_1: "Sito creato con ",
    text_2: "da ",
    text_3: "Foto di"
  },
  not_found: {
    message: "La pagina che cerchi non esiste.", 
    button: "Torna indietro"
  },
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
    welcome: "Bem-vindo",
    save_the_date: "Reserve a data",
    schedule: "Programa",
    info: "Detalhes",
    rsvp: "Confirmação",
    registry: "Presentes",
    music: "Playlist da festa",
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
    button: "Reserve a data",
  },
  saveTheDate_section: {
    title: "Reserve",
    title_cursive: "a Data",
    date: "13 de Junho de 2026",
    place: "em Charbonnière-les-Bains, França",
    story_1: "Conhecemo-nos",
    story_2: "Ficámos noivos",
    story_3_future: "Vamos casar",
    story_3_past: "Casámos",
  },
  schedule_section: {
    title: {
      main: "Programa",
      sub: "do casamento",
    },
    description: "O casamento terá lugar no sábado, 13 de junho de 2026.",
    day_1: {
      title: "Cerimónia",
      events: {
        ceremony: {
          time: "16h00",
          title: "Cerimónia na igreja",
        },
        photo: {
          time: "16h30",
          title: "Fotografias",
        },
      },
    },
    day_2: {
      title: "Receção",
      events: {
        party_continues: {
          time: "17h00",
          title: "Cocktail & Vin d'honneur",
        },
        dance: {
          time: "19h00",
          title: "Lançamento do bouquet",
        },
        photo: {
          time: "17h00 às 20h00",
          title: "Fotografias",
        },
        dinner: {
          time: "20h00",
          title: "Jantar",
        },
        cake_cutting: {
          time: "23h00",
          title: "Sobremesas",
        },
        party: {
          time: "Toda a noite",
          title: "Comam, Bebam e Dancem toda a noite!",
        },
        end: {
          time: "4h00",
          title: "The End",
        },
      },
    },
  },
  info_section: {
    title: {
      main: "OS",
      sub: "Detalhes",
    },
    details: {
      when_where: "Quando & Onde",
      dates: [
        { bold: true, text: "Data: " },
        "Sábado, 13 de Junho de 2026.",
      ],
      location: [
        { bold: true, text: "Local da cerimónia religiosa: " },
        "Paroisse St Claude Tassin, 83 Av. du Docteur Laurent, 69160 Tassin-la-Demi-Lune.",
      ],
      location_reception: [
        { bold: true, text: "Local da receção: " },
        "Château de la Croix Laval, 1171 Av. de Lacroix-Laval, 69280 Marcy-l’Étoile.",
      ],
      button_loc: "Ver o local da cerimónia",
      button_loc_reception: "Ver o local da receção",
    },
    accommodations: {
      title: "Hotéis:",
      description_1: [
        "Para os convidados que vêm de longe, existem hotéis nas proximidades. ",
        {
          bold: true,
          text: "Podem aproveitar para visitar o oeste de Lyon ou a cidade.",
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
        { bold: true, text: "Em caso de dúvida" },
        " não hesitem em contactar-nos.",
      ],
    },
    travel_transport: {
      title: "Para a igreja",
      description_1: [
        "Pedimos que deixem os lugares à volta da igreja para as pessoas com mobilidade reduzida. Podem estacionar:",
      ],
      description_2: [
        "no parque da estação de Tassin - 1 All. des Tilleuls, 69160 Tassin-la-Demi-Lune.",
      ],
      description_3: [
        "no parque do cemitério - 12b Chem. de la Mansion, 69160 Tassin-la-Demi-Lune",
      ],
      description_4: [
        "na farmácia - 2 Rue Professeur Deperet, 69160 Tassin-la-Demi-Lune",
      ],
      transport_details: {
        arrival: {
          title: "A cerimónia começa às 16h00.",
          desc1: [
            { bold: true, text: "Por favor cheguem pelo menos 15 minutos ANTES" },
            " ou farão parte do cortejo de honra!",
          ],
          desc2: [
            { bold: true, text: "A cerimónia durará cerca de 30 minutos." },
            " Faremos algumas fotografias no final antes de irmos para o local da receção.",
          ],
        },
        departure: {
          title: "O cocktail / vin d'honneur começará por volta das 17h00.",
          desc1: [
            {
              bold: true,
              text:
                "O parque do Château de la Croix Laval é suficientemente grande para todos os convidados.",
            },
            " No entanto, não é vigiado, por isso não deixem objetos de valor nos carros. Haverá um vestiário no local da receção.",
          ],
        },
      },
    },
    contact: {
      title: "Contactos:",
    },
  },
  rsvp_section: {
    top_title: "Confirmação",
    title: { main: "Confirme a sua", sub: "Presença" },
    description_1: [
      {
        bold: true,
        text:
          "Respondam antes de 1 de abril, por favor! Caso contrário, tragam uma sandes e uma cadeira!",
      },
      " Procurem o vosso nome no formulário escrevendo o vosso primeiro nome e respondam ao convite.",
    ],
    description_2: [
      "Deixem-nos uma nota caso tenham ",
      { text: "restrições alimentares", bold: true },
      " ou ",
      { text: "intolerâncias específicas", bold: true },
      ". Se tiverem alguma dúvida, digam-nos!",
      " Queremos que todos se sintam à vontade e passem um ótimo momento!",
    ],
    abel: "Escreva o seu nome",
    placeholder: "Procure o seu nome...",
    no_found:
      "Nenhum convidado encontrado com esse nome. Tentem o vosso apelido ou contactem-nos...",
    multiple_guests_1: {
      hi: "Olá ",
      you: " Vocês, ",
      and: " e ",
      are_invited:
        ", estão calorosamente convidados a juntar-se a nós neste dia especial. Celebrá-lo convosco torná-lo-á inesquecível!",
    },
    multiple_guests_2:
      "Escolham quem irá ao casamento. Esperamos ver-vos lá!",
    single_guest_1: {
      hi: "Olá ",
      are_invited:
        ", estás calorosamente convidado(a) a juntar-te a nós neste dia especial. Celebrá-lo contigo torná-lo-á inesquecível!",
    },
    single_guest_2: "Vais estar presente no casamento?",
    answers: { yes: "Sim", no: "Não", unknown: "Ainda não sei" },
    note_placeholder: "Gostarias de deixar-nos uma nota?",
    rsvp_success: {
      thanks: "Obrigado!",
      submitted: " A tua resposta foi enviada.",
      change_by: [
        "Lembra-te que podes alterar a tua disponibilidade até ",
        { bold: true, text: "1 de abril de 2026" },
        ".",
      ],
    },
    error_enter_name: "Escreve a tua resposta antes de enviar.",
    error_submitting: "Erro ao enviar. Tenta novamente.",
    button: {
      submit: "Enviar RSVP",
      loading: "A carregar...",
    },
  },
  registry_section: {
    title: { main: "Presentes", sub: "" },
    description_1:
      "A vossa presença no nosso casamento já é um grande presente, especialmente para quem vem de longe!",
    description_2:
      "Mas, se desejarem oferecer-nos um presente, agradecemos uma contribuição para a nossa lua de mel.",
    description_3:
      "Isso permitir-nos-á viajar para o Japão e viver essa experiência em pleno.",
    description_4:
      "Haverá uma urna no local da receção, caso queiram contribuir.",
    button: "",
    thanks: "Obrigado!",
    error_from_api: "Ocorreu um problema. Tentem novamente mais tarde ou contactem-nos.",
    error_incorrect_password: "Palavra-passe incorreta",
    error_insert_password: "Insira a palavra-passe",
    account_holder: "Beneficiário: ",
    iban: "IBAN: ",
    bank_name: "Endereço do banco: ",
    bic: "BIC / SWIFT: ",
    sort_code: "Sort Code: ",
    account_number: "Número de conta: ",
    eur: "Euro",
    gbp: "Libra",
    pln: "Zloty polaco",
    toast_copied: "Copiado",
    toast_error: "Não foi possível copiar",
    dialog_title: {
      before: "Insira a palavra-passe",
      after: "A palavra-passe está correta",
    },
    placeholder: "Insira a palavra-passe",
    submit_button: { submit: "Enviar", loading: "A verificar..." },
    copy_all: "Copiar tudo",
  },
  music_section: {
    title: { main: "A NOSSA", sub: "Playlist" },
    description:
      "Adicionem as vossas músicas favoritas à playlist da festa! Vamos escolher as nossas favoritas!",
    placeholder: "Escrevam o nome da música",
    small_note:
      "* As músicas não podem ser reproduzidas no site, mas podem adicioná-las à playlist.",
    toast_success: {
      title: "Música adicionada",
      description: "Têm mais alguma música em mente?",
    },
    toast_error: {
      title: "Não foi possível adicionar a música",
      description:
        "Lamentamos, ocorreu um erro do nosso lado. Tentem novamente mais tarde ou contactem-nos.",
    },
  },
  footer: {
    text_1: "Site criado com ",
    text_2: "por ",
    text_3: "Fotografias de ",
  },
  not_found: {
    message: "A página que procura não existe.",
    button: "Voltar atrás",
  },
},
};

export default translations;
