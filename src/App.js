import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import User from './components/User';
import AddNewBook from './components/AddNewBook';
import Calendar from './components/Calendar';
import Categories from './components/Categories';
import Books from './components/Books';
import EditBooks from './components/EditBooks';


function App() {
  return (
    <div className="App">
     <Sidebar>
        <User />
        <AddNewBook />
        <Calendar />
        <Categories />

     </Sidebar>
     <Main>
      <Books />
      <EditBooks />

     </Main>

    </div>
  );
}

export default App;
