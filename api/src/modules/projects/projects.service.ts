import { eq } from "drizzle-orm";
import db from "../../database/conn";
import { projectsTable } from "../../database/schema";
import { projectBaseDTO, projectCreateDTO } from "./projects.dto";

export default class ProjectsCRUD {
  
  public async listProjects(limit: number = 4, offset: number = 0): Promise<projectBaseDTO[]> {
    const query = await db.query.projectsTable
      .findMany({
        limit: limit,
        offset: offset
    });

    return query;
  }

  public async pickProject(id: number): Promise<projectBaseDTO | undefined> {
    const query = await db.query.projectsTable
      .findFirst({
        where: eq(projectsTable.id, id)
      });

    return query;
  }

  public async createProject(data: projectCreateDTO) {
    const query = await db.insert(projectsTable)
      .values(data);
    return query;
  }

  public async updateProject(id: number, data: Partial<projectCreateDTO>) {
    const query = await db.update(projectsTable)
      .set(data)
      .where(eq(projectsTable.id, id));

    return query;
  }

  public async deleteProject(id: number) {
    const query = await db.delete(projectsTable)
      .where(eq(projectsTable.id, id));

    return query;
  }
}
