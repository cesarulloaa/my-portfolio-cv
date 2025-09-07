import CoverParticles from "../components/cover-particules";



export default function Home() {
  return (
    <div className="min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
      <h1 className="text-4xl font-bold text-center pt-10">Welcome to My Portfolio</h1>
      <p className="text-center text-lg">This is the home page of my portfolio website.</p>
      <CoverParticles />
    </div>
  )
}
