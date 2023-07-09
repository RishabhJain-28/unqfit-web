import React from "react";
import { VerifyEmailResponseDto } from "../../../clientApi/.generated";
import ClosePageIn from "../../../components/ClosePageIn";

const verifyEmail = async ({
  email,
  token,
}: {
  email: string;
  token: string;
}) => {
  //!change if api is added to backend
  const res = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/auth/verifyEmail?email=${email}&token=${token}`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());
  // console.log(res);
  return res as VerifyEmailResponseDto;
};

export default async function EmailVerified({
  searchParams: { email, token },
}: {
  searchParams: { email: string; token: string };
}) {
  const data = await verifyEmail({
    email,
    token,
  });
  // console.log(data);
  return (
    <div
      className={`text-2xl  m-10 ${
        data?.isVerified ? "text-primrary" : "text-red-500"
      }`}
    >
      {data.message}
      <ClosePageIn timeInSeconds={5} />
    </div>
  );
}
