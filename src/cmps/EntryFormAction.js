import React from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";

const FormGroup = styled(Form.Group)`
  width: 50%;
`;

const EntryFormAction = ({ addEntry }) => {
  return (
    <>
      <FormGroup className="d-flex gap-2">
        <Button onClick={() => addEntry()}>Ok</Button>
        <Button variant="danger">Cancel</Button>
      </FormGroup>
    </>
  );
};

export default EntryFormAction;
