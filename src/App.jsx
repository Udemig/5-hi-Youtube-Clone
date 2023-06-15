import Header from './components/Header';
import Feed from './pages/Feed';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoDetail from './pages/VideoDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/watch/:videoId" element={<VideoDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
