import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

const Section = styled.section``;
const Text = styled.p`
  margin: 0;
`;

function DisplayBalance({ totalBudget, totalIncomes, totalExpenses }) {
  return (
    <>
      <div className="d-flex flex flex-column align-items-center">
        <Text>Your balance:</Text>
        <Text className="mb-2 h3 text-primary">${totalBudget}</Text>
      </div>
      <Section className="balance-content mb-4">
        <Row className="border border-dark p-1 m-0 rounded">
          <Col className="text-center">
            <Text className="text-dark">Income:</Text>
            <Text className="text-success md">${totalIncomes}</Text>
          </Col>
          <Col className="text-center">
            <Text className="text-dark mb-0">Expenses:</Text>
            <Text className="text-danger md">${totalExpenses}</Text>
          </Col>
        </Row>
      </Section>
    </>
  );
}

export default DisplayBalance;
