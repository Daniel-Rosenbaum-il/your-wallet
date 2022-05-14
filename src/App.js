import { Container } from "react-bootstrap";
import styled from "styled-components";
import Header from "./cmps/Header";
import NewEntryForm from "./cmps/NewEntryForm";
import DisplayBalance from "./cmps/DisplayBalance";
import { useEffect, useState } from "react";
import EntryLines from "./cmps/EntryLines";
import EditEntryModal from "./cmps/EditEntryModal";

const initialEntries = [
  {
    entryId: "ent1",
    isIncome: true,
    amount: 1000,
    description: "Work income",
  },
  {
    entryId: "ent2",
    isIncome: false,
    amount: 20,
    description: "Water bill",
  },
  {
    entryId: "ent3",
    isIncome: false,
    amount: 35.5,
    description: "Tiv-tam: food",
  },
  {
    entryId: "ent4",
    isIncome: false,
    amount: 26.5,
    description: "Am-Pm: food",
  },
];

const Section = styled.section``;

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [isIncome, setIsIncome] = useState(false);
  const [entryId, setEntryId] = useState();
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.forEach((entry) => {
      if (entry.isIncome) return (totalIncomes += entry.amount);
      return (totalExpenses += entry.amount);
    });
    setTotalBudget(totalIncomes - totalExpenses);
    setTotalIncomes(totalIncomes);
    setTotalExpenses(totalExpenses);
  }, [entries]);

  useEffect(() => {
    if (!isModalOpen && entryId) {
      const newEntries = [...entries];
      const entryIdx = newEntries.findIndex((entry) => entry.entryId === entryId);
      newEntries[entryIdx].description = description;
      newEntries[entryIdx].amount = +amount;
      newEntries[entryIdx].isIncome = isIncome;
      setEntries(newEntries);
      resetEntry();
    }
    //eslint-disable-next-line
  }, [isModalOpen]);

  const deleteEntry = (entryId) => {
    const newEntries = entries.filter((entry) => entry.entryId !== entryId);
    setEntries(newEntries);
  };

  const addEntry = () => {
    const newEntry = {
      entryId: `ent${initialEntries.length + 1}`,
      isIncome,
      amount: +amount,
      description,
    };
    setEntries((prevEntries) => [...prevEntries, newEntry]);
    resetEntry();
  };

  const editEntry = (entryId) => {
    if (entryId) {
      const entryIdx = entries.findIndex((entry) => entry.entryId === entryId);
      const entry = entries[entryIdx];
      setEntryId(entryId);
      setDescription(entry.description);
      setAmount(+entry.amount);
      setIsIncome(entry.isIncome);
      setIsModalOpen(true);
    }
  };

  const resetEntry = () => {
    setDescription("");
    setAmount(0);
    setIsIncome(false);
  };
  return (
    <Container>
      <Header />
      <DisplayBalance totalBudget={totalBudget} totalIncomes={totalIncomes} totalExpenses={totalExpenses} />
      <Section className="history-content mb-4 ">
        <h5>History</h5>
        <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry} />
      </Section>
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        amount={amount}
        setAmount={setAmount}
        isIncome={isIncome}
        setIsIncome={setIsIncome}
      />
      <EditEntryModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        description={description}
        setDescription={setDescription}
        amount={amount}
        setAmount={setAmount}
        isIncome={isIncome}
        setIsIncome={setIsIncome}
      />
    </Container>
  );
}

export default App;
