import Parse from "parse"

export class Helper {

    public static CurrentUser(): Parse.User | undefined {
        return Parse.User.current();
    }

    public static LoggedIn(): boolean {
        return !!Helper.CurrentUser();
    }
}
