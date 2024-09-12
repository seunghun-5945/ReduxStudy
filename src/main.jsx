import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Store from './redux/Store.jsx'
import AddHuman from './pages/AddHuman.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/AddHuman' element={<AddHuman/>}/>
      </Routes>
    </BrowserRouter>
  </Provider>
)
