import "./StateMessage.css";

export default function StateMessage({ message }) {
  return (
    <div className="state-message-container">
      <p className="state-message-text">{message}</p>
    </div>
  );
}
