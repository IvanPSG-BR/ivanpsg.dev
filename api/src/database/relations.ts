// TODO: Helper para simplificar sintaxe de relacionamentos Drizzle ORM
import { relations } from "drizzle-orm";
import { projectsTable, stacksTable } from "./schema";

export const projectsRelations = relations(projectsTable, ({ many }) => ({
  stacks: many(stacksTable)
}));

export const stacksRelations = relations(stacksTable, ({ one }) => ({
  projects: one(projectsTable, {
    fields: [stacksTable.projectId],
    references: [projectsTable.id]
  })
}));
