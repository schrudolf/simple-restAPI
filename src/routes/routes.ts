import getRoute from "./getRoute"
import createRoute from "./createRoute"
import updateRoute from "./updateRoute"
import deleteRoute from "./deleteRoute"

export default (app: any) => {
    {
        app.get("/", getRoute())
        app.post("/create", createRoute())
        app.put("/update", updateRoute())
        app.delete("/delete", deleteRoute())
    }
}