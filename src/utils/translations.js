/**
 * @file translation.js
 * @description Contains translations for the website in English, Italian, and Polish, covering various sections such as navbar, RSVP, registry, and more.
 * @author Emanuele Sgroi
 * @date 19 October 2024
 */

const translations = {
  // ENGLISH <---------------------------------------------------------------------------------------
  en: {
    couple: {
      her: "Karolina",
      him: "Emanuele",
      footer_her: "Karolina",
      footer_him: "Emanuele",
    },
    navbar: {
      welcome: "Welcome",
      save_the_date: "Save the Date",
      schedule: "Wedding Timeline",
      info: "Details",
      rsvp: "RSVP",
      registry: "Registry",
      music: "Playlist",
    },
    welcome_section: {
      small_text: "The wedding of...",
      days: "Days",
      day: "Day",
      hours: "Hours",
      hour: "Hours",
      minutes: "Minutes",
      minute: "Minute",
      seconds: "Seconds",
      second: "second",
      button: "Save the Date",
    },
    saveTheDate_section: {
      title: "SAVE",
      title_cursive: "The Date",
      date: "26th of July 2025",
      place: "in Kolonia Łobudzice, Poland",
      story_1: "We Met",
      story_2: "We Got Engaged",
      story_3_future: "We Will Marry",
      story_3_past: "We Got Married",
    },
    schedule_section: {
      title: {
        main: "WEDDING",
        sub: "Timeline",
      },
      description:
        "The wedding celebration will start on Saturday, 26th of July, and end on Sunday, 27th of July 2025.",
      day_1: {
        title: "Day 1",
        events: {
          ceremony: {
            time: "4:00 PM",
            title: "Ceremony Begins",
          },
          dinner: {
            time: "6:00 PM",
            title: "Dinner Served",
          },
          dance: {
            time: "6:00 PM",
            title: "First Dance",
          },
          photo: {
            time: "8:00 - 11:00 PM",
            title: "Photo Booth",
          },
          pig: {
            time: "12:00 AM",
            title: "Special Dish",
          },
          cake_cutting: {
            time: "22:30 PM",
            title: "Cake Cutting",
          },
          games: {
            time: "12:30 AM",
            title: "Party Games",
          },
          party: {
            time: "All Night",
            title: "Eat, Drink, Dance, Repeat!",
          },
        },
      },
      day_2: {
        title: "Day 2",
        events: {
          after: {
            time: "3:00 PM",
            title: "After Party Starts",
          },
          vespa: {
            time: "3:00 - 8:00 PM",
            title: "Vespa Bar",
          },
          party_continues: {
            time: "All Day",
            title: "Eat, Drink, Dance, Repeat!",
          },
          end: {
            time: "9:00 PM",
            title: "The End",
          },
        },
      },
    },
    info_section: {
      title: {
        main: "THE",
        sub: "Details",
      },
      details: {
        when_where: "When & Where",
        dates: [
          {
            bold: true,
            text: "Dates: ",
          },
          "Saturday, 26th of July & Sunday, 27th of July 2025.",
        ],
        location: [
          {
            bold: true,
            text: "Location: ",
          },
          'Venue "Przy Patykach", Kolonia Łobudzice 18c, 97-425, Poland.',
        ],
        button_loc: "SEE THE VENUE",
      },
      accommodations: {
        title: "Accommodations",
        description_1: [
          "For our international guests, we are pleased to offer accommodation at the venue's hotel on the ",
          {
            bold: true,
            text: "Friday 25th of July, Saturday 26th of July, and Sunday 27th of July.",
          },
        ],
        breakfast: [
          { bold: true, text: "Breakfast" },
          " is included with your stay and will be served from ",
          { bold: true, text: "9 AM to 12 PM" },
          " each morning.",
        ],
        checkout: [
          { bold: true, text: "Hotel/Apartment Checkout:" },
          " The checkout is on Monday at 11:00 AM, please have your breakfast before then.",
        ],
      },
      travel_transport: {
        title: "Travel & Transportation",
        description_1: [
          "For our international guests, we will provide transportation from the airport to the venue on Friday, 25th of July, and from the venue to the airport on Monday, 28th of July.",
        ],
        description_2: [
          {
            bold: true,
            text: "Before booking your travel, please contact us to let us know the time and the airport that works best for you. We will then organize a group transport that fits the majority. Please do it before the 26th of May 2025.",
          },
        ],
        description_3: [
          "The closest airports are Katowice Airport (KTW), Warsaw Modlin Airport (WMI), and Warsaw Chopin Airport (WAW).",
        ],
        description_4: [
          "We will try our best to accommodate everyone. If you cannot land/depart at the same day/time as everyone else, we will help you organize another way of getting to and from the venue.",
        ],
        transport_details: {
          arrival: {
            title: "Friday 25th of July",
            desc1: [
              { bold: true, text: "Warsaw Airport (WAW):" },
              " Bus leaves around 7:30PM - Karolina will be waiting at the arrivals.",
            ],
            desc2: [
              { bold: true, text: "Katowice Airport:" },
              " Bus leaves around 5:00PM - Emanuele will be waiting at the arrivals.",
            ],
          },
          departure: {
            title: "Monday 28th of July",
            desc1: [
              { bold: true, text: "" },
              " Buses for both airports leave at 12:00 PM",
            ],
          },
        },
      },
      contact: {
        title: "Contact Us",
        // Email added on the front end
        // numbers added on the front end
      },
    },
    rsvp_section: {
      top_title: "RSVP",
      title: { main: "Confirm your", sub: "Attendance" },
      description_1: [
        { bold: true, text: "Please RSVP by the 26th of May 2025!" },
        " Simply search for your name on the form and confirm your attendance.",
      ],
      description_2:
        "Please leave us a note if you have any special requests, dietary restrictions, or if there’s anything else you’d like to discuss. We want to make sure everyone is comfortable and has an amazing time!",
      label: "Search your name in the guests list",
      placeholder: "Search for your name",
      no_found: "No guests found with this name",
      multiple_guests_1: {
        hi: "Hi ",
        you: " You, ",
        and: " and ",
        are_invited:
          ", are warmly invited to join us on our special day. Celebrating with all of you will make it unforgettable!",
      },
      multiple_guests_2:
        "Select who is attending the wedding. We hope all of you can make it.",
      single_guest_1: {
        hi: "Hi ",
        are_invited:
          " you are warmly invited to join us on our special day. Celebrating with you will make it unforgettable!",
      },
      single_guest_2: "Are you attending the wedding?",
      answers: { yes: "Yes", no: "No", unknown: "Don't know yet" },
      note_placeholder: "Would you like to leave a note?",
      rsvp_success: {
        thanks: "Thank you!",
        submitted: " Your RSVP has been submitted.",
        change_by: [
          "Remember that you can change the attendance any time before the ",
          { bold: true, text: "26th of May 2025" },
          ".",
        ],
      },
      error_enter_name: "Please enter your answer before submitting",
      error_submitting: "Error submitting RSVP. Please try again.",
      button: {
        submit: "Send RSVP",
        loading: "Loading...",
      },
    },
    registry_section: {
      title: { main: "GIFT", sub: "Registry" },
      description_1:
        "Your presence at our wedding is truly the greatest gift we could ask for!",
      description_2:
        "However, if you wish to honor us with a gift, we would greatly appreciate a monetary contribution to help us build our future together.",
      description_3:
        "In lieu of flowers, alcohol, and other physical gifts, we would be delighted to receive scratch cards or lottery tickets as a fun and exciting way to celebrate our new beginning.",
      description_4:
        "We kindly ask our international guests to consider sending their gift via a bank transfer. To access our bank details, please click the button below and enter the password that’s on your invitation. As always, feel free to contact us directly if you have any questions!",
      button: "Access Bank Details",
      thanks: "THANK YOU!",
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
      title: { main: "OUR", sub: "Playlist" },
      description:
        "Add your favorite party songs to our playlist and help us shape the perfect soundtrack for our wedding! ",
      placeholder: "Enter the song name",
      small_note:
        "* Some songs can't be played here, but you can still add them to the playlist.",
      toast_success: {
        title: "Song added to the playlist",
        description: "Would you like to add another song?",
      },
      toast_error: {
        title: "Unable to add the song",
        description:
          "We're sorry, but something went wrong on our end. Please try again later.",
      },
    },
    footer: {
      text_1: "Website created with ",
      text_2: "by ",
      text_3: "Photos by",
    },
    not_found: {
      message: "The page you are looking for does not exist.",
      button: "Go Back",
    },
  },

  // ITALIAN <---------------------------------------------------------------------------------------
  it: {
    couple: {
      her: "Karolina",
      him: "Emanuele",
      footer_her: "Karolina",
      footer_him: "Emanuele",
    },
    navbar: {
      welcome: "Vetrina",
      save_the_date: "Segna la Data",
      schedule: "Timeline Matrimonio",
      info: "Dettagli",
      rsvp: "Conferma la Presenza",
      registry: "Lista Nozze",
      music: "Playlist",
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
      second: "secondo",
      button: "Segna la Data",
    },
    saveTheDate_section: {
      title: "SEGNA",
      title_cursive: "La Data",
      date: "26 Luglio 2025",
      place: "a Kolonia Łobudzice, Polonia",
      story_1: "Ci Siamo Conosciuti",
      story_2: "Ci Siamo Fidanzati",
      story_3_future: "Ci Sposiamo",
      story_3_past: "Ci Siamo Sposati",
    },
    schedule_section: {
      title: {
        main: "TIMELINE",
        sub: "Matrimonio",
      },
      description:
        "I festeggiamenti per il matrimonio inizieranno sabato 26 luglio e termineranno domenica 27 luglio 2025.",
      day_1: {
        title: "Giorno 1",
        events: {
          ceremony: {
            time: "16:00",
            title: "Inizio della Cerimonia",
          },
          dinner: {
            time: "18:00",
            title: "Cena Servita",
          },
          dance: {
            time: "18:00",
            title: "Primo Ballo",
          },
          photo: {
            time: "20:00 - 23:00",
            title: "Cabina Fotografica",
          },
          pig: {
            time: "00:00",
            title: "Piatto Speciale",
          },
          cake_cutting: {
            time: "22:30",
            title: "Taglio della Torta",
          },
          games: {
            time: "00:30",
            title: "Animazione con Giochi di Gruppo",
          },
          party: {
            time: "Tutta la notte",
            title: "Mangia, Bevi, Balla, Ripeti!",
          },
        },
      },
      day_2: {
        title: "Giorno 2",
        events: {
          after: {
            time: "15:00",
            title: "Inizia L'After!",
          },
          vespa: {
            time: "15:00 - 20:00",
            title: "Vespa Bar",
          },
          party_continues: {
            time: "Tutta la Giornata",
            title: "Mangia, Bevi, Balla, Ripeti!",
          },
          end: {
            time: "21:00",
            title: "Finita La Commedia!",
          },
        },
      },
    },
    info_section: {
      title: {
        main: "I",
        sub: "Dettagli",
      },
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
              " Le navette partono intorno le 19:30 - Karolina vi aspetterá agli arrivi.",
            ],
            desc2: [
              { bold: true, text: "Aereoporto di Katowice:" },
              " Le navette partono intorno le 17:00 - Emanuele vi aspetterá agli arrivi.",
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
    her: "Karolina",
    him: "Emanuele",
    footer_her: "Karolina",
    footer_him: "Emanuele",
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
            " O ônibus sai por volta das 19:30 - Karolina estará aguardando na chegada.",
          ],
          desc2: [
            { bold: true, text: "Aeroporto de Katowice:" },
            " O ônibus sai por volta das 17:00 - Emanuele estará aguardando na chegada.",
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
