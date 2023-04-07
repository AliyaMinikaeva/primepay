import './App.css';
import MainPage from './pages/MainPage/MainPage';
import BlogPage from './pages/BlogPage/BlogPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Blog" element={< BlogPage />}/>
                <Route path="/" element={< MainPage />}/>
                <Route path="signIn" element={< AuthPage signIn />}/>
                <Route path="/signUp" element={< AuthPage signUp />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
