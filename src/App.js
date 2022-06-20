import TimeCounter from './components/TimeCounter/TimeCounter';
import ButtonStart from './components/Button/ButtonStart';
import ButtonStop from './components/Button/ButtonStop';
import ButtonReset from './components/Button/ButtonReset';

function App() {
  
  const start = () => {
    console.log('Start works')
  }

  const stop = () => {
    console.log('Stop works')
  }

  const reset = () => {
    console.log('Reset works')
  }
  
  return (
    <div className="App">
      <TimeCounter />
      <ButtonStart start={start}>Start</ButtonStart>
      <ButtonStop stop={stop}>Stop</ButtonStop>
      <ButtonReset reset={reset}>Reset</ButtonReset>
    </div>
  );
}

export default App;
