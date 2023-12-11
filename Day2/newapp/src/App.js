import './Assets/Css/style.css'
function App(){
    return(
        <div>
             <form className="container">
        <h1>Registration Form</h1>
    <input type="text" name="" id="username" placeholder="Name" className="uname" />
    <input type="password" name="" id="Password" placeholder="Password" className="paa" />
    <button className="butt" onclick="show()">Login</button>
    </form>
        </div>
    )
}
export default App