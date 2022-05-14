import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import EntryForm from "./EntryForm";
import EntryFormAction from "./EntryFormAction";

const Section = styled.section``;

const NewEntryForm = ({ addEntry, description, setDescription, amount, setAmount, isIncome, setIsIncome }) => {
  return (
    <Section>
      <h5>Add new transaction</h5>
      <Form>
        <EntryForm
          description={description}
          setDescription={setDescription}
          amount={amount}
          setAmount={setAmount}
          isIncome={isIncome}
          setIsIncome={setIsIncome}
        />
        <EntryFormAction addEntry={addEntry} />
      </Form>
    </Section>
  );
};

export default NewEntryForm;
