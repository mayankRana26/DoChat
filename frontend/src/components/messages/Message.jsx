const Message = () => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt=" tailwind CSS chat bubble component"
                        src={"https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png"}
                    />
                </div>
            </div>

            <div className={`chat-bubble text-white bg-blue-500`}>Hello! what is going on?</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">9:30</div>
        </div>


    )
}

export default Message