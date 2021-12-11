import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainPage = () => {
  return <div>ASFASFAS</div>;
};
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
