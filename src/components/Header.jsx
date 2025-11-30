import ToDo_Icon from "../assets/list.png";

function Header() {
  return (
        <h1 className="flex m-2  gap-3 text-3xl">To-Do App <img src={ToDo_Icon} alt="icon" width={"45px"} /></h1>
  );
}

export default Header;