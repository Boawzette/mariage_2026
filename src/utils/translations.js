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
        sub: "Détails",
      },
      details: {
        when_where: "Quand & Où",
        dates: [
          {
            bold: true,
            text: "Date : ",
          },
          "Samedi 13 Juin 2026.",
        ],
        location: [
          {
            bold: true,
            text: "Lieu de cérémonie religieuse : ",
          },
          'Paroisse St Claude Tassin, 83 Av. du Docteur Laurent, 69160 Tassin-la-Demi-Lune.',
        ],
        button_loc: "Voir le lieu de réception",
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
        // Email added on the front end
        // numbers added on the front end
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
        "Laissez-nous un mot en cas de régime alimentaire ou intolérance particulière ainsi que si vous avez une quelconque question.On souhaiterait que tout le monde passe un bon moment et soit à l'aise !",
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
          "  êtes chaleureusement invité à vous joindre à nous pour ce jour spécial. Le célébrer avec vous tous le rendra inoubliable ! ",
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
        loading: "Chargement...",
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
        after: "The password is correct",
      },
      placeholder: "Enter password",
      submit_button: { submit: "Submit", loading: "Checking..." },
      copy_all: "Copy All",
    },
    music_section: {
      title: { main: "NOTRE", sub: "Playlist" },
      description:
        "Ajoutez vos chansons favorites à notre playlist de soirée ! Nous sélectionnerons nos favorites ! ",
      placeholder: "Saisissez le nom de votre chanson",
      small_note:
        "* Les chansons ne peuvent pas tourner sur le site, mais vous pouvez toujours les ajouter à la playlist.",
      toast_success: {
        title: "Musique ajoutée à la playlist",
        description: "Y a t-il une autre musique à laquelle vous pensez ?",
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
        when_where: "Quando e Dove",
        dates: [
          { bold: true, text: "Date: " },
          "Sabato 26 e Domenica 27 Luglio 2025",
        ],
        location: [
          {
            bold: true,
            text: "Location: ",
          },
          'Agriturismo "Przy Patykach", Kolonia Łobudzice 18c, 97-425, Polonia',
        ],
        button_loc: "VISITA IL LOCALE",
      },
      accommodations: {
        title: "Alloggi",
        description_1: [
          "Per i nostri ospiti internazionali, offriamo alloggio in hotel per ",
          {
            bold: true,
            text: "Venerdì 25, Sabato 26 e Domenica 27 Luglio.",
          },
        ],
        breakfast: [
          { bold: true, text: "La colazione" },
          " è inclusa con il soggiorno e verrà servita dalle ",
          { bold: true, text: "9:00 alle 12:00" },
          " ogni mattina.",
        ],
        checkout: [
          { bold: true, text: "Hotel/Appartamenti Checkout:" },
          " Il checkout é il Lunedí alle 11:00, perfavore fate colazione prima.",
        ],
      },
      travel_transport: {
        title: "Viaggio",
        description_1: [
          "Per i nostri ospiti internazionali, forniremo il trasporto dall'aeroporto alla location venerdì 25 luglio e dalla location all'aeroporto lunedì 28 luglio.",
        ],
        description_2: [
          {
            bold: true,
            text: "Prima di prenotare il viaggio, vi preghiamo di contattarci e comunicarci l’orario e l’aeroporto che meglio si adattano al vostro programma. Organizzeremo quindi un trasporto di gruppo che soddisfi la maggioranza. Vi preghiamo di farlo entro il 26 maggio 2025.",
          },
        ],
        description_3: [
          "Gli aeroporti più vicini sono l'Aeroporto di Katowice (KTW), l'Aeroporto di Varsavia Modlin (WMI) e l'Aeroporto di Varsavia Chopin (WAW).",
        ],
        description_4: [
          "Faremo del nostro meglio per accontentare tutti. Se non riuscite ad arrivare o partire nello stesso giorno e/o orario degli altri, vi aiuteremo a organizzare un altro modo per raggiungere e lasciare la location.",
        ],
        transport_details: {
          arrival: {
            title: "Venerdí 25 Luglio",
            desc1: [
              { bold: true, text: "Aereoporto di Varsavia (WAW):" },
              " Le navette partono intorno le 19:30 - Anaïs vi aspetterá agli arrivi.",
            ],
            desc2: [
              { bold: true, text: "Aereoporto di Katowice:" },
              " Le navette partono intorno le 17:00 - Louis vi aspetterá agli arrivi.",
            ],
          },
          departure: {
            title: "Lunedí 28 luglio",
            desc1: [
              { bold: true, text: "" },
              " Le navette per entrambi gli aereoporti partono alle 12:00.",
            ],
          },
        },
      },
      contact: {
        title: "Contattaci",
        // Email added on the front end
        // numbers added on the front end
      },
    },
    rsvp_section: {
      top_title: "RSVP",
      title: { main: "Conferma la tua", sub: "Presenza" },
      description_1: [
        {
          bold: true,
          text: "Vi preghiamo di confermare la vostra presenza entro il 26 maggio 2025!",
        },
        "  Basta cercare il vostro nome nell'apposito campo e confermare la partecipazione.",
      ],
      description_2:
        "Vi preghiamo di lasciarci un messaggio se avete richieste speciali, restrizioni alimentari o qualsiasi altra cosa di cui vorreste parlarci. Vogliamo assicurarci che tutti siano a proprio agio e si divertano al massimo!",
      label: "Cerca il tuo nome nella lista",
      placeholder: "Digita il tuo nome",
      no_found: "Nessun invitato trovato con questo nome",
      multiple_guests_1: {
        hi: "Ciao",
        you: " Tu ",
        and: " e ",
        are_invited:
          ", siete calorosamente invitati a partecipare al nostro giorno speciale. Festeggiare con tutti voi lo renderà indimenticabile!",
      },
      multiple_guests_2:
        "Seleziona chi parteciperà al matrimonio. Speriamo possiate venire tutti.",
      single_guest_1: {
        hi: "Ciao ",
        are_invited:
          " Con grande piacere, ti invitiamo a partecipare al nostro giorno speciale. La tua presenza lo renderà indimenticabile!",
      },
      single_guest_2: "Parteciperai al matrimonio?",
      answers: { yes: "Sì", no: "No", unknown: "Non lo so" },
      note_placeholder: "Vuoi lasciare un messaggio?",
      rsvp_success: {
        thanks: "Grazie!",
        submitted: " La tua conferma è stata inviata.",
        change_by: [
          "Ricorda che puoi cambiare la tua partecipazione entro il ",
          { bold: true, text: "26 Maggio 2025" },
          ".",
        ],
      },
      error_enter_name: "Per favore inserisci la tua risposta prima di inviare",
      error_submitting: "Errore nell'invio della conferma. Per favore riprova.",
      button: {
        submit: "Conferma",
        loading: "Un Momento...",
      },
    },
    registry_section: {
      title: { main: "LISTA", sub: "Nozze" },
      description_1:
        "La vostra presenza al nostro matrimonio è davvero il regalo più grande che potremmo desiderare!",
      description_2:
        "Tuttavia, se desiderate onorarci con un regalo, vi saremmo immensamente grati per un contributo monetario che ci aiuti a costruire il nostro futuro insieme.",
      description_3:
        "In alternativa a fiori, liquori e altri regali materiali, saremmo felici di ricevere gratta e vinci o biglietti della lotteria come modo divertente ed emozionante per celebrare il nostro nuovo inizio.",
      description_4:
        "Chiediamo gentilmente ai nostri ospiti internazionali di considerare l’opzione di inviare il regalo tramite bonifico bancario. Per accedere ai nostri dati bancari, cliccate sul pulsante qui sotto e inserite la password indicata nell’invito. Come sempre, non esitate a contattarci direttamente se avete domande!",
      button: "Accedi Dettagli Bancari",
      thanks: "GRAZIE!",
      error_from_api:
        "Si è verificato un problema. Riprova più tardi o contattaci",
      error_incorrect_password: "Password errata",
      error_insert_password: "Inserisci la password",
      account_holder: "Beneficiario: ",
      iban: "IBAN: ",
      bank_name: "Intestato a: ",
      bic: "BIC / SWIFT: ",
      sort_code: "Codice Sort: ",
      account_number: "Numero di conto: ",
      eur: "Euro",
      gbp: "Sterlina",
      pln: "Zloty",
      toast_copied: "Copiato negli appunti",
      toast_error: "Non è stato possibile copiare",
      dialog_title: {
        before: "Inserisci la password",
        after: "La password è corretta",
      },
      placeholder: "Inserisci la password",
      submit_button: { submit: "Invia", loading: "Verifica in corso..." },
      copy_all: "Copia tutto",
    },
    music_section: {
      title: { main: "LA", sub: "Playlist" },
      description:
        "Aggiungi le tue canzoni preferite alla nostra playlist e aiutaci a creare la colonna sonora perfetta per il nostro matrimonio!",
      placeholder: "Nome della canzone",
      small_note:
        "* Alcune canzoni non possono essere riprodotte qui, ma puoi comunque aggiungerle alla playlist.",
      toast_success: {
        title: "Canzone aggiunta alla playlist",
        description: "Vuoi aggiungerne un'altra?",
      },
      toast_error: {
        title: "Impossibile aggiungere la canzone alla playlist!",
        description:
          "Siamo spiacenti, ma qualcosa è andato storto da parte nostra. Per favore, riprova più tardi.",
      },
    },
    footer: {
      text_1: "Sito creato con ",
      text_2: "da ",
      text_3: "Fotografie da",
    },
    not_found: {
      message: "La pagina che stai cercando non esiste.",
      button: "Torna Indietro",
    },
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
    button: "Voltar",
  },
},
}

export default translations;
