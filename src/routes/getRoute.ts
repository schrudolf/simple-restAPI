export default () => {
    return function(req: any,res: any,next: any){
        res.json({
            welcome: "Hello world"}
            )
    }
}