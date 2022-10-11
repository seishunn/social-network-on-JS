import style from "./Dialogs.module.css";
import {DialogItems} from "./DialogItems/DialogItems";
import {Messages} from "./Messages/Messages";

export const Dialogs = (props) => {
    const userAvatar = "https://i.pinimg.com/originals/96/5f/53/965f53b4c0bb836ff10cec9692c04aa8.jpg";
    const messages = [
        {myMessage: false, text: "Я в своем познании настолько преисполнился...", name: "User", userAvatar},
        {myMessage: true, text: "Пожалуйста, не начинай", name: "Anonymous"},
        {myMessage: false, text: "Что я как будто уже сто триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, как Земля, мне этот мир абсолютно понятен. ", name: "User", userAvatar},
        {myMessage: true, text: "О нет...", name: "Anonymous"},
        {myMessage: false, text: "И я здесь ищу только одного - покоя, умиротворения и вот этой гармонии от слияния с бесконечно вечным, от созерцания великого фрактального подобия и от вот этого замечательного всеединства существа, бесконечно вечного.", name: "User", userAvatar },
        {myMessage: true, text: "Переработал немного, да?", name: "Anonymous"},
        {myMessage: false, text: "Да.", name: "User", userAvatar},
        {myMessage: true, text: "Отгул, может, возьмешь?", name: "Anonymous"},
        {myMessage: false, text: "А ты мне опять со своим вот этим 'Иди суетись дальше, это твое распределение, это твой путь и твой горизонт познания и ощущения твоей природы'...", name: "User", userAvatar},
        {myMessage: false, text: "Он несоизмеримо мелок по сравнению с моим, понимаешь?", name: "User", userAvatar},
        {myMessage: true, text: "User, не не могу отпуска дать. Сейчас половина отдела разъехалась. Кто работать будет?", name: "Anonymous"},
        {myMessage: false, text: "Я как будто бы уже давно глубокий старец, бессмертный, ну или там уже почти бессмертный, который на этой планете от ее самого зарождения.", name: "User", userAvatar},
        {myMessage: false, text: "Я на этой Земле уже как будто почти пять миллиардов лет живу и знаю ее вдоль и поперек - этот весь мир. А ты мне какие-то...", name: "User", userAvatar},
        {myMessage: false, text: "Мне неважно на твои тачки, на твои яхты, на твои квартиры, там, на твое благо.", name: "User", userAvatar},
        {myMessage: true, text: "Ого.", name: "Anonymous"},
        {myMessage: true, text: "Неделю бери.", name: "Anonymous"},
        {myMessage: false, text: "Вот и все, поэтому давай, ступай, езжай, а я пошел наслаждаться прекрасным осенни закатом на берегу теплой южной реки. Все, ступай. И я пойду.", name: "User", userAvatar},
        {myMessage: true, text: "Я, может, тоже хочу на закат посмотреть...", name: "Anonymous"},
    ];

    return (
        <div className={style.dialogsPage}>
            <div className={style.dialogsSideBar}>
                <DialogItems/>
            </div>
            <Messages messages={messages}/>
        </div>
    );
}