import Home from "./component/Home";
import Sidebar from "./component/Sidebar";
import { CategoryProvider } from "./context/CategoryProvider";
import { NavigationProvider } from "./context/NavigationProvider";
import { NotesProvider } from "./context/NotesProvider";

function App() {
  return (
    <NavigationProvider>
      <CategoryProvider>
        <NotesProvider>
          <main className="flex py-2">
            <Sidebar />
            <Home />
          </main>
        </NotesProvider>
      </CategoryProvider>
    </NavigationProvider>
  );
}

export default App;
