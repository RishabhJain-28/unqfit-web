import { atom } from "jotai";
import { UserResponseDto } from "../clientApi/.generated";

export const userAtom = atom<UserResponseDto | null>(null);
