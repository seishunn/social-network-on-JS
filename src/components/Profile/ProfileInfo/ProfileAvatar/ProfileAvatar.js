import style from './ProfileAvatar.module.css';
import DiscordLogo from '../../../../assets/c09a43a372ba81e3018c3151d4ed4773.png'
import {ButtonSubmit} from "../../../ButtonSubmit/ButtonSubmit";
import {useState} from "react";

export const ProfileAvatar = (props) => {
    const [editeMode, setEditeMode] = useState(false);

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.updateProfileImage(e.target.files[0]);
        }
    }

    return (
        <div className={style.profile}>
            <div className={style.profileBlock}>
                <div className={style.avatar}>
                    <img src={props.photo?.large || props.photo?.small || DiscordLogo} alt=""/>
                </div>
                {!props.owner && <ButtonSubmit onClick={() => setEditeMode(true)}>Настр. профиль</ButtonSubmit>}
                {editeMode &&
                    <div className={style.settingsBlockBackground} onClick={() => setEditeMode(false)}>
                        <div className={style.settingsBlock} onClick={e => e.stopPropagation()}>
                            <input type="file" onChange={onMainPhotoSelected}/>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}