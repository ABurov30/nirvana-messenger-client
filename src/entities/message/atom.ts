import { atom } from "jotai";
import { Message } from "./types";

export const messages = atom<Message[]>([])

