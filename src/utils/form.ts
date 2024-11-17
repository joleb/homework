import React from "react";

import { z } from "zod";

import { defaultFormValue } from "../formSchemas";

type FormValue = z.infer<typeof defaultFormValue>;

export const setFormValue =
  <T extends Record<string, FormValue>>(
    key: keyof T,
    dispatch: React.Dispatch<React.SetStateAction<T>>,
  ) =>
  (value: string) => {
    dispatch((prev) => ({
      ...prev,
      [key]: {
        value,
        error: "",
      },
    }));
  };

export const setErrorMessage = <T extends Record<string, FormValue>>(
  key: keyof T,
  dispatch: React.Dispatch<React.SetStateAction<T>>,
  error: string,
) => {
  dispatch((prev) => ({
    ...prev,
    [key]: {
      ...prev[key],
      error,
    },
  }));
};

export const validateForm = <T extends z.ZodRawShape>(
  schema: z.ZodObject<T>,
  values: z.infer<z.ZodObject<T>>,
  dispatch: React.Dispatch<React.SetStateAction<Record<keyof T, FormValue>>>,
): { success: boolean; values: z.infer<z.ZodObject<T>> } => {
  const validationResult = schema.safeParse(values);
  console.log(values, JSON.stringify(validationResult));
  if (!validationResult.success) {
    validationResult.error.errors.forEach((error) => {
      setErrorMessage(error.path[0] as string, dispatch, error.message);
    });
  }
  return { success: !!validationResult.success, values };
};
