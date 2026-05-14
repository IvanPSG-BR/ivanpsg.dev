import type { Request, Response } from "express";
import ProjectsCRUD from "./projects.service";
import { projectCreateDTO, projectUpdateDTO } from "./projects.dto";

export default class ProjectsController {
  protected projectsService = new ProjectsCRUD;
  
  public async listProjects(req: Request, res: Response) {
    return res.status(200).send(this.projectsService.listProjects())
  }

  public async pickProject(req: Request, res: Response) {
    const id = req.params.id;
    return res.status(200).send(this.projectsService.pickProject(Number(id)))
  }

  public async createProject(req: Request, res: Response) {
    const data : projectCreateDTO = req.body;
    return res.status(201).send(this.projectsService.createProject(data))
  }

  public async updateProject(req: Request, res: Response) {
    const id = req.params.id;
    const data : projectUpdateDTO = req.body;
    return res.status(200).send(this.projectsService.updateProject(Number(id), data))
  }

  public async deleteProject(req: Request, res: Response) {
    const id = req.params.id;
    return res.status(200).send(this.projectsService.deleteProject(Number(id)))
  }
}
