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
        events: {
          party_continues: { time: "17h00", title: "Cocktail dinatoire & Vin d'honneur" },
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
         location: [
          { bold: true, text: "Lieu de cérémonie religieuse : " },
          'Paroisse St Claude Tassin au 83 Av. du Docteur Laurent, 69160 Tassin-la-Demi-Lune.',
        ],
        button_loc: "Voir le lieu de cérémonie",
      },
         location_reception: [
          { bold: true, text: "Lieu de réception : " },
          'Chateau de la Croix Laval au 1171 Av. de Lacroix-Laval, 69280 Marcy-l Étoile.',
        ],
        button_loc_reception: "Voir le lieu de réception",
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
  couple: {
    her: "Anaïs",
    him: "Louis",
    footer_her: "Anaïs",
    footer_him: "Louis",
  },
  navbar: {
    welcome: "Benvenuti",
    save_the_date: "Segna la Data",
    schedule: "Organizzazione",
    info: "Dettagli",
    rsvp: "RSVP",
    registry: "Regali",
    music: "Playlist della Festa",
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
    button: "Segna la Data",
  },
  saveTheDate_section: {
    title: "Segna",
    title_cursive: "La Data",
    date: "13 Giugno 2026",
    place: "a Charbonnière-les-Bains, Francia",
    story_1: "Ci siamo conosciuti",
    story_2: "Ci siamo fidanzati",
    story_3_future: "Ci sposiamo",
    story_3_past: "Ci siamo sposati",
  },
  schedule_section: {
    title: { main: "Matrimonio", sub: "Organizzazione" },
    description: "Il matrimonio si terrà sabato 13 giugno 2026.",
    day_1: {
      title: "Cerimonia",
      events: {
        ceremony: { time: "16h00", title: "Cerimonia in chiesa" },
        photo: { time: "16h30", title: "Foto" },
      },
    },
    day_2: {
      title: "Ricevimento",
      events: {
        party_continues: { time: "17h00", title: "Cocktail & Vin d'Honneur" },
        dance: { time: "19h00", title: "Lancio del bouquet e dei salami" },
        photo: { time: "17h00 alle 20h00", title: "Foto" },
        dinner2: { time: "20h00", title: "Cena" },
        cake_cutting: { time: "23h00", title: "Dolci" },
        party: { time: "Tutta la notte", title: "Mangia, Bevi, Balla, ripeti!" },
        end: { time: "4h00", title: "Fine" },
      },
    },
  },
  info_section: {
    title: { main: "DETTAGLI", sub: "" },
    details: {
      when_where: "Quando & Dove",
      dates: [
        { bold: true, text: "Data: " },
        "Sabato 13 Giugno 2026.",
      ],
      location: [
        { bold: true, text: "Luogo della cerimonia religiosa: " },
        'Parrocchia St Claude Tassin, 83 Av. du Docteur Laurent, 69160 Tassin-la-Demi-Lune.',
      ],
      button_loc: "Vedi luogo della cerimonia",
      location_reception: [
        { bold: true, text: "Luogo del ricevimento: " },
        'Chateau de la Croix Laval, 1171 Av. de Lacroix-Laval, 69280 Marcy-l\'Étoile.',
      ],
      button_loc_reception: "Vedi luogo del ricevimento",
    },
    accommodations: {
      title: "Hotel",
      description_1: [
        "Per gli ospiti che vengono da lontano, ci sono hotel nelle vicinanze. ",
        { bold: true, text: "Potete approfittarne per visitare l'ovest di Lione o la città stessa." },
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
      title: "Per la Chiesa",
      description_1: [
        "Si prega di lasciare i posti vicino alla chiesa per persone con disabilità. Troverete parcheggi in:",
      ],
      description_2: [
        "Parcheggio della stazione di Tassin - 1 All. des Tilleuls, 69160 Tassin-la-Demi-Lune.",
      ],
      description_3: [
        "Parcheggio del cimitero - 12b Chem. de la Mansion, 69160 Tassin-la-Demi-Lune",
      ],
      description_4: [
        "Farmacia - 2 Rue Professeur Deperet, 69160 Tassin-la-Demi-Lune",
      ],
      transport_details: {
        arrival: {
          title: "La cerimonia inizia alle 16h00",
          desc1: [
            { bold: true, text: "Si prega di arrivare almeno 15 minuti PRIMA" },
            " o farete parte del corteo d'onore!",
          ],
          desc2: [
            { bold: true, text: "La cerimonia durerà circa 30 minuti. " },
            "Faremo alcune foto alla fine prima di andare al luogo del ricevimento.",
          ],
        },
        departure: {
          title: "Il cocktail / Vin d'Honneur inizierà verso le 17h00",
          desc1: [
            { bold: true, text: "Il parcheggio del Chateau de la Croix Laval è abbastanza grande per accogliere tutti gli ospiti in auto." },
            " Il parcheggio non è sorvegliato, quindi non lasciare oggetti di valore in macchina. Un guardaroba sarà disponibile presso il luogo del ricevimento.",
          ],
        },
      },
    },
    contact: {
      title: "Contattaci",
    },
  },
  rsvp_section: {
    top_title: "RSVP",
    title: { main: "Conferma la tua", sub: "Presenza" },
    description_1: [
      { bold: true, text: "Rispondi entro il 1° aprile, per favore! Altrimenti vieni con un panino!" },
      " Cerca il tuo nome nel modulo e conferma la tua partecipazione.",
    ],
    description_2: "Lasciaci un messaggio in caso di allergie o intolleranze alimentari o qualsiasi domanda. Vogliamo che tutti si divertano e stiano a loro agio!",
    label: "Cerca il tuo nome",
    placeholder: "Cerca il tuo nome...",
    no_found: "Nessun ospite trovato con questo nome...",
    multiple_guests_1: {
      hi: "Ciao ",
      you: " Tu, ",
      and: " e ",
      are_invited: ", siete cordialmente invitati a partecipare al nostro giorno speciale. Festeggiare con tutti voi lo renderà indimenticabile!",
    },
    multiple_guests_2: "Seleziona chi parteciperà al matrimonio. Speriamo di vedervi tutti.",
    single_guest_1: {
      hi: "Ciao ",
      are_invited: " sei cordialmente invitato a partecipare al nostro giorno speciale. Festeggiare con tutti voi lo renderà indimenticabile!",
    },
    single_guest_2: "Parteciperai al matrimonio?",
    answers: { yes: "Sì", no: "No", unknown: "Non lo so ancora" },
    note_placeholder: "Vuoi lasciarci un messaggio?",
    rsvp_success: {
      thanks: "Grazie!",
      submitted: " La tua risposta è stata inviata.",
      change_by: [
        "Ricorda che puoi modificare la tua partecipazione fino al",
        { bold: true, text: "1° aprile 2026" },
        ".",
      ],
    },
    error_enter_name: "Inserisci la tua risposta prima di inviare.",
    error_submitting: "Errore durante l'invio. Riprova.",
    button: { submit: "Invia RSVP", loading: "Caricamento..." },
  },
  registry_section: {
    title: { main: "Regali", sub: "" },
    description_1: "La tua presenza al nostro matrimonio è già un grande regalo, soprattutto per chi viene da lontano!",
    description_2: "Tuttavia, se vuoi farci un regalo, apprezzeremo un contributo al nostro fondo luna di miele.",
    description_3: "Questo ci permetterà di volare in Giappone e vivere l’esperienza pienamente.",
    description_4: "Una urna sarà disponibile presso il luogo del ricevimento se vuoi contribuire.",
    button: "",
    thanks: "Grazie!",
    error_from_api: "Si è verificato un problema. Riprova più tardi o contattaci",
    error_incorrect_password: "Password errata",
    error_insert_password: "Inserisci la password",
    account_holder: "Beneficiario: ",
    iban: "IBAN: ",
    bank_name: "Indirizzo banca: ",
    bic: "BIC / SWIFT: ",
    sort_code: "Codice Banca: ",
    account_number: "Numero di conto: ",
    eur: "Euro",
    gbp: "Sterlina",
    pln: "Zloty Polacco",
    toast_copied: "Copiato negli appunti",
    toast_error: "Impossibile copiare",
    dialog_title: { before: "Inserisci la password", after: "Password corretta" },
    placeholder: "Inserisci la password",
    submit_button: { submit: "Invia", loading: "Verifica..." },
    copy_all: "Copia Tutto",
  },
  music_section: {
    title: { main: "LA", sub: "Playlist" },
    description: "Aggiungi le tue canzoni preferite alla nostra playlist della festa! Selezioneremo le nostre preferite!",
    placeholder: "Inserisci il nome della canzone",
    small_note: "* Le canzoni non possono essere riprodotte sul sito, ma puoi comunque aggiungerle alla playlist.",
    toast_success: { title: "Canzone aggiunta alla playlist", description: "Vuoi aggiungerne un'altra?" },
    toast_error: { title: "Impossibile aggiungere la canzone", description: "Spiacente, si è verificato un errore. Riprova più tardi o contattaci." },
  },
  footer: { text_1: "Sito creato con ", text_2: "da ", text_3: "Foto di" },
  not_found: { message: "La pagina che cerchi non esiste.", button: "Torna Indietro" },
},

  // PORTUGUÊS <---------------------------------------------------------------------------------------
