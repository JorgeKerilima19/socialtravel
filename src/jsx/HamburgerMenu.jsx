import "../index.css";

export default function HamburgerMenu({isOpen, setOpen}) {
  let toggleOpen = isOpen ? "open" : "";
  return (
    <div className={`hamburger-btn ${toggleOpen}`} onClick={setOpen} >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
}
