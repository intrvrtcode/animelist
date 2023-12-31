const { default: Link } = require("next/link");
import InputSearch from "./InputSearch";
import UserAuthAction from "./UserAuthAction";

const Navbar = () => {
  return (
    <header>
      <div className="bg-color-accent flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link className="font-bold text-2xl" href='/'>NEXTanimelist</Link>
        <InputSearch />
        <UserAuthAction />
      </div>
    </header>
  )
}

export default Navbar;