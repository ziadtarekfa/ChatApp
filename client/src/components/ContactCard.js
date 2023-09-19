import avatarImage from '../assets/avatar.svg';
const ContactCard = ({ name }) => {
    return (
        <div className="flex items-center mt-6 cursor-pointer">
            <img src={avatarImage} width="50px" alt='profile' />
            <h1 className="text-xl font-semibold ml-4">{name}</h1>
        </div>
    );
}

export default ContactCard;