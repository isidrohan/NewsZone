import React, { Component , useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
// import Newsitem from './components/Newsitem';
import {
  BrowserRouter as Router,
  Route,
  Routes,
 
} from "react-router-dom";
const App = ()=> {
  const pageSize = 6;
  const [progress, setprogress] = useState(0)
  // state = {
  //   progress: 0
  // }
  // const setprogress = (progress) => {
  //   setState({progress: progress})
  // }
    return (
        <div>
           <Router>
          <Navbar></Navbar>
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
            
          />
          <Routes>
          <Route exact path="/" element = {<News setprogress = {setprogress} key='general' pageSize = {pageSize} country='in' category='General'></News>}> </Route>
          <Route exact path="/business" element={<News setprogress = {setprogress} key='business' pageSize = {pageSize} country='in' category='business'></News>}> </Route>
          <Route exact path="/entertainment" element={<News setprogress = {setprogress} key='entertainment' pageSize = {pageSize} country='in' category='entertainment'></News>}> </Route>
          <Route exact path="/general" element={<News setprogress = {setprogress} key='general' pageSize = {pageSize} country='in' category='general'></News>}> </Route>
          <Route exact path="/health" element={<News setprogress = {setprogress} key='health' pageSize = {pageSize} country='in' category='health'></News>}> </Route>
          <Route exact path="/science" element={<News setprogress = {setprogress}key='science' pageSize = {pageSize} country='in' category='science'></News>}> </Route>
          <Route exact path="/sports" element={<News setprogress = {setprogress}key='sports' pageSize = {pageSize} country='in' category='sports'></News>}> </Route>
          <Route exact path="/technology" element={<News setprogress = {setprogress}key='technology' pageSize = {pageSize} country='in' category='technology'></News>}> </Route>
          </Routes>
          {/* <News setprogress = {setprogress}pageSize = {6} country='in' category='sports'></News> */}
          </Router>
        </div>
    )
}
export default App;
