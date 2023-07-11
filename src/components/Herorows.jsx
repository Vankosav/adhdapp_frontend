
import { Link } from "react-router-dom";

const HeroRows = () => {
    return (
      <section className="bg-dark-blue flex items-center flex-col text-center">
      <h2 className="text-2xl font-bold py-7">
      Unlocking the Power of Efficient Time Management 
      </h2>
      <p className="pb-10 w-6/12 ">
      Efficiently managing time involves strategizing and arranging the allocation of 
      one's time across various tasks and responsibilities. Mastering this skill allows for working prudently 
      rather than excessively, resulting in increased productivity even 
      when faced with limited time and heightened pressures.</p>

      <div className="flex flex-col md:flex-row items-center pb-8 space-x-4">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
        <img className="w-full mb-4" src="" alt="" />
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Planning
          </h3>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          nameOfTheApp is designed for improving time management skills for individuals 
          and assisting teachers in supporting students with ADHD characteristics.
          </p>
          </div>
          <Link to="/">
          <button type="button" className="focus:outline-none text-white bg-orange hover:bg-dark-orange focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Learn More</button>
        </Link>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
        <img className="w-full mb-4" src="" alt="" />
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Prioritization
          </h3>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          nameOfTheApp is designed for improving time management skills for individuals 
          and assisting teachers in supporting students with ADHD characteristics.
          </p>
          </div>
          <Link to="/">
          <button type="button" className="focus:outline-none text-white bg-orange hover:bg-dark-orange focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Learn More</button>
        </Link>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
        <img className="w-full mb-4" src="" alt="" />
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
           Productivity
          </h3>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          nameOfTheApp is designed for improving time management skills for individuals 
          and assisting teachers in supporting students with ADHD characteristics.
          </p>
          </div>
          <Link to="/">
          <button type="button" className="focus:outline-none text-white bg-orange hover:bg-dark-orange focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Learn More</button>
        </Link>
        </div>
       </div>
      </section>
  
     
      
    );
  };
  
  export default HeroRows;
  