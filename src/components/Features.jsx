const Features = () => {
  return (
    <>
      {/* Pomodoro */}
      <section className="bg-light-blue flex flex-col justify-center items-center p-5">
        <div className="flex flex-col justify-center items-center p-8 mt-4  gap-4 md:flex-row md:justify-around md: p-12  ">
          <img
            className="object-cover w-[50%] mb-2 md:h-auto md:w-[40%] lg:w-[30%] bg-white md:mr-4 "
            src="/the-Pomodoro-Technique-3.png"
            alt="Pomodoro Technique Explain"
          />
          <div className="flex flex-col justify-between items-start leading-normal">
            <h5 className="mb-2 text-2xl font-bold text-center tracking-tight dark:text-white">
              Pomodoro
            </h5>
            <p className="mb-3 font-normal dark:text-gray-400">
              Something about how Pomodoro is great
            </p>
            <button
              type="button"
              className="focus:outline-none text-white bg-orange hover:bg-dark-orange focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 self-center md:self-start"
            >
              Find Out More
            </button>
          </div>
        </div>
        {/* Kanban */}
      </section>
      <section className="bg-dark-blue flex flex-col justify-center items-center p-5">
        <div className="flex flex-col justify-center items-center p-8  gap-4 mt-8 md:flex-row-reverse md:justify-around  md: p-12 ">
          <img
            className="object-cover w-[45%]  mb-2  md:h-auto md:w-[40%] lg:w-[55%] bg-white"
            src="/download.png"
            alt="Kanban is great"
          />
          <div className="flex flex-col justify-between  leading-normal">
            <h5 className="my-4 text-2xl font-bold tracking-tight dark:text-white">
              Kanban
            </h5>
            <p className="mb-3 font-normal dark:text-gray-400">
              Something about how Kanban is great
            </p>
            <button
              type="button"
              className="focus:outline-none text-white bg-orange hover:bg-dark-orange focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-4 dark:focus:ring-yellow-900 self-center md:self-start"
            >
              Find Out More
            </button>
          </div>
        </div>
      </section>

      {/* ToDo */}

      <section className="bg-light-blue flex flex-col justify-center items-center p-5">
        <div className="flex flex-col items-center md:flex-row md:justify-around md: p-12">
          <img
            className="object-cover w-[50%] mt-4 md:h-auto md:w-[40%] lg:w-[30%] bg-white  "
            src="/kanban color code.webp"
            alt="Kanban Explanation"
          />
          <div className="flex flex-col justify-between  leading-normal">
            <h5 className="my-4 text-2xl font-bold tracking-tight dark:text-white">
              To-Do
            </h5>
            <p className="mb-3 font-normal dark:text-gray-400">
              Something about how To-Do is great
            </p>
            <button
              type="button"
              className="focus:outline-none text-white bg-orange hover:bg-dark-orange focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 self-center md:self-start"
            >
              Find Out More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