pt: {
  couple: {
    her: "Anaïs",
    him: "Louis",
    footer_her: "Anaïs",
    footer_him: "Louis",
  },
  navbar: {
    welcome: "Bem-vindo",
    save_the_date: "Reserve a Data",
    schedule: "Cronograma do Casamento",
    info: "Detalhes",
    rsvp: "RSVP",
    registry: "Lista de Presentes",
    music: "Playlist",
  },
  welcome_section: {
    small_text: "O casamento de...",
    days: "dias",
    day: "dia",
    hours: "horas",
    hour: "hora",
    minutes: "minutos",
    minute: "minuto",
    seconds: "segundos",
    second: "segundo",
    button: "Reserve a Data",
  },
  saveTheDate_section: {
    title: "RESERVE",
    title_cursive: "a Data",
    date: "26 de julho de 2025",
    place: 'no espaço "Przy Patykach" em Kolonia Łobudzice, Zelów',
    story_1: "Nos Conhecemos",
    story_2: "Noivamos",
    story_3_future: "Vamos nos Casar",
    story_3_past: "Nos Casamos",
  },
  schedule_section: {
    title: {
      main: "CRONOGRAMA",
      sub: "do Casamento",
    },
    description:
      "O casamento será no dia 26 de julho de 2025. No dia seguinte, convidamos você para a celebração pós-casamento!",
    day_1: {
      title: "Dia 1",
      events: {
        ceremony: {
          time: "16:00",
          title: "Cerimônia de Casamento",
        },
        dinner: {
          time: "18:00",
          title: "Jantar",
        },
        dance: {
          time: "18:00",
          title: "Primeira Dança",
        },
        photo: {
          time: "20:00 - 23:00",
          title: "Cabine de Fotos",
        },
        pig: {
          time: "00:00",
          title: "Prato Especial",
        },
        cake_cutting: {
          time: "22:30",
          title: "Corte do Bolo",
        },
        games: {
          time: "00:30",
          title: "Jogos Tradicionais",
        },
        party: {
          time: "Até de Manhã",
          title: "Comer, Beber e Dançar!",
        },
      },
    },
    day_2: {
      title: "Dia 2",
      events: {
        after: {
          time: "15:00",
          title: "After Party",
        },
        vespa: {
          time: "15:00 - 20:00",
          title: "Bar Vespa",
        },
        party_continues: {
          time: "O Dia Todo",
          title: "Comer, Beber e Dançar!",
        },
        end: {
          time: "21:00",
          title: "Fim",
        },
      },
    },
  },
  info_section: {
    title: {
      main: "MAIS",
      sub: "Detalhes",
    },
    details: {
      when_where: "Quando e Onde",
      dates: [
        { bold: true, text: "Datas: " },
        "Sábado, 26 de Julho & Domingo, 27 de Julho de 2025",
      ],
      location: [
        { bold: true, text: "Local: " },
        'Espaço "Przy Patykach", Kolonia Łobudzice 18c, 97-425',
      ],
      button_loc: "VER LOCAL",
    },
    accommodations: {
      title: "Hospedagem",
      description_1: [
        "Para nossos convidados internacionais, oferecemos hospedagem no hotel do espaço nos dias: ",
        { bold: true, text: "sexta-feira, 25 de julho, sábado, 26 de julho e domingo, 27 de julho." },
      ],
      breakfast: [
        { bold: true, text: "Café da manhã" },
        " está incluído e será servido das ",
        { bold: true, text: "9:00 às 12:00" },
        " todas as manhãs.",
      ],
      checkout: [
        { bold: true, text: "Check-out do Hotel/Apartamento:" },
        " O check-out é na segunda-feira às 11:00. Por favor, faça o café da manhã antes.",
      ],
    },
    travel_transport: {
      title: "Transporte",
      description_1: [
        "Para nossos convidados internacionais, providenciaremos transporte do aeroporto para o espaço na sexta-feira, 25 de julho, e do espaço para o aeroporto na segunda-feira, 28 de julho.",
      ],
      description_2: [
        { bold: true, text: "Antes de reservar sua viagem, entre em contato conosco informando o horário e o aeroporto que melhor se adequam à sua agenda. Organizaremos um transporte em grupo que atenda a maioria. Faça isso até 26 de maio de 2025." },
      ],
      description_3: [
        "Os aeroportos mais próximos são Aeroporto de Katowice (KTW), Aeroporto de Varsóvia Modlin (WMI) e Aeroporto de Varsóvia Chopin (WAW).",
      ],
      description_4: [
        "Faremos o nosso melhor para acomodar todos. Se você não puder chegar/partir no mesmo dia/horário que os demais, ajudaremos a organizar outro transporte.",
      ],
      transport_details: {
        arrival: {
          title: "Sexta-feira, 25 de julho",
          desc1: [
            { bold: true, text: "Aeroporto de Varsóvia (WAW):" },
            " O ônibus sai por volta das 19:30 - Anaïs estará aguardando na chegada.",
          ],
          desc2: [
            { bold: true, text: "Aeroporto de Katowice:" },
            " O ônibus sai por volta das 17:00 - Louis estará aguardando na chegada.",
          ],
        },
        departure: {
          title: "Segunda-feira, 28 de julho",
          desc1: [
            { bold: true, text: "" },
            " Os ônibus para ambos os aeroportos partem às 12:00",
          ],
        },
      },
    },
    contact: {
      title: "Contate-nos",
      // Email added on the front end
      // numbers added on the front end
    },
  },
  rsvp_section: {
    top_title: "RSVP",
    title: { main: "Confirme sua", sub: "Presença" },
    description_1: [
      { bold: true, text: "Por favor, confirme sua presença até 26 de maio de 2025!" },
      " Basta digitar seu nome no formulário e confirmar sua presença.",
    ],
    description_2: "Deixe-nos uma mensagem se tiver pedidos especiais, restrições alimentares ou qualquer outra coisa que queira discutir. Queremos garantir que todos estejam confortáveis e se divirtam!",
    label: "Procure seu nome na lista de convidados",
    placeholder: "Digite seu nome",
    no_found: "Nenhum convidado encontrado com este nome",
    multiple_guests_1: {
      hi: "Oi ",
      you: "! Você, ",
      and: " e ",
      are_invited: ", estão calorosamente convidados para nosso dia especial. Celebrar com vocês será inesquecível!",
    },
    multiple_guests_2: "Selecione quem participará do casamento. Esperamos que todos possam comparecer.",
    single_guest_1: {
      hi: "Oi ",
      are_invited: " você está calorosamente convidado para nosso dia especial. Celebrar com você será inesquecível!",
    },
    single_guest_2: "Você vai participar do casamento?",
    answers: { yes: "Sim", no: "Não", unknown: "Ainda não sei" },
    note_placeholder: "Deseja deixar uma mensagem?",
    rsvp_success: {
      thanks: "Obrigado!",
      submitted: " Sua confirmação foi enviada.",
      change_by: [
        "Lembre-se que você pode alterar sua presença a qualquer momento até ",
        { bold: true, text: "26 de maio de 2025" },
        ".",
      ],
    },
    error_enter_name: "Por favor, insira sua resposta antes de enviar",
    error_submitting: "Erro ao enviar RSVP. Por favor, tente novamente.",
    button: {
      submit: "Enviar RSVP",
      loading: "Carregando...",
    },
  },
  registry_section: {
    title: { main: "LISTA", sub: "de Presentes" },
    description_1: "Sua presença no nosso casamento é o maior presente que poderíamos desejar!",
    description_2: "No entanto, se desejar nos presentear, apreciaríamos uma contribuição monetária para construir nosso futuro juntos.",
    description_3: "Em vez de flores, bebidas e outros presentes físicos, adoraríamos receber raspadinhas ou bilhetes de loteria como forma divertida de celebrar nosso novo começo.",
    description_4: "Pedimos gentilmente aos nossos convidados internacionais que considerem enviar o presente via transferência bancária. Para acessar nossos dados bancários, clique no botão abaixo e insira a senha do convite. Como sempre, entre em contato diretamente se tiver dúvidas!",
    button: "Acessar Dados Bancários",
    thanks: "OBRIGADO!",
    error_from_api: "Houve um problema. Tente novamente mais tarde ou entre em contato conosco",
    error_incorrect_password: "Senha incorreta",
    error_insert_password: "Insira a senha",
    account_holder: "Beneficiário: ",
    iban: "IBAN: ",
    bank_name: "Banco: ",
    bic: "BIC / SWIFT: ",
    sort_code: "Código Sort: ",
    account_number: "Número da Conta: ",
    eur: "Euro",
    gbp: "Libra",
    pln: "Zloty",
    toast_copied: "Copiado para a área de transferência",
    toast_error: "Não foi possível copiar",
    dialog_title: { before: "Insira a senha", after: "Senha correta" },
    placeholder: "Insira a senha",
    submit_button: { submit: "Enviar", loading: "Verificando..." },
    copy_all: "Copiar Tudo",
  },
  music_section: {
    title: { main: "NOSSA", sub: "Playlist" },
    description: "Adicione suas músicas favoritas à nossa playlist e nos ajude a criar a trilha sonora perfeita para nosso casamento!",
    placeholder: "Digite o nome da música",
    small_note: "* Algumas músicas não podem ser reproduzidas aqui, mas você ainda pode adicioná-las à playlist.",
    toast_success: {
      title: "Música adicionada à playlist",
      description: "Deseja adicionar outra música?",
    },
    toast_error: {
      title: "Não foi possível adicionar a música",
      description: "Desculpe, algo deu errado. Por favor, tente novamente mais tarde.",
    },
  },
  footer: {
    text_1: "Site criado com ",
    text_2: "por ",
    text_3: "Fotos por",
  },
  not_found: {
    message: "A página que você procura não existe.",
    button: "Voltar",}
  },
  pt: {
  couple: {
    her: "Anaïs",
    him: "Louis",
    footer_her: "Anaïs",
    footer_him: "Louis",
  },
  navbar: {
    welcome: "Bem-vindos",
    save_the_date: "Guarde a Data",
    schedule: "Organização",
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
    button: "Guarde a Data",
  },
  saveTheDate_section: {
    title: "Guarde",
    title_cursive: "a Data",
    date: "13 de Junho de 2026",
    place: "em Charbonnière-les-Bains, França",
    story_1: "Nós nos conhecemos",
    story_2: "Ficamos noivos",
    story_3_future: "Vamos nos casar",
    story_3_past: "Casámos",
  },
  schedule_section: {
    title: { main: "Casamento", sub: "Organização" },
    description: "O casamento acontecerá no sábado, 13 de junho de 2026.",
    day_1: {
      title: "Cerimônia",
      events: {
        ceremony: { time: "16h00", title: "Cerimônia na igreja" },
        photo: { time: "16h30", title: "Fotos" },
      },
    },
    day_2: {
      title: "Recepção",
      events: {
        party_continues: { time: "17h00", title: "Coquetel & Vin d'Honneur" },
        dance: { time: "19h00", title: "Jogar o buquê e os salsichões" },
        photo: { time: "17h00 às 20h00", title: "Fotos" },
        dinner2: { time: "20h00", title: "Jantar" },
        cake_cutting: { time: "23h00", title: "Sobremesas" },
        party: { time: "Durante toda a noite", title: "Coma, Beba, Dance, repita!" },
        end: { time: "4h00", title: "Fim" },
      },
    },
  },
  info_section: {
    title: { main: "DETALHES", sub: "" },
    details: {
      when_where: "Quando & Onde",
      dates: [
        { bold: true, text: "Data: " },
        "Sábado, 13 de Junho de 2026.",
      ],
      location: [
        { bold: true, text: "Local da cerimônia religiosa: " },
        "Paróquia St Claude Tassin, 83 Av. du Docteur Laurent, 69160 Tassin-la-Demi-Lune.",
      ],
      button_loc: "Ver o local da cerimônia",
      location_reception: [
        { bold: true, text: "Local da recepção: " },
        "Chateau de la Croix Laval, 1171 Av. de Lacroix-Laval, 69280 Marcy-l'Étoile.",
      ],
      button_loc_reception: "Ver o local da recepção",
    },
    accommodations: {
      title: "Hotéis",
      description_1: [
        "Para convidados que vêm de longe, há hotéis próximos. ",
        { bold: true, text: "Aproveite para conhecer a região oeste de Lyon ou visitar Lyon." },
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
      title: "Para a Igreja",
      description_1: [
        "Por favor, deixe os lugares próximos à igreja para pessoas com deficiência. Você encontrará vagas em:",
      ],
      description_2: [
        "Estacionamento da estação de Tassin - 1 All. des Tilleuls, 69160 Tassin-la-Demi-Lune.",
      ],
      description_3: [
        "Estacionamento do cemitério - 12b Chem. de la Mansion, 69160 Tassin-la-Demi-Lune",
      ],
      description_4: [
        "Farmácia - 2 Rue Professeur Deperet, 69160 Tassin-la-Demi-Lune",
      ],
      transport_details: {
        arrival: {
          title: "A cerimônia começa às 16h00",
          desc1: [
            { bold: true, text: "Por favor, chegue pelo menos 15 minutos ANTES" },
            " ou você fará parte do cortejo de honra!",
          ],
          desc2: [
            { bold: true, text: "A cerimônia durará cerca de 30 minutos. " },
            "Faremos algumas fotos no final antes de ir para o local da recepção.",
          ],
        },
        departure: {
          title: "O coquetel / Vin d'Honneur começará por volta das 17h00",
          desc1: [
            { bold: true, text: "O estacionamento do Chateau de la Croix Laval é grande o suficiente para todos os convidados de carro." },
            " O estacionamento não é vigiado, portanto não deixe objetos de valor no carro. Um guarda-volumes estará disponível no local da recepção.",
          ],
        },
      },
    },
    contact: {
      title: "Contate-nos",
    },
  },
  rsvp_section: {
    top_title: "RSVP",
    title: { main: "Confirme sua", sub: "Presença" },
    description_1: [
      { bold: true, text: "Responda até 1º de abril, por favor! Caso contrário, venha com um sanduíche!" },
      " Procure seu nome no formulário e confirme sua presença.",
    ],
    description_2: "Deixe-nos uma mensagem em caso de restrições alimentares ou qualquer dúvida. Queremos que todos se sintam à vontade e aproveitem o momento!",
    label: "Procure seu nome",
    placeholder: "Procure seu nome...",
    no_found: "Nenhum convidado encontrado com este nome...",
    multiple_guests_1: {
      hi: "Olá ",
      you: " Você, ",
      and: " e ",
      are_invited: ", está cordialmente convidado a se juntar a nós neste dia especial. Celebrar com todos vocês tornará inesquecível!",
    },
    multiple_guests_2: "Escolha quem participará do casamento. Esperamos vê-lo lá.",
    single_guest_1: {
      hi: "Olá ",
      are_invited: " você está cordialmente convidado a se juntar a nós neste dia especial. Celebrar com todos vocês tornará inesquecível!",
    },
    single_guest_2: "Você participará do casamento?",
    answers: { yes: "Sim", no: "Não", unknown: "Ainda não sei" },
    note_placeholder: "Gostaria de nos deixar uma mensagem?",
    rsvp_success: {
      thanks: "Obrigado!",
      submitted: " Sua resposta foi enviada.",
      change_by: [
        "Lembre-se que você pode alterar sua disponibilidade até",
        { bold: true, text: "1º de abril de 2026" },
        ".",
      ],
    },
    error_enter_name: "Digite sua resposta antes de enviar.",
    error_submitting: "Erro ao enviar. Tente novamente.",
    button: { submit: "Enviar RSVP", loading: "Carregando..." },
  },
  registry_section: {
    title: { main: "Presentes", sub: "" },
    description_1: "Sua presença em nosso casamento já é um grande presente, especialmente para aqueles que vêm de longe!",
    description_2: "No entanto, se quiser nos deixar um presente, agradeceremos uma contribuição para nosso fundo de lua de mel.",
    description_3: "Isso nos permitirá viajar para o Japão e aproveitar a experiência plenamente.",
    description_4: "Uma urna estará disponível no local da recepção, caso deseje contribuir.",
    button: "",
    thanks: "Obrigado!",
    error_from_api: "Ocorreu um problema. Tente novamente mais tarde ou contate-nos",
    error_incorrect_password: "Senha incorreta",
    error_insert_password: "Insira a senha",
    account_holder: "Beneficiário: ",
    iban: "IBAN: ",
    bank_name: "Endereço do banco: ",
    bic: "BIC / SWIFT: ",
    sort_code: "Código do banco: ",
    account_number: "Número da conta: ",
    eur: "Euro",
    gbp: "Libra",
    pln: "Zloty Polonês",
    toast_copied: "Copiado para a área de transferência",
    toast_error: "Não foi possível copiar",
    dialog_title: { before: "Digite a senha", after: "Senha correta" },
    placeholder: "Digite a senha",
    submit_button: { submit: "Enviar", loading: "Verificando..." },
    copy_all: "Copiar Tudo",
  },
  music_section: {
    title: { main: "NOSSA", sub: "Playlist" },
    description: "Adicione suas músicas favoritas à nossa playlist da festa! Selecionaremos nossas favoritas!",
    placeholder: "Digite o nome da música",
    small_note: "* As músicas não podem tocar no site, mas você pode adicioná-las à playlist.",
    toast_success: { title: "Música adicionada à playlist", description: "Há outra música que você gostaria de adicionar?" },
    toast_error: { title: "Não foi possível adicionar a música", description: "Desculpe, ocorreu um erro. Tente novamente mais tarde ou contate-nos." },
  },
  footer: { text_1: "Site criado com ", text_2: "por ", text_3: "Fotos de" },
  not_found: { message: "A página que você procura não existe.", button: "Voltar" },
    }
  },

  export default translations;
