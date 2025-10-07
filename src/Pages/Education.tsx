

export default function Education() {
  return (
    <section className="min-h-[100vh] h-full bg-no-repeat bg-gradient-cover px-2 py-10 relative" id="education">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-30">
          <h3 className="text-5xl font-bold mb-4">Education</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white shadow-lg rounded-2xl p-15 text-center hover:shadow-primary  transition">
            <h4 className="text-xl flex align-center text-center font-semibold mb-2">
              Systems Engineering Student
            </h4>
            <p className="text-gray-600">Universidad O&amp;M</p>
          </div>


          <div className="bg-white shadow-lg rounded-2xl p-15 text-center hover:shadow-primary transition">
            <h4 className="text-xl  font-semibold mb-2">
              Full Stack Development
            </h4>
            <p className="text-gray-600">Udemy – React &amp; ASP.NET</p>
          </div>


          <div className="bg-white shadow-lg rounded-2xl  text-center p-15 hover:shadow-primary transition">
            <h4 className="text-xl font-semibold mb-2">Java Programming</h4>
            <p className="text-gray-600">Udemy – Java 106 Hours</p>
          </div>
        </div>
      </div>


    </section>
  );
}
