import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"


const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:-h-[550px] rounded-lg overflow-hidden bg-brown-600 bg bg-clip-padding
    backdrop-filter  backdrop-blur-3xl bg-opacity-80 border-green-700">
      <Sidebar /> 
      <MessageContainer />

    </div>
  )
}


export default Home