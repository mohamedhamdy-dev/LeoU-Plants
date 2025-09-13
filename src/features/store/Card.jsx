import Modal from "../../ui/Modal";
import { PlantInfo } from "./PlantInfo";
import "./Card.css";

export function Card({ data }) {
  const { name, image, price } = data;

  return (
    <Modal>
      <Modal.Trigger>
        <div className="card-container">
          <div>
            <img className="card-img" src={image} alt={name} />
          </div>
          <div className="card-text">
            <p className="line-clamp-1">{name}</p>
            <p>{`$${price}`}</p>
          </div>
        </div>
      </Modal.Trigger>
      <Modal.Content>
        <PlantInfo data={data} />
      </Modal.Content>
    </Modal>
  );
}
