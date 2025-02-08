import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:npg_7fBOXgD0RWxj@ep-long-haze-a4xdzy65-pooler.us-east-1.aws.neon.tech/cancer-detection?sslmode=require",
);
export const db = drizzle(sql, { schema });
