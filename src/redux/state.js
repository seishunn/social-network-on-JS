const userAvatar = "https://i.pinimg.com/originals/96/5f/53/965f53b4c0bb836ff10cec9692c04aa8.jpg";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let store = {
    _callSubscriber () {
        console.log('no subscribes (observers)');
    },
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Привет, React"},
                {id: 2, message: "Привет, JS"},
                {id: 3, message: "Привет, bundle.js"},
                {id: 4, message: "Привет, props"},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, myMessage: false, message: "Я в своем познании настолько преисполнился...", name: "User", userAvatar},
                {id: 2, myMessage: true, message: "Пожалуйста, не начинай", name: "Anonymous"},
                {id: 3, myMessage: false, message: "Что я как будто уже сто триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, как Земля, мне этот мир абсолютно понятен. ", name: "User", userAvatar},
                {id: 4, myMessage: true, message: "О нет...", name: "Anonymous"},
                {id: 5, myMessage: false, message: "И я здесь ищу только одного - покоя, умиротворения и вот этой гармонии от слияния с бесконечно вечным, от созерцания великого фрактального подобия и от вот этого замечательного всеединства существа, бесконечно вечного.", name: "User", userAvatar },
                {id: 6, myMessage: true, message: "Переработал немного, да?", name: "Anonymous"},
                {id: 7, myMessage: false, message: "Да.", name: "User", userAvatar},
                {id: 8, myMessage: true, message: "Отгул, может, возьмешь?", name: "Anonymous"},
                {id: 9, myMessage: false, message: "А ты мне опять со своим вот этим 'Иди суетись дальше, это твое распределение, это твой путь и твой горизонт познания и ощущения твоей природы'...", name: "User", userAvatar},
                {id: 10, myMessage: false, message: "Он несоизмеримо мелок по сравнению с моим, понимаешь?", name: "User", userAvatar},
                {id: 11, myMessage: true, message: "User, не не могу отпуска дать. Сейчас половина отдела разъехалась. Кто работать будет?", name: "Anonymous"},
                {id: 12, myMessage: false, message: "Я как будто бы уже давно глубокий старец, бессмертный, ну или там уже почти бессмертный, который на этой планете от ее самого зарождения.", name: "User", userAvatar},
                {id: 13, myMessage: false, message: "Я на этой Земле уже как будто почти пять миллиардов лет живу и знаю ее вдоль и поперек - этот весь мир. А ты мне какие-то...", name: "User", userAvatar},
                {id: 14, myMessage: false, message: "Мне неважно на твои тачки, на твои яхты, на твои квартиры, там, на твое благо.", name: "User", userAvatar},
                {id: 15, myMessage: true, message: "Ого.", name: "Anonymous"},
                {id: 16, myMessage: true, message: "Неделю бери.", name: "Anonymous"},
                {id: 17, myMessage: false, message: "Вот и все, поэтому давай, ступай, езжай, а я пошел наслаждаться прекрасным осенни закатом на берегу теплой южной реки. Все, ступай. И я пойду.", name: "User", userAvatar},
                {id: 18, myMessage: true, message: "Я, может, тоже хочу на закат посмотреть...", name: "Anonymous"},
            ],
            dialogs: [
                {id: 1, name: "User1"},
                {id: 2, name: "User2"},
                {id: 3, name: "User3"},
                {id: 4, name: "User4"},
                {id: 5, name: "User5"},
                {id: 6, name: "User6"},
                {id: 7, name: "User7"},
                {id: 8, name: "User8"},
                {id: 9, name: "User9"},
                {id: 10, name: "User10"},
                {id: 11, name: "User11"},
                {id: 12, name: "User12"},
                {id: 13, name: "User13"},
                {id: 14, name: "User14"},
                {id: 15, name: "User15"},
                {id: 16, name: "User16"},
                {id: 17, name: "User17"},
                {id: 18, name: "User18"},
                {id: 19, name: "User19"},
                {id: 20, name: "User20"},
            ],
            newMessageText: ''
        }
    },
    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText
            }

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';

            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.payload;

            this._callSubscriber();
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 19,
                myMessage: true,
                message: this._state.dialogsPage.newMessageText,
                name: "Anonymous"
            };

            this._state.dialogsPage.newMessageText = ""
            this._state.dialogsPage.messages.push(newMessage)
            this._callSubscriber();
        } else {
            this._state.dialogsPage.newMessageText = action.payload;

            this._callSubscriber();
        }
    }
}

export let addPostActionCreator = () => ({type: ADD_POST});
export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, payload: text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, payload: text});

window.state = store.getState();
export {store};