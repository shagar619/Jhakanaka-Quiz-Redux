
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import QuizControls from "./QuizControls";
import { setAnswer } from "@/redux/features/quizSlice";


const Question = () => {

     const dispatch = useAppDispatch();

     const { quizQ, currentQuestionIndex, userAnswer } = useAppSelector(state => state.quiz);

     const currentQuestion = quizQ[currentQuestionIndex];

     const currentAnswer = userAnswer[currentQuestionIndex];

     const handleAnswerChange = (ans: string) => {
          dispatch(setAnswer({
               questionIndex: currentQuestionIndex,
               answer: ans,
          }))
     }


return (
     <div className="flex justify-center">

     { quizQ.length ?  (
     <Card className="w-[450px] ">
     <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
          {/* <CardDescription>{}</CardDescription> */}
     </CardHeader>

     <CardContent>
          <div>
               {currentQuestion.options.map((option, index) => (
          <Button
               variant={option === currentAnswer ? "default" : "outline"}
               onClick={() => handleAnswerChange(option)}
               className="w-full mt-3"
               size={"lg"}
               key={index}>
               {option}
          </Button>
          ))}
          </div>
          <QuizControls></QuizControls>
     </CardContent>
     </Card>
     ) : (<div>No Quiz Selected</div>) }
     </div>
);
};

export default Question;