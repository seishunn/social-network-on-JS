import style from "./Captcha.module.css";
import {InputBlock} from "../Login/InputBlock/InputBlock";

export const Captcha = (props) => {
    return (
        <div className={style.main}>
            <div className={style.captcha}>
                <div className={style.captchaImage}>
                    <img
                        src={props.captchaURL}
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