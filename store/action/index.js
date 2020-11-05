

const setData  = (data) =>{
    return (dispatch)=>{
           
        dispatch(
            { 

                type : "setData",
                data : data
                   
            }
        )


    }
}

export {
    setData
}