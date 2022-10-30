import {dialogsAPI} from "../API/API";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SET_DIALOGS = "SET_DIALOGS";
const SET_DIALOG = "SET_DIALOG";
const SET_MESSAGES = "SET_MESSAGES";

const initialState = {
    messages: [
        // {id: 1, myMessage: false, message: "Я в своем познании настолько преисполнился...", name: "User", userAvatar},
        // {id: 2, myMessage: true, message: "Пожалуйста, не начинай", name: "Anonymous"},
        // {id: 3, myMessage: false, message: "Что я как будто уже сто триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, как Земля, мне этот мир абсолютно понятен. ", name: "User", userAvatar},
        // {id: 4, myMessage: true, message: "О нет...", name: "Anonymous"},
        // {id: 5, myMessage: false, message: "И я здесь ищу только одного - покоя, умиротворения и вот этой гармонии от слияния с бесконечно вечным, от созерцания великого фрактального подобия и от вот этого замечательного всеединства существа, бесконечно вечного.", name: "User", userAvatar },
        // {id: 6, myMessage: true, message: "Переработал немного, да?", name: "Anonymous"},
        // {id: 7, myMessage: false, message: "Да.", name: "User", userAvatar},
        // {id: 8, myMessage: true, message: "Отгул, может, возьмешь?", name: "Anonymous"},
        // {id: 9, myMessage: false, message: "А ты мне опять со своим вот этим 'Иди суетись дальше, это твое распределение, это твой путь и твой горизонт познания и ощущения твоей природы'...", name: "User", userAvatar},
        // {id: 10, myMessage: false, message: "Он несоизмеримо мелок по сравнению с моим, понимаешь?", name: "User", userAvatar},
        // {id: 11, myMessage: true, message: "User, не не могу отпуска дать. Сейчас половина отдела разъехалась. Кто работать будет?", name: "Anonymous"},
        // {id: 12, myMessage: false, message: "Я как будто бы уже давно глубокий старец, бессмертный, ну или там уже почти бессмертный, который на этой планете от ее самого зарождения.", name: "User", userAvatar},
        // {id: 13, myMessage: false, message: "Я на этой Земле уже как будто почти пять миллиардов лет живу и знаю ее вдоль и поперек - этот весь мир. А ты мне какие-то...", name: "User", userAvatar},
        // {id: 14, myMessage: false, message: "Мне неважно на твои тачки, на твои яхты, на твои квартиры, там, на твое благо.", name: "User", userAvatar},
        // {id: 15, myMessage: true, message: "Ого.", name: "Anonymous"},
        // {id: 16, myMessage: true, message: "Неделю бери.", name: "Anonymous"},
        // {id: 17, myMessage: false, message: "Вот и все, поэтому давай, ступай, езжай, а я пошел наслаждаться прекрасным осенни закатом на берегу теплой южной реки. Все, ступай. И я пойду.", name: "User", userAvatar},
        // {id: 18, myMessage: true, message: "Я, может, тоже хочу на закат посмотреть...", name: "Anonymous"},
    ],
    dialogs: [],
    dialog: null,
    newMessageText: ''
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 19,
                myMessage: true,
                message: state.newMessageText,
                name: "Anonymous"
            };

            return {
                ...state,
                newMessageText: "",
                messages: [...state.messages, newMessage]
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.payload
            };
        }
        case SET_DIALOGS: {
            return {
                ...state,
                dialogs: action.payload
            }
        }
        case SET_DIALOG: {
            return {
                ...state,
                dialog: action.payload
            }
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, payload: text});
export const setDialogsActionCreator = (users) => ({type: SET_DIALOGS, payload: users});
export const setDialogActionCreator = (user) => ({type: SET_DIALOG, payload: user});

export const getDialogsThunkCreator = () => {
    return (dispatch) => {
        dialogsAPI.getUserDialogs()
            .then(dialogs => {
                dispatch(setDialogsActionCreator(dialogs))
            })
    }
}

export const getMessagesThunkCreator = (userId) => {
    return (dispatch) => {
        dialogsAPI.getMessagesWithFriend(userId)
            .then(message => console.log(message))
    }
}