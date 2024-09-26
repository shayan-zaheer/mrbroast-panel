import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;