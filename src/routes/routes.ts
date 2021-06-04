import getRoute from "./getRoute"
import createRoute from "./createRoute"

export default (app: any) => {
    {
        app.get("/", getRoute())
        app.post("/create", createRoute())
    }
}