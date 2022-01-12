import './App.css';
import BestSeller from './components/BestSeller';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <h1 style={{'textAlign': 'center'}}>Amazon App</h1>
      <h2>Best Selling books...</h2>
      <BestSeller/>
      <BookList/>
    </div>
  );
}

export default App;
