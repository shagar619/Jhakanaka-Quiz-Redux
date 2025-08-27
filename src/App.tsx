
import './App.css'
import AddQuiz from './home/AddQuiz';
import Question from './home/Question';
import QuizSummary from './home/QuizSummary';
import { useAppSelector } from './redux/hook';

function App() {

  const { quizComplete } = useAppSelector(state => state.quiz);

  return (
    <>
      <h1 className='text-center text-5xl font-bold text-gray-800 my-12'>Quiz App</h1>

      <AddQuiz></AddQuiz>

      { !quizComplete ? <Question></Question> : <QuizSummary></QuizSummary> }

    </>
  )
}

export default App;
