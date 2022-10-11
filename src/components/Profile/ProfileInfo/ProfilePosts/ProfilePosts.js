import {TextItem} from "../../../TextItem/TextItem";

export const ProfilePosts = () => {
    return (
        <ul>
            <li><TextItem text={"Привет, React"}/></li>
            <li><TextItem text={"Привет, JS"}/></li>
            <li><TextItem text={"Привет, bundle.js"}/></li>
            <li><TextItem text={"Привет, props"}/></li>
        </ul>
    );
}