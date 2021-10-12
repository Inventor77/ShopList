import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { del, find } from "./actions/action"

const Shops = () => {

    let sel = useSelector(state => state.map)
    const dis = useDispatch()
    const[cur, setCur] = useState([])

    useEffect(() => {
        setCur(sel)
    }, [sel])

    const handleSearch = string => {
        let arr = []
        arr = sel.filter(obj => obj.Name.includes(string))
        setCur(arr)
    }

    return (
        <div>
            <form>
                <input onChange={e => handleSearch(e.target.value)} type="text" placeholder="Search"/>
            </form>
            {cur.map(obj => {
                return (
                    <div key={obj.ID}>
                        <h1>{obj.Name}</h1>
                        <h3>{obj.Area}</h3>
                        <h3>{obj.Type}</h3>
                        <h3>From {obj.Opening_Date} to {obj.Closing_Date}</h3>
                        <button onClick={() => dis(del(obj.ID))}>Remove</button>
                        {/* <button onClick={() => setEdit(!edit)}>Edit</button> */}
                    </div>
                )
            })}
        </div>
    )
}

export default Shops