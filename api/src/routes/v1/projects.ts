import { router } from "../../common/_settings";
import ProjectsController from "../../modules/projects/projects.controller";

export default class ProjectRoutes {
  protected projectsController = new ProjectsController()
  public allProjects = router.get("/",
    (req, res) =>
      this.projectsController.listProjects(req, res)
    )
  public oneProject = router.get("/:id",
      (req, res) => 
      this.projectsController.pickProject(req, res)
    )
  public createProject = router.post("/",
    (req, res) =>
      this.projectsController.createProject(req, res)
    )
  public updateProject = router.put("/:id",
    (req, res) =>
      this.projectsController.updateProject(req, res)
    )
  public deleteProject = router.delete("/:id",
    (req, res) =>
      this.projectsController.deleteProject(req, res)
    )
}
