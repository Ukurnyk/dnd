import { z } from "zod";

const privateConfigSchema = z.object({
  VK_CLIENT_ID: z.string().optional(),
  VK_CLIENT_SECRET: z.string().optional(),
  YANDEX_CLIENT_ID: z.string().optional(),
  YANDEX_CLIENT_SECRET: z.string().optional(),
});

export const privateConfig = privateConfigSchema.parse(process.env);
