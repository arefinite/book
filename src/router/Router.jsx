import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import { AddBook, BookDetails, Home, NotFound, UpdateBook } from '../pages'


export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'add-book',
        element:<AddBook/>
      },
      {
        path: 'update-book/:id',
        element:<UpdateBook/>
      },
      {
        path: 'book-detail/:id',
        element: <BookDetails/>
      }
    ],
  },
])
