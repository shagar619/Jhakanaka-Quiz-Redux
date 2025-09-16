
import './App.css'
import AddQuiz from './home/AddQuiz';
import AllQuiz from './home/AllQuiz';
import Question from './home/Question';
import QuizSummary from './home/QuizSummary';
import { useAppSelector } from './redux/hook';

function App() {

  const { quizComplete } = useAppSelector(state => state.quiz);

  return (
    <>
      <h1 className='text-center text-5xl font-bold text-green-800 my-12 uppercase'>Quiz App</h1>

      <div className='flex justify-end mb-12 mr-24'>
        <AddQuiz></AddQuiz>
      </div>

      <div className='mx-24 my-12'>
        <AllQuiz></AllQuiz>
      </div>

      { !quizComplete ? <Question></Question> : <QuizSummary></QuizSummary> }

    </>
  )
}

export default App;
