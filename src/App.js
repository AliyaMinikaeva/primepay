import './App.css';
import MainPage from './pages/MainPage/MainPage';
import BlogPage from './pages/BlogPage/BlogPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/Blog" element={<BlogPage />} />
            <Route path="/" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
