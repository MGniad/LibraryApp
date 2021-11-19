import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import User from './components/User';
import AddNewBook from './components/AddNewBook';
import Calendar from './components/Calendar';
import Categories from './components/Categories';
import Books from './components/Books';
import EditBooks from './components/EditBooks';
import Search  from './components/SearchBar';



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
<<<<<<< HEAD

=======
     <Search/>
>>>>>>> 2f68e1271d72844cc8df8a13014f001afe3b46ea
      <Books />
      <EditBooks />

     </Main>

    </div>
  );
}

export default App;
