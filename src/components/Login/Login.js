import style from "./Login.module.css"
import DiscordBackground from "../../assets/Discord.PNG"
import {InputBlock} from "./InputBlock/InputBlock";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {Captcha} from "../Captcha/Captcha";
import {ButtonSubmit} from "../ButtonSubmit/ButtonSubmit";

const LoginForm = (props) => {
    return (
        <form className={style.loginForm} onSubmit={props.handleSubmit}>
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
            {props.captcha && <Captcha captchaURL={props.captcha}/>}
            {props.error && <div className={style.error}>
                {props.error}
            </div>}
            <ButtonSubmit>Вход</ButtonSubmit>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

const Login = (props) => {
    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }
    const onSubmit = (formData) => {
        props.login(formData);
    }

    return (
        <div className={style.main}>
            <img src={DiscordBackground} alt="" className={style.backgroundImg}/>
            <LoginReduxForm login={props.login} onSubmit={onSubmit} captcha={props.captcha}/>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }
}

export const LoginContainer = connect(mapStateToProps, {login: loginThunkCreator})(Login)