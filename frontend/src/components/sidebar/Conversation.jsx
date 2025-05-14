const Conversation = () => {
  return (
   <>
  <div className="flex items-center gap-2 hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
    <div className="avatar online">
        <div className="w-12 rounded-full">
            <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png" 
            alt="user avatar" />
        </div>
    </div>
    <div className="flex flex-col flex-1">
        <div className="flex justify-between gap-3">
            <p className="font-bold text-gray-200">Mayank Rana</p> 
            <span className="text-xl">😎</span>
        </div>
    </div>
  </div>  

  <div className="divider my-0 py-0 h-1"/>
   
   </>
  )
}

export default Conversation