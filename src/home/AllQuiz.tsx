import { Card } from "@/components/ui/card";
import { useGetAllQuizQuery } from "@/redux/api/quizApi";
import { setQuiz } from "@/redux/features/quizSlice";
import { useAppDispatch } from "@/redux/hook";




const AllQuiz = () => {

     const dispatch = useAppDispatch();

     const { data: quizzes, isLoading } = useGetAllQuizQuery(undefined);

     if (isLoading) {
          return <div>Loading...</div>;
     }

     // console.log( quizzes );

     const handleSetQuiz = (quiz) => {
          // console.log( quiz );
          dispatch(setQuiz(quiz.questions));
     }

     return (
     <section className="grid grid-cols-6 gap-4">
          {quizzes.map((quiz) => {
          return (
          <Card
               key={quiz._id}
               className="cursor-pointer"
               onClick={() => handleSetQuiz(quiz)}
          >
               <h3>{quiz.title}</h3>
               <p>{quiz.description}</p>
          </Card>
          );
     })}
     </section>
     );
};

export default AllQuiz;





// data fetch api
// call
// data show
// set quiz