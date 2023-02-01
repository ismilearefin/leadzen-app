import './App.css';
import backgroundImg from '../src/assets/background.jpg'

function App() {
  return (
    <div className="App bg-cover bg-center bg-no-repeat h-full" style={{backgroundImage:`url(${backgroundImg})`}}>
      <div className=' w-3/4 h-screen mx-auto grid items-center'>
          <div className='rounded-lg bg-white flex justify-between items-center  p-10 border'>
            <div className=''>
              <p className='font-bold text-xl'>Name</p>
              <p>asdasdsa</p>
            </div>
            <div>
              <p className='font-bold text-xl'>Contact</p>
              <p>asdsadsd</p>
            </div>
            <div>
              <p className='font-bold text-xl'>City</p>
              <p>sadsads</p>
            </div>
            <div>
              <p className='font-bold text-xl'>State</p>
              <p>asdsdd</p>
            </div>
            <div>
              <button className='px-5 py-2 border bg-green-500'>View More</button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
