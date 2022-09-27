import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Quiz from './components/Quiz/Quiz';
import Registration from './components/Registration/Registration';
import Start from './components/Start/Start';

function App() {
  const [ showQuiz, setShowQuiz ] = useState(false);
  const [ quizNumber, setQuizNumber ] = useState(1);

  return !showQuiz ? (
    <div className='app-wrapper'>
      <Start setShowQuiz={setShowQuiz} />
    </div>
  ) : quizNumber !== 6 ? (
    <div className='app-wrapper'>
      <Quiz quizNumber={quizNumber} setQuizNumber={setQuizNumber} />
    </div>
  ) : (
    <div className='app-wrapper'>
      <Registration />
    </div>
  )
}

export default App;
