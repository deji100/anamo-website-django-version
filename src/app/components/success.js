import React from "react";
import styles from "./success.module.css"; // Import modular CSS

const SuccessModal = ({ show, onClose, message }) => {
  if (!show) return null; // Don't render the modal if `show` is false

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>Success!</h2>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={styles.checkmark}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <p>{message || "Your action was completed successfully!"}</p>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.button} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
