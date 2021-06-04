import getRoute from "./getRoute"
import createRoute from "./createRoute"
import updateRoute from "./updateRoute"

export default (app: any) => {
    {
        app.get("/", getRoute())
        app.post("/create", createRoute())
        app.put("/update", updateRoute())
    }
}