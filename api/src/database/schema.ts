import { sqliteTable, int, text, SQLiteTimestamp } from "drizzle-orm/sqlite-core";

export const projectsTable = sqliteTable("projects", {
  id: int('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  description: text('description').notNull(),
  solvedProblem: text('solvedProblem').notNull(),
  githubUrl: text('githubUrl').notNull(),
  previewUrl: text('previewUrl')
});

export const stacksTable = sqliteTable("stack", {
  id: int('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  projectId: int('projectId').notNull().references(() => projectsTable.id)
});
