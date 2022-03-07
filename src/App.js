import './App.css';
import { Form } from './Form';
import { withHeaderBtns } from './hoc';

const FormWithHeader = withHeaderBtns(Form);

function App() {
  return (
    <div className="App">
      <FormWithHeader x />
    </div>
  );
}

export default App;
