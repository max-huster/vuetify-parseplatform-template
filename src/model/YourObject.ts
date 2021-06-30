import Parse from "parse";
import {ParseVueObject} from "@/ParseVueObject";

export class YourObject extends ParseVueObject {
    constructor() {
        super("YourObject");
    }

    attribute1?: Parse.User;
    attribute2?: Date;
    attribute3?: string;
}
