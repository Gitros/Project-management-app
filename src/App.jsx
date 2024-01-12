import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjecId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjecId: null,

      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      }

      return {
        ...prevState,
        selectedProjecId: undefined,
        projects: [...prevState.projects, newProject]
      }
    });
  }

  let content;

  if (projectsState.selectedProjecId === null) {
    content = <NewProject onAdd={handleAddProject} />
  } else if (projectsState.selectedProjecId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
