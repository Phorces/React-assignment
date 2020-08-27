// Navbar component 
function NavBar() {
  return (
  
      <nav className="nav">
          <div className="navdiv">
              <a href="#">HULK</a>
          </div>
          <div className="mav">
              <a href="#" className="mavy">MAVEL</a>
          </div>
          <div className="navdiv">
              <a href="#">VENOM</a>
          </div>
      </nav>    
  
  )
};

ReactDOM.render(<NavBar/>, document.getElementById("header"));


// Text component
function Maintext() {
  return (
    <div className="text">
      <h1 className="title">Mavel's Fearless</h1>
      <p className="sub">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
        blanditiis enim aliquid,
      </p>
      <div className="search">
        <input type="search" placeholder="Search here ..." />
      </div>
    </div>
  );
}

ReactDOM.render(<Maintext />, document.getElementById("textarea"));


// Wallpapers component
const images = [
  { id: 1, pic: "img/venom-1.jpg" },
  { id: 2, pic: "img/hulk-1.jpg" },
  { id: 3, pic: "img/venom-2.jpg" },
];

function Mavel(props) {

  return (
      <div className="avengers">
        <img src={props.pic} />
      </div>
  );
}

let mavelpage = images.map((item) => <Mavel key={item.id} pic={item.pic} />);
ReactDOM.render(
  <React.StrictMode>{mavelpage}</React.StrictMode>,
  document.getElementById("wallpapers")
);
