export function App() {
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
              Meu IP <input type="text" disabled />
            </label>

            <button>Encontrar IP</button>
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
