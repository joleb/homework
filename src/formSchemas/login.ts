import { z } from "zod";

import { defaultFormValue } from ".";

export const loginFormSchema = z.object({
  email: defaultFormValue.extend({
    value: z.string().min(1, "required").email("invalidEmail"),
  }),
  password: defaultFormValue,
});
