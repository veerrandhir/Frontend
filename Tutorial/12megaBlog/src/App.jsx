import "./App.css";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL); // "123"
  // console.log(import.meta.env.DB_PASSWORD); // undefined
  return (
    <>
      <h1>Mega blog Project</h1>
    </>
  );
}

export default App;
