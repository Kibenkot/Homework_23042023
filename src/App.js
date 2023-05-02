import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./components/Pages/HomePage/HomePage"
import BlogPage from "./components/Pages/BlogPage/BlogPage"
import WorksPage from "./components/Pages/WorksPage/WorksPage"
import ContactsPage from './components/Pages/ContactsPage/ContactsPage'
import { posts_data } from './data/posts_data'
import { works_data } from './data/works_data'
import WorkInfoPage from './components/Pages/WorkInfoPage/WorkInfoPage'




function App() {

const newPosts = posts_data.slice(0,2);
const postsBlog = posts_data.slice(1,5)
// console.log('Posts',posts_data);
// console.log('Slice', newPosts);
// console.log('postsBlog', postsBlog);

const newWorks = works_data.slice(0,3)

// console.log('Works', works_data);
console.log('Slice', newWorks);


//=======================
const getDateToDisplay = (date) =>{
  const a = new Date(date)
  const dateToDisplay = a.toLocaleString('en-AU',{ day:'numeric', month: 'short', year: 'numeric'});
  return dateToDisplay
}

//=======================



  return (
    <div className='wrapper_app'>
        
        <Router>
         <Header />
            <Routes>
                <Route path='/' element={<HomePage  newPosts={newPosts} newWorks={newWorks} getDateToDisplay={getDateToDisplay}/>}/>
                <Route path='/blog' element={<BlogPage postsBlog={postsBlog} getDateToDisplay={getDateToDisplay} />}/>
                <Route path='/works' element={<WorksPage works_data={works_data}/>}/>
                <Route path='/works/:id' element={<WorkInfoPage works_data={works_data}/>}/>
                <Route path='/contact' element={<ContactsPage />}/>
            </Routes>
        </Router>
        <Footer />
    </div>
  )
}

export default App