import { FaBell } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-2 sticky">
      <div className="flex items-center">
        <img
          className="w-[100px]"
          src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
        />
        <h1 className="text-white text-2xl">Youtube</h1>
      </div>
      <form className="bg-white rounded">
        <input type="text" className="px-4 py-1 rounded" />
        <button className="mr-2">
          <FiSearch className="text-black" />
        </button>
      </form>
      <FaBell className="mr-4" />
    </header>
  );
};

export default Header;
