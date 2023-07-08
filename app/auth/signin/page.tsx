"use client";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Balancer } from "react-wrap-balancer";
import * as Yup from "yup";
import { useAuth } from "../../../atoms/hooks/useAuth";
import ButtonWithLoading from "../../../components/ButtonWithLoading";
import { FormInput } from "../../../components/Form/FormInput";
export default function Signin() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg rounded-lg border-2 border-primrary p-4">
        <h1 className="text-center sm:text-8xl  font-bold text-primrary text-3xl">
          <Balancer>Enter the world of fashion</Balancer>
        </h1>

        <div className="mb-0 mt-6  rounded-lg px-4 shadow-lg sm:px-6 lg:px-8 text-black">
          <p className="text-center text-lg font-medium">
            Sign in to your account
          </p>
          <SignInForm />
          <div className="w-full flex justify-between items-center text-center mt-10">
            <p className="text-center text-sm text-accent">
              No account?{" "}
              <Link className="underline" href="/auth/signup">
                Sign up.
              </Link>
            </p>
            <p className="text-center text-sm text-accent">
              <Link className="underline" href="/auth/forgot-password">
                Forgot password?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const SignInForm = () => {
  const router = useRouter();

  const [revealPassword, setRevealpassword] = useState(false);
  const { signIn } = useAuth();
  return (
    <Formik
      initialValues={{ email: "abc@gmail.com", password: "Abc@12345" }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required."),
        password: Yup.string().required("Pasword is required."),
      })}
      onSubmit={async (values, { setSubmitting, setStatus }) => {
        try {
          await signIn(values);
          setStatus(null);
          router.replace("/");
        } catch (err) {
          setStatus("Invalid credentials");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {(formik) => {
        return (
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <FormInput
              className="w-full rounded-lg p-4 text-sm  "
              placeholder="Enter email"
              name="email"
              type="text"
            />
            <div className="relative">
              <FormInput
                placeholder="Enter password"
                name="password"
                type={revealPassword ? "text" : "password"}
              />
              <span
                onMouseDown={() => {
                  setRevealpassword(true);
                }}
                onMouseUp={() => {
                  setRevealpassword(false);
                }}
                className="cursor-pointer right-0 absolute inset-y-0 grid place-content-center px-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
            <div className="m-2 text-sm error italic text-red-500">
              {formik.status}
            </div>
            <div className="flex justify-center pt-2 items-center w-full text-accent">
              <ButtonWithLoading
                gradiant={true}
                loading={formik.isSubmitting}
                type="submit"
              >
                Sign in
              </ButtonWithLoading>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};
