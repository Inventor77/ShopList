const initialState = []

const map = (state = initialState, action) => {
    switch (action.type) {
        case "ADD": {
            state = [...state, action.payload]
            return state
        }
        case "DEL": {
            state = state.filter(obj => obj.ID !== action.payload)
            return state
        }
        default: return state
    }
}

export default map