
import './App.css';
//t1
function Hello(){
  return<h3>Hello..!</h3>
}

//t2
function Welcome(){
  return<h3>Welcome to react class</h3>
}
//t3
function Head({msg}){
  return <h2>{msg}</h2>;
}
//t4
function TwoElements(){
  return(
    <div>
      <p>1st element</p>
      <p>2nd element</p>
    </div>
  )
}
//t5
function Display(){
  return(
    <p>My name is user</p>
  )
}
//t6
function Greet(){
  const name=" user";
  return(
    <h3>Hello {name}</h3>
  );
}
//t7
function Add(){
  return(
    <h3>{10+20}</h3>
  )
}
//t8
function Admin(){
  const isAdmin=true;
  return(
    <h3>Admin User</h3>
  );
}
//t9&t16
function DisplayName({name}){
  return<p>User:{name}</p>
}
//t10
function Twoprops({name,age}){
  return<p>User:{name} Age:{age}</p>
}
//t11
function Title({title}){
  return <h1>{title}</h1>
}
//t12
function Button({ label }) {
  return <button>{label}</button>;
}
//t13
function LoginStatus({isLoggedIn}){
  return(
    <h3>{isLoggedIn ? "Logged in" : "Logged out"}</h3>
  )
}
//t14
function Details({ name, email }) {
  return (
    <h3>
      Name: {name} | Email: {email}
    </h3>
  );
}
//t15
function Skills({ skills }) {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}
//t17
function Card({ title, description }) {
  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
//t18
function ChildOne({ message }) {
  return <p>Child One: {message}</p>;
}

function ChildTwo({ message }) {
  return <p>Child Two: {message}</p>;
}

function Parent() {
  const msg = "Hello from Parent";

  return (
    <div>
      <ChildOne message={msg} />
      <ChildTwo message={msg} />
    </div>
  );

}

//T19
function Child({ onButtonClick }) {
  return (
    <button onClick={onButtonClick}>
      Click Me
    </button>
  );
}

function PaR() {
  function handleClick() {
    alert("Button clicked from Child!");
  }

  return <Child onButtonClick={handleClick} />;
}
//t20
function Header({ text }) {
  return <h1>{text}</h1>;
}
function Content({ text }) {
  return <p>{text}</p>;
}
function Footer({ text }) {
  return <footer>{text}</footer>;
}









function App(){
   const message = "Data passed from App";
  return(
    <div>
      
      <Hello/>
      <Welcome/>
      <Head msg="helloo from seraa"/>
      <TwoElements/>
      <Display/>
      <Greet/>
      <Add/>
      <Admin/>
      <DisplayName name="Sera"/>
      <DisplayName name="den"/>
      <DisplayName name="jade"/>
      <Twoprops name="Sera" age={21}/>
      <Title title="React Js"/>
      <Button label="Login" />
      <Button label="Submit" />
      <LoginStatus isLoggedIn={true} />
      <LoginStatus isLoggedIn={false} />
      <Details name="sera" email="sera@gmail.com"/>
      <Skills skills={["HTML", "CSS", "JavaScript", "React"]} />
      <Card title="React" description="UI Library" />
      <Card title="JavaScript" description="Programming Language" />
      <Card title="HTML" description="Markup Language" />
      <Parent/>
      <PaR/>
      <Header text={message} />
      <Content text={message} />
      <Footer text={message} />

      
    </div>
  )
}




export default App;