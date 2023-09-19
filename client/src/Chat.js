import avatarImage from './assets/avatar.svg';
const Chat = ({ name }) => {
    return (
        <div className="p-12  pr-16  w-full">
            <h1 className="font-semibold text-lg">Ahmed Aly</h1>
            <div className="messages-list flex flex-col overflow-y-scroll h-[560px] mt-4">
                <div className="flex items-start">
                    <img src={avatarImage} width="50px" alt='profile' />
                    <div className='bg-[#E1ECE1] p-2 rounded-r-3xl rounded-bl-3xl w-96 ml-4'>
                        <p>Esse é um exemplo de texto dentro de uma bolha de texto. :)</p>
                    </div>
                </div>
                <div className="flex items-start justify-end mt-4">
                    <div className=' bg-[#E1ECE1] p-2 rounded-l-3xl rounded-br-3xl w-96 mr-4 '>
                        <p>Esse é um exemplo de texto dentro de uma bolha de texto. :)</p>
                    </div>
                    <img src={avatarImage} width="50px" alt='profile' />
                </div>
            </div>
            <input placeholder="Type a message" className="bg-[#E1ECE1] rounded-3xl w-[700px] p-4 py-3 mt-6 absolute bottom-8" />
        </div>
    );
}

export default Chat;