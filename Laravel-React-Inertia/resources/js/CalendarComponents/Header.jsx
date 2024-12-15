import {
    CalendarDaysIcon,
    UserCircleIcon,
    BookOpenIcon,
} from "@heroicons/react/24/outline";
import headerIcon from "./Icons/headerIcon.svg";

const Header = () => {
    return (
        <header className="text-gray-600 body-font border-solid border-b-2 border-gray-400 mb-5">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={headerIcon} alt="" className="w-20 h-auto" />
                    <span className="ml-3 text-xl">Discalendar</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center md:pl-10">
                    <a className="mr-5 hover:text-gray-900 flex">
                        <BookOpenIcon className="w-7 h-auto" />
                        This Site
                    </a>
                    <a className="mr-5 hover:text-gray-900 flex">
                        <CalendarDaysIcon className="w-7 h-auto" />
                        calender
                    </a>
                    <a className="mr-5 hover:text-gray-900 flex">
                        <UserCircleIcon className="w-7 h-auto" />
                        dashbord
                    </a>
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    login
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};
export default Header;
