import { Modal, Button } from "react-bootstrap";
import React from "react";
import EntryForm from "./EntryForm";

const EditEntryModal = ({ isModalOpen, handleCloseModal, description, setDescription, amount, setAmount, isIncome, setIsIncome }) => {
  return (
    <>
      <Modal show={isModalOpen} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EntryForm
            description={description}
            setDescription={setDescription}
            amount={amount}
            setAmount={setAmount}
            isIncome={isIncome}
            setIsIncome={setIsIncome}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditEntryModal;
