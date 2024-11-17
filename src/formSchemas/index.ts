import { z } from "zod";

export const defaultFormValue = z.object({
  value: z
    .string()
    .min(1, "required")
    .transform((val) => val.trim()),
  error: z
    .string()
    .optional()
    .transform((val) => val?.trim()),
});
