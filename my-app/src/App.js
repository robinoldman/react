import logo from './logo.svg';
import './App.css';
import MethodsAsPropsChild from './components/MethodsAsPropsChild';
import MethodsAsPropsParent from './components/MethodAsPropsParent';

function App() {
  return (
    <div className="App">
      < MethodsAsPropsChild/>
      < MethodsAsPropsParent/>
    </div>
  );
}

export default App;