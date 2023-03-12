import logo from './logo.svg';
import './App.css';
import CounterView from './features/Counter/CounterView';
import { RouterProvider } from 'react-router-dom';
import { router } from './pages/routes/Routes';

function App() {
  return (
    <div className="App">
    
     <RouterProvider router={router} >

     </RouterProvider>
      
    </div>
  );
}

export default App;
