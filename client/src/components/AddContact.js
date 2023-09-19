const AddContact = ({ innerRef }) => {

    const closeDialog = () => {
        innerRef.current.close();
    }
    return (
        <dialog ref={innerRef} className="bg-gray-600  w-[400px] rounded-lg absolute inset-0 ">

            <span className="text-white ml-4 cursor-pointer" onClick={closeDialog} > X</span >
            <form className="flex flex-col p-10">
                <input required className="p-2" placeholder="Enter Name" />
                <input required className="mt-4 p-2" placeholder="Enter Email" />
                <button className="mt-4 p-2 text-white bg-blue-500">Add Contact</button>
            </form>

        </dialog >
    );
}

export default AddContact;