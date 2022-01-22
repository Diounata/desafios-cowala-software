import { useForm } from '../hooks/useForm';

export function App() {
  const { name, job, phoneNumber, userIP, updateState, getUserIP, saveUserData, resetUserData } = useForm();

  return (
    <>
      <header>
        <img src="./logo.svg" alt="Logo" title="Cowala Software" />
      </header>

      <main className="container">
        <section>
          <label>
            Nome <input type="text" value={name} onChange={e => updateState('name', e.target.value)} />
          </label>

          <article className="divided-input-container">
            <label>
              Profissão <input type="text" value={job} onChange={e => updateState('job', e.target.value)} />
            </label>

            <label>
              Celular
              <input
                type="tel"
                maxLength={15}
                value={phoneNumber}
                onChange={e => updateState('phoneNumber', e.target.value)}
              />
            </label>
          </article>

          <article className="ip-input-container">
            <label>
              Meu IP <input type="text" value={userIP} disabled />
            </label>

            <button onClick={getUserIP}>Encontrar IP</button>
          </article>

          <footer className="button-container">
            <button onClick={saveUserData}>Salvar</button>

            <button onClick={resetUserData}>Limpar</button>
          </footer>
        </section>
      </main>
    </>
  );
}
