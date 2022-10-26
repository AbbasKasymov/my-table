import AdminContext from "./context/AdminContext";
import Navigation from "./Navigation";

function App() {
  return (
    <AdminContext>
      <Navigation />
    </AdminContext>
  );
}

export default App;
