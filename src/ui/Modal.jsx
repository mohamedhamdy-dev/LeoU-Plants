import { createContext, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";
import { IoCloseOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "motion/react";
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

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            ref={modalRef}
            className="modal-box"
            initial={{ scale: 0.8, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {children}
            <IoCloseOutline
              className="modal-close"
              onClick={() => setOpen(false)}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
