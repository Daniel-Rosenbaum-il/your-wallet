import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";

const Text = styled.p`
  margin: 0;
`;

const EntryLine = ({ entry: { entryId, description, amount, isIncome }, deleteEntry, editEntry }) => {
  return (
    <Row className={`border ${isIncome ? "border-success" : "border-danger"} p-1 m-0 mb-3 rounded `}>
      <Col className="text-start">
        <Text className="text-dark">{description}</Text>
      </Col>
      <Col className="text-center">
        <Text className={`${isIncome ? "text-success" : "text-danger"} md`}>${amount}</Text>
      </Col>
      <Col className="text-center d-flex justify-content-center align-items-center gap-2">
        <FaEdit onClick={() => editEntry(entryId)} />
        <FaTrash onClick={() => deleteEntry(entryId)} />
      </Col>
    </Row>
  );
};

export default EntryLine;
