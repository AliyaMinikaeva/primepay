import "./Button.scss";

export default function Button({children}) {
    return (
        <button className="button" type="button">{children}</button>
    );
}
