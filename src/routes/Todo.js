import React from 'react';

import Header from '../components/Header'
import TodoTemplate from '../components/Todo/TodoTemplate';
import Section from '../components/UI/Section';
import { TodosContextProvider } from '../contexts/todos-context';

function Todo() {
  
  return (
    <TodosContextProvider>
      <Header />
      <Section>
      <TodoTemplate></TodoTemplate>
      </Section>
    </TodosContextProvider>
  );
}

export default Todo;