import { AxiosError } from "axios";
import { useAtom } from "jotai/react";
import { API } from "../../clientApi";
import { AuthDto, UserResponseDto } from "../../clientApi/.generated";
import { userAtom } from "../user";

export const useAuth = (init?: UserResponseDto) => {
  // useHydrateAtoms([
  //   [
  //     userAtom,
  //     {
  //       name: "THis is my name ",
  //       role: "ADMIN",
  //       email: "sdas",
  //       id: 1,
  //     },
  //   ],
  // ]);

  const [user, setUser] = useAtom(userAtom);

  const fetchUser = async () => {
    const data = await API.userControllerGetMe().then((res) => res.data);
    setUser(data);
  };
  const signIn = async (authDto: AuthDto) => {
    try {
      const data = await API.authControllerSignin(authDto).then(
        (res) => res.data
      );
      setUser(data);
      return data;
    } catch (_err) {
      const error = _err as AxiosError<{ message: string }>;
      console.log(error.response?.data?.message);
      //!  if server is down alert
      if (error.response?.status === 401) throw Error("Invalid Credentials");
    }
  };

  // const signOut= ()=>{
  //     API.authControllerSignout()
  // }

  return {
    user,
    signIn,
    fetchUser,
  };
};
