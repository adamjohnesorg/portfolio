import Header from './components/Header'
import NavBar from './components/NavBar'
import ContentBody from './components/ContentBody'

const App = () => 
{
  return (
    <div id='container'
         className=' flex flex-col items-center min-w-full p-3 bg-gradient-to-r
                   from-gray-950 via-zinc-800 to-gray-950'>
      <div className='border-header rotate-180 -mr-40 fadeInElement'></div>
      <Header />
      <div className='border-header fadeInElement'></div>
      <NavBar />
      <main>
        <ContentBody />
      </main>
    </div>
  )
}

export default App;