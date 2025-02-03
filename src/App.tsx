import './App.css'
import Header from './Components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
// import MoviePage from './pages/MoviePage';
// import HomePage from './pages/HomePage';
import ArtistPage from './pages/ArtistPage';
import Footer from './Components/Footer';
import ArtistsPage from './pages/ArtistsPage';
import NotFoundPage from './pages/NotFoundPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import Container from './Components/Container';
import Genres from './Components/Container/Genres';
// import ActorsPage from './pages/ActorsPage';
// import ActorPage from './pages/ActorPage';
import MovieCast from './pages/MovieCast';
// import MovieCastItem from './pages/MovieCastItem';
// import Promoted from './Components/Container/Promoted';
// import GenresHome from './Components/Container/GenresHome';

const queryClient = new QueryClient();

function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/movies',  
    element: <MoviesPage />,
    // children:[{
    //   path: '/movies/:movieId',
    // element: <MoviePage />,
    // }]
   },
  //  {
  //   path: '/movies/:movieId',
  //   element: <MoviePage />,
  // },
  {
    path: '/movies/p/:pageNumber',
    element: <MoviesPage />,
  },
  {
    path: '/artist',
    element: <ArtistPage />,
  },
  {
    path: '/moviecast',
    element: <MovieCast />,      
  },
  // {
  //   path: '/moviecast/:movieId',
  //   element: <MovieCastItem />,      
  // },
  {
    path: '/artists',
    element: <ArtistsPage />,
    children:[{
      path: '/artists/:artistId',
      element: <ArtistPage />,
    }]
  },
  {
    path: '/genres',
    element: <Genres />
  }
])
  return (
    <>
    <QueryClientProvider client={queryClient}>
          <Header />
            <hr />
          {/* <Container /> */}
          <RouterProvider router={router} />
          <Footer />
    </QueryClientProvider>
    </>
  )
}

export default App
