import ex from "express";
import { health } from "./routes/v1/health";
import ProjectRoutes from "./routes/v1/projects"
import settings from "./common/_settings";

const app = ex();
const projectRoutes = new ProjectRoutes()

app.use('/health', health);

app.use(`/${settings.apiVersion}/projects`, projectRoutes.allProjects)
app.use(`/${settings.apiVersion}/projects`, projectRoutes.oneProject)
app.use(`/${settings.apiVersion}/projects`, projectRoutes.createProject)
app.use(`/${settings.apiVersion}/projects`, projectRoutes.updateProject)
app.use(`/${settings.apiVersion}/projects`, projectRoutes.deleteProject)

app.listen(settings.port, () => {
  console.log("API rodando na URL " + settings.root);
})
