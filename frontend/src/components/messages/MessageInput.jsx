import { useState } from "react"
import { BiSolidSend } from "react-icons/bi"
import useSendMessage from "../../hooks/useSendMessage"
const MessageInput = () => {
const [message, setMessage] = useState("")
const {loading,sendMessage}=useSendMessage()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!message) return;
    await sendMessage(message)
    setMessage("");
  }

  return (
    <form  className="px-4 my-3 " onSubmit={handleSubmit} >
        <div className="w-full relative ">
            <input type="text" 
                className="border rounded-xl text-sm rouned-lg block w-full p-2.5 bg-gray-800 border-gray-600 text-white"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-3">
                {loading ? <div className="loading loading-spinner"></div> : <BiSolidSend />}
            </button>
        </div>
    </form>
  )
}

export default MessageInput