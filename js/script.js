const { createApp } = Vue;
var DateTime = luxon.DateTime;

createApp({
    data() {
        return {
            /* Inserimento nella ricerca */
            searchUser:'',

            /* Inserimento del messaggio da mandare */
            messageSent: '',

            /* Posizione index dell'utente cliccato */
            clickedPosition: 0,

            messageOptions: {
                active: false,
                index: 0
            },

            /* Lista dei contatti */
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    methods: {

        /* Cambiamento della vista per il contatte cliccato */
        changeContactView(index) {
            /* Cambio del nome */
            this.viewedName = this.contacts[index].name;

            /* Cambio della foto profilo */
            this.viewedAvatar = this.contacts[index].avatar;

            /* Ultimo accesso collegato all'ultimo messaggio mandato */
            const messages = this.contacts[index].messages;
            const indexMessages = messages[messages.length - 1];
            this.lastAccess = indexMessages.date;

            /* La posizione viene presa dall'indice */
            this.clickedPosition = index;
        },

        sendMessage() {
            /* Vengono prese ore e minuti dall'orario attuale */
            const now = DateTime.now().toFormat('HH:mm');
            const messages = this.contacts[this.clickedPosition].messages;
            
            /* Creazione di un nuovo oggetto per i messaggi inviati */
            let newObj = {
                message: this.messageSent,
                status: 'sent',
                date: now
            }

            /* Creazione di un nuovo oggetto per i messaggi ricevuti */
            let newObjReceived = {
                message: 'Ok!',
                status: 'received',
                date: now
            }

            /* Se il messaggio non è vuoto invia */
            if(this.messageSent != ''){
                messages.push(newObj);
            }
        
            this.messageSent = ''

            /* Risposta automatica dopo un secondo */
            setTimeout(function(){
                messages.push(newObjReceived);
            },1000)
        },

        /* Barra di ricerca */
        searchBar(){
            this.contacts.forEach((element) => {
                /* Se negli array dei nomi è presente l'inserimento nella barra di ricerca */
                if(element.name.toLowerCase().includes(this.searchUser.toLowerCase())){
                    element.visible = true;
                }else{
                    element.visible = false;
                }
            });
        },
        showMessageOptions(index){
            

            if(!this.messageOptions.active){
                this.messageOptions.active = true;
            }else{
                this.messageOptions.active = false;
            }

            this.messageOptions.index = index;
            
        }
    },
}).mount('#app')

/* Scrivere nella sidebar l'ultimo messaggio */
