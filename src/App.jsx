import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <a href="#">Gmail</a>
        <a href="#">Imagens</a>
        <span className="icon">☰</span>
        <div className="profile-icon">E</div>
      </header>

      <div className="app">
        <h1 className="logo">Google</h1>
        <input
          type="text"
          className="search-input"
          placeholder="Pesquise no Google ou digite uma URL"
        />
        <div className="buttons">
          <button>Pesquisa Google</button>
          <button>Estou com sorte</button>
        </div>
      </div>
    </div>
  )
}

export default App
