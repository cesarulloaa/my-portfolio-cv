


export default function Navbar() {

  

  return (
    <nav className="bg-primary text-foreground p-6">
      <div className="flex items-center justify-between">
        <div className="logo font-bold text-lg ml-10">
          Cesar Ulloa
        </div>
        <div className="">
          <ul className="flex gap-8 mr-6">
            <li><a href="">About Me</a></li>
            <li><a href="">Education</a></li>
            <li><a href="">Technologies</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>

      </div>
    </nav>

  )
}
