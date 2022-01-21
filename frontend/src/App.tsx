import axios from 'axios';
import { useState } from 'react';

export function App() {
  const [userIP, setUserIP] = useState('');

  function getUserIP(): void {
    axios.get('https://ip-fast.com/api/ip/').then(({ data }) => setUserIP(data));
  }

  return (
    <>
      <header>
        <img src="./logo.svg" alt="Logo" />
      </header>

      <main className="container">
        <section>
          <label>
            Nome <input type="text" />
          </label>

          <article className="divided-input-container">
            <label>
              Profissão <input type="text" />
            </label>

            <label>
              Celular <input type="tel" />
            </label>
          </article>

          <article className="ip-input-container">
            <label>
              Meu IP <input type="text" value={userIP} disabled />
            </label>

            <button onClick={getUserIP}>Encontrar IP</button>
          </article>

          <footer className="button-container">
            <button>Salvar</button>

            <button>Limpar</button>
          </footer>
        </section>
      </main>
    </>
  );
}
