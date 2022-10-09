import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Pages/signup';

const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
        );
}
export default AppRouter;