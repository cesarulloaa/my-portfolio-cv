

export default function Education() {
  return (
    <section className="py-20 bg-no-repeat bg-gradient-cover px-6 relative sm:px-6 lg:px-8" id="education">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-5xl font-bold mb-4">Educación</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white shadow-lg rounded-2xl p-15 text-center hover:shadow-primary  transition">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-book ml-26"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /><path d="M3 6l0 13" /><path d="M12 6l0 13" /><path d="M21 6l0 13" /></svg>
            <h4 className="text-xl align-center text-center font-semibold mt-4 mb-2">
              Ingeniería de Sistemas
            </h4>
            <p className="text-gray-600">Universidad O&amp;M</p>
          </div>


          <div className="bg-white shadow-lg rounded-2xl p-15 text-center hover:shadow-primary transition">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-device-desktop-code ml-26"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" /><path d="M7 20h4" /><path d="M9 16v4" /><path d="M20 21l2 -2l-2 -2" /><path d="M17 17l-2 2l2 2" /></svg>
            <h4 className="text-xl  font-semibold mb-2 mt-5">
              Full Stack Development
            </h4>
            <p className="text-gray-600">Udemy – React &amp; ASP.NET</p>
          </div>


          <div className="bg-white shadow-lg rounded-2xl  text-center p-15 hover:shadow-primary transition">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-device-desktop-code ml-26"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" /><path d="M7 20h4" /><path d="M9 16v4" /><path d="M20 21l2 -2l-2 -2" /><path d="M17 17l-2 2l2 2" /></svg>
            <h4 className="text-xl font-semibold mb-2 mt-5">Desarrollo web con Java </h4>
            <p className="text-gray-600">Udemy – Java 106 Hours</p>
          </div>
        </div>
      </div>


    </section>
  );
}
