import React from 'react';
import Header from './Header';
import Filters from './Filters';
import TodoList from './TodoList';
import Footer from './Footer';

const App = () => {
  return (
    <div className="App">
      <h1>Todo list.</h1>
      <section className="todolist--wrapper">
        <Header />
        <Filters />
        <TodoList />
        <Footer />
      </section>
    </div>
  );
};

export default App;
