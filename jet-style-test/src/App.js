import './App.css';
import Header from "./components/Header";
import BookList from "./components/BookList";

function App() {

  return (
    <div className="App">
        <div className="container-md">
            <Header />
            <BookList/>
        </div>
    </div>
  );
}

export default App;
