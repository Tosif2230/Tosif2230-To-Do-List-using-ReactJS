import ToDo_Icon from "../assets/list.png";

function Header() {
  return (
      <div className="flex gap-2 m-2 text-3xl">
        <h1>To-Do App </h1>
        <img src={ToDo_Icon} alt="icon" width={"45px"} />
      </div>
  );
}

export default Header;
