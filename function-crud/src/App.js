import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CrudFunction from './components/CrudFunction';
import NewFunctionCrud from './components/NewFunctionCrud';

function App() {
  return (
    <div className="App">
    <CrudFunction />
    {/* <NewFunctionCrud /> */}
    </div>
  );
}

export default App;
