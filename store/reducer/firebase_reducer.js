const INITIAL_STATE = {
   task1:"Chat App",
   task2 : ["some text"]
}

export default (state = INITIAL_STATE , action) => {
    console.log("action",action.data)
    switch (action.type){
        case "setData":
            return {
                ...state,
                 task2 : [...state.task2, action.data ]
            }
        default:
            return state

    }

}