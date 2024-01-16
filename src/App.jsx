import { RouterProvider } from "react-router-dom"
import { appRouter } from "./router/Router"
import {Toaster} from 'react-hot-toast'
const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
      <Toaster position='bottom-center'/>
    </>
  )
}
export default App