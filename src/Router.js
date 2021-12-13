import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { MainPage, LegendPage, AboutPage, PicturePage } from './pages';
import { Header } from './components';

const NotFound = () => {
  return <Link to="..">돌아가!!</Link>;
};

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/legend" element={<LegendPage />} />
          <Route path="/picture" element={<PicturePage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
