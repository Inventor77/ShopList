import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { add, del } from "./actions/action"
import shortid from "shortid"
import Shops from "./shops"

const Main = () => {

    const sel = useSelector(state => state.map)
    const dis = useDispatch()

    const[name, setName] = useState('')
    const[area, setArea] = useState('')
    const[type, setType] = useState('')
    const[oDate, setODate] = useState('')
    const[cDate, setCDate] = useState('')
    const[id, setId] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        const obj = {
            Name: name,
            Area: area,
            Type: type,
            Opening_Date: oDate,
            Closing_Date: cDate,
            ID: shortid.generate()
        }
        // alert(JSON.stringify(obj))
        dis(add(obj))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
                <select onClick={e => setArea(e.target.value)}>
                    <option value=""></option>
                    <option value="Thane">Thane</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai Suburban">Mumbai Suburban</option>
                    <option value="Nashik">Nashik</option>
                    <option value="Nagpur">Nagpur</option>
                    <option value="Ahmednagar">Ahmednagar</option>
                    <option value="Solhapur">Solhapur</option>
                </select>
                <select onClick={e => setType(e.target.value)}>
                    <option value=""></option>
                    <option value="Grocery">Grocery</option>
                    <option value="Butcher">Butcher</option>
                    <option value="Baker">Baker</option>
                    <option value="Chemist">Chemist</option>
                    <option value="Stationary">Stationary</option>
                </select>
                Opening Date<input type="date" onChange={e => {
                    setODate(e.target.value)
                    setId(e.target.valueAsNumber)
                }}/>
                Closing Date<input type="date" onChange={e => setCDate(e.target.value)}/>
                <input type="submit" value="Submit"/>
            </form>
            {area} {type} 
            <div>
                <Shops />
            </div>
        </div>
    )
}

export default Main