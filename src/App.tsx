import './App.css'
import Header from './Components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import MoviePage from './pages/MoviePage';
// import HomePage from './pages/HomePage';
import ArtistPage from './pages/ArtistPage';
import Footer from './Components/Footer';
import ArtistsPage from './pages/ArtistsPage';
import NotFoundPage from './pages/NotFoundPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import Container from './Components/Container';
import Genres from './Components/Container/Genres';
import Promoted from './Components/Container/Promoted';
import ImageCard from './Generics/ImageCard';
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
    //   element: <MoviePage />,
    // }]
  },
  {
    path: '/moviesfeatured',  
    element: <Promoted />,
    children:[{
      path: '/moviesfeatured/:movieId',
      element: <ImageCard />,
    }]
  },
  {
    path: '/movies/:movieId',
    element: <MoviePage />,
  },
  {
    path: '/movies/p/:pageNumber',
    element: <MoviesPage />,
  },
  {
    path: '/artist',
    element: <ArtistPage />,
  },
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
