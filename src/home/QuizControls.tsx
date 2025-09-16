import { Button } from "@/components/ui/button";
import { completeQuiz, nextQuestion, previousQuestion } from "@/redux/features/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";


export default function QuizControls() {

     const { quizQ, currentQuestionIndex, userAnswer, quizComplete } = useAppSelector(state => state.quiz);

     const dispatch = useAppDispatch();

     const isAnswered = userAnswer[currentQuestionIndex] !== null;

     const handleNext = () => {
          // next
          if (isAnswered) {
               dispatch(nextQuestion());
          } else {
               alert("Please answer the current question before proceeding");
          }
     }

     const handlePrevious = () => {
          // previous
          dispatch(previousQuestion());
     }

     const handleCompleteQuiz = () => {
          // complete quiz
          dispatch(completeQuiz());
     }

     const isCompletedEnabled = isAnswered || currentQuestionIndex !== quizQ.length - 1;


return (

     <div>

     <div className="flex justify-between mt-4 space-x-4">
          {/* previous button */}
          <Button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0 || quizComplete}
          >Previous</Button>

          {/* next button */}

          { currentQuestionIndex < quizQ.length - 1 && !quizComplete && (
          <Button 
          onClick={handleNext}
          disabled={!isAnswered}
          >Next</Button>
          ) }

          {/* complete quiz button */}
          {/* { currentQuestionIndex === quizQ.length - 1 && !completeQuiz && ( 
          <Button 
          onClick={handleCompleteQuiz}
          disabled={!isCompletedEnabled}
          >Complete Quiz</Button>
          ) } */}

          <Button 
          onClick={handleCompleteQuiz}
          disabled={!isCompletedEnabled}
          >Complete Quiz</Button>


     </div>
     </div>
);
}
