import style from "./Captcha.module.css";
import {InputBlock} from "../Login/InputBlock/InputBlock";

export const Captcha = (props) => {
    return (
        <div className={style.main}>
            <div className={style.captcha}>
                <div className={style.captchaImage}>
                    <img
                        src="https://social-network.samuraijs.com/HelpApp/HelpApp/Captcha?w=200&h=100&c=t6gPwYI2H7I2JlcQEABeOA%3D%3D"
                        alt=""/>
                </div>
                <InputBlock
                    type={"text"}
                    name={"captchaText"}
                />
            </div>
        </div>
    )
}