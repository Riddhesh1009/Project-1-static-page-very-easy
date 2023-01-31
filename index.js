// ReactDOM.render(<h1>Hello Everyone!!</h1>,document.getElementById("root"));

// ReactDOM.render(<ul><li>a</li><li>b</li><li>c</li><li>d</li></ul>,document.getElementById("root"))

// function Navbar() {
//   return (
//     // <nav>
//     // <h1>This is navbar!!</h1>

//     // </nav>
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           WELCOME
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Features
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Pricing
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link">About</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// function MainComp() {
//   return (
//     <div>
//       <h2>Fun Facts</h2>
//       <ol>
//         <li>lorem .....</li>
//         <li>lorem .....</li>
//         <li>lorem .....</li>
//         <li>lorem .....</li>
//       </ol>
//     </div>
//   );
// }

// const page=(
//     <div>
//     <Navbar />
//     <MainComp />
//     </div>
// )

// ReactDOM.render(
//   page,

//   document.getElementById("root")
// );

// const navb =(
//     <nav>
//         <h1>
//             Website
//         </h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contract</li>
//         </ul>

//     </nav>
// )

// ReactDOM.render(
//     navb,
//     document.getElementById("root")
// )

// const page1=(
//     <div>
//         <h1>Website</h1>
//         <ul>
//             <li>a</li>
//             <li>b</li>
//             <li>c</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(page1,document.getElementById("root"))
// // document.getElementById("root").append(JSON.stringify(page1))

function Logo() {
  return (
    <img src="logo.png" alt="Processing..." ></img>
  )
}

function Header() {
  return(
    <h1>Fun Facts About React</h1>
  ) 
}

function Text() {
  return (
    <ul>
      <li>Was first released on 2013.</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github.</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  )
}

const page = (
  <div>
    <Logo />
    <Header />
    <Text />
  </div>
)

ReactDOM.render(page, document.getElementById("root"));
