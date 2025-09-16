import Modal from "../../ui/Modal";
import Plant from "./Plant";
import "./Card.css";

export function Card({ data }) {
  const { name, image, price } = data;

  return (
    <Modal>
      <Modal.Trigger>
        <div className="card">
          <div>
            <img className="card__img" src={image} alt={name} />
          </div>
          <div className="card__text">
            <p className="line-clamp-1">{name}</p>
            <p>{`$${price}`}</p>
          </div>
        </div>
      </Modal.Trigger>
      <Modal.Content>
        <Plant data={data} />
      </Modal.Content>
    </Modal>
  );
}
