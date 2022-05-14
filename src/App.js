import { Button, Col, Container, Form, Row } from "react-bootstrap";
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";

const Text = styled.p`
  margin: 0;
`;
const Section = styled.section``;

const FormGroup = styled(Form.Group)`
  width: 50%;
`;
function App() {
  return (
    <Container>
      <h1>Your wallet</h1>
      <div className="d-flex flex flex-column align-items-center">
        <Text>Your balance:</Text>
        <Text className="mb-2 h3 text-primary">2,550.45</Text>
      </div>
      <Section className="balance-content mb-4">
        <Row className="border border-dark p-1 m-0 rounded">
          <Col className="text-center">
            <Text className="text-dark">Incoming:</Text>
            <Text className="text-success md">1,500</Text>
          </Col>
          <Col className="text-center">
            <Text className="text-dark mb-0">Expenses:</Text>
            <Text className="text-danger md">654.25</Text>
          </Col>
        </Row>
      </Section>
      <Section className="history-content mb-4 ">
        <h5>History</h5>
        <Row className="border border-danger p-1 m-0 mb-3 rounded ">
          <Col className="text-start">
            <Text className="text-dark">Something</Text>
          </Col>
          <Col className="text-center">
            <Text className="text-danger md">20$</Text>
          </Col>
          <Col className="text-center d-flex justify-content-center align-items-center gap-2">
            <FaEdit />
            <FaTrash />
          </Col>
        </Row>
        <Row className="border border-success p-1 m-0 mb-3 rounded">
          <Col className="text-start">
            <Text className="text-dark">Something</Text>
          </Col>
          <Col className="text-center">
            <Text className="text-success md">40$</Text>
          </Col>
          <Col className="text-center d-flex justify-content-center align-items-center gap-2">
            <FaEdit />
            <FaTrash />
          </Col>
        </Row>
        <Row className="border border-danger p-1 m-0 mb-3 rounded">
          <Col className="text-start">
            <Text className="text-dark">Something</Text>
          </Col>
          <Col className="text-center">
            <Text className="text-danger md">30$</Text>
          </Col>
          <Col className="text-center d-flex justify-content-center align-items-center gap-2">
            <FaEdit />
            <FaTrash />
          </Col>
        </Row>
      </Section>
      <Section>
        <h5>Add new transaction</h5>
        <Form>
          <div className="d-flex gap-2 mb-2">
            <FormGroup>
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="New thing" />
            </FormGroup>
            <FormGroup>
              <Form.Label>Value</Form.Label>
              <Form.Control type="text" placeholder="$ 100.00" />
            </FormGroup>
          </div>
          <FormGroup className="d-flex gap-2">
            <Button variant="danger">Cancel</Button>
            <Button>Ok</Button>
          </FormGroup>
        </Form>
      </Section>
    </Container>
  );
}

export default App;
