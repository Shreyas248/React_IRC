import Nav from "./Components/Nav";
// import Footer from "./Components/Footer";
import './Assets/Css/Nav.css';
import "./Components/home";
import './Assets/Css/home.css';
function App(){
  return(
    <div>
      <Nav/>
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React Home Page</h1>
        <p>This is a basic home page in React.</p>
      </header>
      <main>
        <section>
          <h2>React</h2>
          <p>React (also known as React. js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
</p>
        </section>
        <section>
          <h2>Features</h2>
          <p>Highlight some key features of your website, product, or service in this section.</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Provide contact information or a contact form in this section.</p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} My React App</p>
      </footer>
    </div>

export default Home;
    </div>
  )
}
export default App;