import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
