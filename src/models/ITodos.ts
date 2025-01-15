import {Itodo} from "./IUser.ts";

export interface ITodos {
	id: number;
	todo: Itodo;
	completed: boolean;
	userId: number;
}