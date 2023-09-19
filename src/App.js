import Video from "./components/video"
function App()
{
  const getdata=(data)=>
  {
    console.log("apple",data)
    
  }
  return (
    <>
  <Video onSubmit={getdata}/>
  </>
  )
}
export default App