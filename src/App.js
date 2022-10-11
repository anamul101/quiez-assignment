import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './Layout/Main';
import Statistics from './components/Statistics/Statistics';
import QuizPage from './components/QuizPage/QuizPage';
import Blog from './components/Blog/Blog';
import Topics from './components/Topics/Topics';



function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/QuizPage/:quizId',
          loader: ({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element:<QuizPage></QuizPage>
        },
        {
          path:'statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        }
      ]
    }
]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
