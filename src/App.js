import './App.css';

function App() {
  return (
    <div className="wrapper">
      <header>
        English Dictionary
      </header>
      <div className="search">
        <input type="text" placeholder="Search For A Word" required />
        <i className="fas fa-search"></i>
        <span className="material-icons">
        </span>
      </div>
      <ul>
        <li className="word">
          <div className="details">
            <p>Happy</p>
            <span>adjective /'hapi'/</span>
          </div>
          <i className="fas fa-volume-up"></i>
        </li>
        <div className="content">
          <li className="meaning">
            <div className="details">
              <p>Meaning</p>
              <span>feeling or showing pleasure or contentment</span>
            </div>
          </li>
        </div>

        <li className="example">
          <div className="details">
            <p>Example</p>
            <span>Maheen is looking happy and exicted.</span>
          </div>
        </li>

        <li className="synonyms">
          <div className="details">
            <p>Synonyms</p>
            <div className="list">
              <span>glad,</span>
              <span>contented,</span>
              <span>delightful,</span>
              <span>cheerful,</span>
              <span>joyful</span>

            </div>
          </div>
        </li>
      </ul>
    </div >
  );
}

export default App;
