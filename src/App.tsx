import './App.css'
import Header from './Components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import MoviePage from './pages/MoviePage';
import HomePage from './pages/HomePage';
import ArtistPage from './pages/ArtistPage';
import Footer from './Components/Footer';
import ArtistsPage from './pages/ArtistsPage';
import NotFoundPage from './pages/NotFoundPage';
import { QueryClient, QueryClientProvider } from 'react-query';



const queryClient = new QueryClient();

function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/movies',  
    element: <MoviesPage />,
    children:[{
      path: '/movies/:movieId',
      element: <MoviePage />,
    }]
  },
  
  {
    path: '/artist',
    element: <ArtistPage />,
  },
  {
    path: '/artists',
    element: <ArtistsPage />,
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
