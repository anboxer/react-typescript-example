import * as messages from "./messages";
import { KeyMap } from "..";

let fields = {}

const msgs: { [key: string]: KeyMap } = messages;

Object.keys(msgs).forEach((m: string) => {
    fields = {
        ...fields,
        ...msgs[m]
    }
})

export const message: KeyMap = {
    ...fields
};
