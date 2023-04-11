import './App.css';
import MainPage from './pages/MainPage/MainPage';
import BlogPage from './pages/BlogPage/BlogPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import {Provider} from 'react-redux';
import { store } from './store/store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/blog" element={< BlogPage />}/>
                    <Route path="/" element={< MainPage />}/>
                    <Route path="/signIn" element={< AuthPage signIn />}/>
                    <Route path="/signUp" element={< AuthPage signUp />}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
