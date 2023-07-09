import { AxiosError } from "axios";
import { useAtom } from "jotai/react";
import { API } from "../../clientApi";
import {
  AuthDto,
  SignupDto,
  UserResponseDto,
} from "../../clientApi/.generated";
import { userAtom } from "../user";

export const useAuth = (init?: UserResponseDto) => {
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
  const signUp = async (dto: SignupDto) => {
    try {
      const data = await API.authControllerSignup(dto).then((res) => res.data);
      setUser(data);
      return data;
    } catch (_err) {
      const error = _err as AxiosError<{ message: string }>;
      console.log(error.response?.data?.message);
      //!  if server is down alert
      if (error.response?.data?.message)
        throw Error(error.response?.data?.message);
    }
  };

  const signOut = async () => {
    console.log("here");
    const res = await API.authControllerSignout().then((res) => res.data);
    setUser(null);
    return res;
  };

  return {
    user,
    signIn,
    fetchUser,
    signOut,
    signUp,
  };
};
