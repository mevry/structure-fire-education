export default {
    debug: true,
    state:{
        "FirstVisit":true,
        "FirstName":"",
        "LastName":"",
        "School":"",
        "Teacher":"",
        "JeopardyScore":null,
        "DragDropScore":null,
        "MemoryPass":false
    },
    setFirst(firstName){
        this.state.FirstName = firstName
    },
    getFirst(){
        return this.state.FirstName
    }

}