
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [Search, setSearch] = useState('')
  const {setSelectedConversation} = useConversation()
  const{conversations}=useGetConversations()
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!Search) return;
    if(Search.length <3){
     return toast.error("Search must be at least 3 characters")
    }

    const conversation =conversations.find((c) => c.fullName.toLowerCase().includes(Search.toLowerCase()))

    if(conversation){ setSelectedConversation(conversation)
      setSearch('')
    }else{
      toast.error("No such User found!!")
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 " >
         <input type="text" placeholder="Search..." className="w-full input input-success rounded-full "
         value={Search}
         onChange={(e) => setSearch(e.target.value)}
         />
        <button type="submit" className="btn btn-circle bg-sky-500">
            <FaSearch className="w-6 h-6 outline-none" />
        </button>
    </form>
  )
}


export default SearchInput