const Features = () => {
    return (
<section className="bg-light-blue">

<div className="flex flex-col items-center md:flex-row space-y-8 ml-60 py-10">
<img className="object-cover w-full rounded-t-lg md:h-auto md:w-80 bg-white md:rounded-none mr-40" src="/the-Pomodoro-Technique-3.png" alt="" />
<div className="flex flex-col justify-between p-20 leading-normal">
<h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">Pomodoro</h5>
<p className="mb-3 font-normal dark:text-gray-400">Something about how Pomodoro is great</p>
<button type="button" className="focus:outline-none text-white bg-orange hover:bg-dark-orange focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Find Out More</button>
</div>
</div>

<div className="flex flex-col items-center bg-dark-blue md:flex-row-reverse space-y-8 py-10 pr-20">
<img className="object-cover w-full rounded-t-lg md:h-auto md:w-80 bg-white md:rounded-none ml-60 mr-20" src="/download.png" alt="" />
<div className="flex flex-col justify-between p-20 leading-normal">
<h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">Kanban</h5>
<p className="mb-3 font-normal dark:text-gray-400">Something about how Kanban is great</p>
<button type="button" className="focus:outline-none text-white bg-orange hover:bg-dark-orange focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Find Out More</button>
</div>
</div>

<div className="flex flex-col items-center md:flex-row space-y-8 ml-60 py-10">
<img className="object-cover w-full rounded-t-lg md:h-auto md:w-80 bg-white md:rounded-none mr-40" src="/kanban color code.webp" alt="" />
<div className="flex flex-col justify-between p-20 leading-normal">
<h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">To-Do</h5>
<p className="mb-3 font-normal dark:text-gray-400">Something about how To-Do is great</p>
<button type="button" className="focus:outline-none text-white bg-orange hover:bg-dark-orange focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Find Out More</button>
</div>
</div>
</section>
    );
};

export default Features;