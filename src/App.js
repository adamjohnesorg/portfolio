import Header from './components/Header'
import NavBar from './components/NavBar'
import ContentBody from './components/ContentBody'

const App = () => 
{
  return (
    <div id='container'
         className=' flex flex-col items-center min-w-full p-3 bg-gradient-to-r
                   from-slate-900 from-25% via-slate-800 via-50% to-slate-900
                     to-75%'>
      <Header />
      <NavBar />
      <main>
        <ContentBody />
      </main>
    </div>
  )
}

export default App;