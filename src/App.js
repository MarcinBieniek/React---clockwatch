import TimeCounter from './components/TimeCounter/TimeCounter';
import ButtonStart from './components/Button/ButtonStart';
import ButtonStop from './components/Button/ButtonStop';
import ButtonReset from './components/Button/ButtonReset';
import {useState, useEffect} from 'react';

function App() {

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(null);

  useEffect(() => {

    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
    }, [running]);

  const handleStart = () => {
    setRunning(true)
  }

  const handleStop = () => {
    setRunning(false)
  }

  const handleReset = () => {
    setTime(0);
    setRunning(false)
  }
  
  return (
    <div className="App">
      <TimeCounter time={time}/>
      <ButtonStart start={handleStart}>Start</ButtonStart>
      <ButtonStop stop={handleStop}>Stop</ButtonStop>
      <ButtonReset reset={handleReset}>Reset</ButtonReset>
    </div>
  );
}

export default App;
