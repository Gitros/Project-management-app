import NewProject from "./components/NewProject";
import Sidebar from "./components/ProjectsSidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <NewProject />
      <h1 className="my-8 text-center text-5xl font-bold">Learning React</h1>
    </main>
  );
}

export default App;
