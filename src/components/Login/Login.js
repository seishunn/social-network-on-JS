import style from "./Login.module.css"
import DiscordBackground from "../../assets/Discord.PNG"
import {InputBlock} from "./InputBlock/InputBlock";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";

const LoginForm = (props) => {
    const onSubmit = (formData) => {
        props.login(formData);
    }

    return (
        <form className={style.loginForm} onSubmit={props.handleSubmit(onSubmit)}>
            <div className={style.header}>
                <div className={style.title}>С возвращением!</div>
                <div className={style.subtitle}>Мы так рады видеть вас снова!</div>
            </div>
            <div className={style.blockForm}>
                <InputBlock
                    label={"Адрес электронной почты или номер телефона"}
                    type={"text"}
                    name={"login"}
                />
                <InputBlock
                    label={"Пароль"}
                    type={"password"}
                    name={"password"}
                />
            </div>
            <button className={style.submit}>Вход</button>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

const Login = (props) => {

    return (
        <div className={style.main}>
            <img src={DiscordBackground} alt="" className={style.backgroundImg}/>
            <LoginReduxForm login={props.login}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

export const LoginContainer = connect(mapStateToProps, {login: loginThunkCreator})(Login)