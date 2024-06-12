"use server";

import { LoginSchema, RegisterSchema, OtpSchema } from "@/schemas";
import * as z from "zod";
import { baseurl } from "@/utils";
import Calls from "./axios";

const $Http = Calls(baseurl);

const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Login Failed. Please check your email and password.",
    };
  }

  const { email, fullName, username, password, passwordConfirm, referralCode } =
    validatedFields.data;

  if (password !== passwordConfirm) {
    return {
      error: "Password and Confirm Password do not match.",
    };
  }

  const userdata = { email, fullName, username, password, referralCode };

  try {
    const res = await $Http.post("/user/signup", userdata);
    return {
      status: res.status,
      message: res.data.message,
      user: res.data.user,
    };
  } catch (e: any) {
    return {
      message: e?.response?.data.message,
      status: e?.response?.status,
    };
  }
};

const Otp = async (values: z.infer<typeof OtpSchema>, userId: string) => {
  const otp = values;

  const userdata = { otp, userId };

  try {
    const res = await $Http.post("/user/verify-otp", userdata);

    return {
      status: res.status,
      message: res.data.message,
    };
  } catch (e: any) {
    return {
      message: e?.response?.data.message,
      status: e?.response?.status,
    };
  }
};

export { Otp, register };