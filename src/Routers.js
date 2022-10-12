import Home from './components/Home/Home';
import Main from './Layout/Main';
import Statistics from './components/Statistics/Statistics';
import QuizPage from './components/QuizPage/QuizPage';
import Blog from './components/Blog/Blog';
import ErrorPage404 from './components/ErrorPage404/ErrorPage404';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<ErrorPage404></ErrorPage404>,
      children:[
        {
          path:'/',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'home',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'/QuizPage/:quizId',
          loader: ({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element:<QuizPage></QuizPage>
        },
        {
          path:'statistics',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics></Statistics>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        }
      ]
    }
]);