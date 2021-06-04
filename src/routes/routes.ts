import getRoute from "./getRoute"

export default (app: any) => {
    {
        app.get("/", getRoute())
    }
}