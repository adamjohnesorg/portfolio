import Header from "./components/Header";

const App = () => 
{
  return (
    <div id="container"
         className=' flex flex-col items-center min-w-full p-3 bg-gradient-to-r
                   from-gray-950 via-zinc-800 to-gray-950'>
      <Header />
    </div>
  )
}

export default App;