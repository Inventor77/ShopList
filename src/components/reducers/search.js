const initialState = []

const sea = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH": {
            state = [...action.payload.arr] 
            console.log(state)
            state = state.filter(obj => {
                console.log(obj.Name.includes(action.payload.str))
                return obj.Name.includes(action.payload.str)
            })
            console.log(state)
            return state
        }
        default: return state
    }
}

export default sea