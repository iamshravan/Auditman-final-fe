import logo from './logo.svg';
import './App.css';
import { Button } from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header >
      <div class="container">
<div class="logo">
<img src="auditlogo.jpeg" alt="auditmanlogo"/>
  </div>

</div>
<hr />
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Audit Now</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Learn How</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Sign-out</a>
  </li>
</ul>
<div class="alert alert-primary" role="alert">
 The Version is Currently running under test !!
</div>
<button class="button-54" role="button">Upload File</button>
<input class="ab" type="text"></input>
      </header>
    </div>
  );
}

export default App;
