import React from 'react'
import { Link,Routes, Route, BrowserRouter } from "react-router-dom"
import Chiqim from './Components/Chiqim'
import Foydalanuchi from './Components/Foydalanuchi'
import Kassa from './Components/Kassa'
import Kirim from './Components/Kirim'


function App() {
    return (
        <div>
            <BrowserRouter>
                <div className="container">
                    <div className="row text-center mt-3">
                        <div className="col-3">
                            <Link to={"/foydalanuvchilar"}><button className="btn btn-success">foydalanuvchi</button> </Link>

                        </div>
                        <div className="col-3">
                            <Link to={"/kassa"}><button className="btn btn-success">Kassa</button> </Link>

                        </div>
                        <div className="col-3">
                            <Link to={"/kirim"}><button className="btn btn-success">Kirim</button> </Link>
                        </div>
                        <div className="col-3">
                            <Link to={"/chiqim"}><button className="btn btn-success">Chiqim</button> </Link>
                        </div>
                    </div>
                    <Routes>
                        <Route path="/foydalanuvchilar" element={<Foydalanuchi/>} />
                        <Route path="/kassa" element={<Kassa/>} />
                        <Route path="/kirim" element={<Kirim/>} />
                        <Route path="/chiqim" element={<Chiqim/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
