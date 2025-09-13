import { createContext, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";
import { IoCloseOutline } from "react-icons/io5";

// Context
const ModalContext = createContext();

export default function Modal({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

Modal.Trigger = function Trigger({ children }) {
  const { setOpen } = useContext(ModalContext);
  return <li onClick={() => setOpen(true)}>{children}</li>;
};

Modal.Content = function Content({ children }) {
  const { open, setOpen } = useContext(ModalContext);
  const modalRef = useRef(null);

  // Close on outside click + Escape
  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function handleEscape(e) {
      if (e.key === "Escape") setOpen(false);
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, setOpen]);

  if (!open) return null;

  return createPortal(
    <div className="modal-overlay">
      <div ref={modalRef} className="modal-box">
        {children}
        <IoCloseOutline
          className="modal-close"
          onClick={() => setOpen(false)}
        />
      </div>
    </div>,
    document.body
  );
};
