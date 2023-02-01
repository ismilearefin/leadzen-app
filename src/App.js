import './App.css';
import backgroundImg from '../src/assets/color-morph.svg';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Pagination from './Components/Pagination/Pagination';

function App() {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
      setUser(response.data)
    })
  },[])

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const showUser = user.slice(firstPostIndex, lastPostIndex)

  return (
    <div className="App bg-cover bg-center bg-no-repeat h-screen grid items-center" style={{backgroundImage:`url(${backgroundImg})`}}>
      <div className=' w-3/4 h-[450px] mx-auto grid items-center'>
          {
            showUser?.map(singleuser => (
              <div key={singleuser.id} className='rounded-lg bg-white flex justify-between items-center  p-10 border'>
            <div className=''>
              <p className='font-bold text-xl'>Name</p>
              <p>{singleuser?.name}</p>
            </div>
            <div>
              <p className='font-bold text-xl'>Contact</p>
              <p>{singleuser.phone}</p>
            </div>
            <div>
              <p className='font-bold text-xl'>Email</p>
              <p>{singleuser.email}</p>
            </div>
            <div>
              <p className='font-bold text-xl'>Website</p>
              <p>{singleuser.website}</p>
            </div>
            <div>
              <Link to={`/details/${singleuser.id}`} className='px-5 py-2 border text-white bg-rose-600'>View Details</Link>
            </div>
          </div>
            ))
          }
      </div>
      <Pagination 
      totalPosts={user.length}
       postsPerPage={postsPerPage} 
       setCurrentPage={setCurrentPage}
       currentPage= {currentPage}
       ></Pagination>
    </div>
  );
}

export default App;
