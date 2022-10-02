import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = React.useState ([{name : "Homework"},{   name : eat  }])
  return (
  
    <div>
      <input/>
      <button>
      click      
      </button>
      <ul> 
        todos
      </ul>
      </div>
  );
}

export default App;