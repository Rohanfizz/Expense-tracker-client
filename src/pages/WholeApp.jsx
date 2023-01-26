import { Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import Expenses from '../components/Expenses/Expenses'
import NavBar from '../components/NavBar/NavBar';
import NewExpense from '../components/NewExpense/NewExpense'
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2023, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];
const WholeApp = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...expenses];
    });
  };
  
  return (
    <>
    <NavBar/>
    <Flex bgColor={'#292828'} h="calc(100vh - 4rem) auto" flexDir={"column"} justifyContent="center" alignItems={"center"}>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
    </Flex>
    </>
  )
}

export default WholeApp;