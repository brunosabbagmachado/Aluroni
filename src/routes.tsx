import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaPadrao from 'components/PaginaPadrao';
import Menu from 'components/Menu';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/Inicio';
import Sobre from 'pages/Sobre';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/Aluroni' element={<PaginaPadrao />} >
            <Route index element={<Inicio />} />
            <Route path='/Aluroni/cardapio' element={<Cardapio />} />
            <Route path='/Aluroni/sobre' element={<Sobre />} />
          </Route>
          <Route path='/Aluroni/prato/:id' element={<Prato />} />
          <Route path='/Aluroni/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main >
  );
}