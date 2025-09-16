import "./StateMessage.css";

export default function StateMessage({ message }) {
  return (
    <div className="state-message__box">
      <p className="state-message__text">{message}</p>
    </div>
  );
}
