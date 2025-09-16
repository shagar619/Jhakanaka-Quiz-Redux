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
     <section className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {quizzes.map((quiz) => {
          return (
          <Card
               key={quiz._id}
               className="cursor-pointer shadow hover:shadow-lg border p-4"
               onClick={() => handleSetQuiz(quiz)}
          >
               <h3 className="text-xl text-center font-semibold">{quiz.title}</h3>
               <p className="text-base text-center text-gray-700">{quiz.description}</p>
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