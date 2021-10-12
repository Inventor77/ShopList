const add = (obj) => {
    return {
        type: "ADD",
        payload: obj
    }
}

const del = (id) => {
    return {
        type: "DEL",
        payload: id
    }
}

const find = (obj) => {
    return {
        type: "SEARCH",
        payload: {
            str: obj.string,
            arr: obj.arr
        }
    }
}

export { add, del, find }