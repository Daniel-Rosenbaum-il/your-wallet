import React from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";

const FormGroup = styled(Form.Group)`
  width: 50%;
`;
const EntryForm = ({ description, setDescription, amount, setAmount, isIncome, setIsIncome }) => {
  return (
    <>
      <div className="d-flex gap-2 mb-2">
        <FormGroup>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={description} placeholder="New thing" onChange={(e) => setDescription(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Form.Label>Amount</Form.Label>
          <Form.Control type="number" value={amount} placeholder="$ 100.00" onChange={(e) => setAmount(e.target.value)} />
        </FormGroup>
      </div>
      <FormGroup>
        <Form.Check type="switch" label="Is income?" value={isIncome} checked={isIncome} onChange={() => setIsIncome((prevState) => !prevState)} />
      </FormGroup>
    </>
  );
};

export default EntryForm;
