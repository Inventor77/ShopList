import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { del } from "./actions/action";

const Shops = () => {
	let sel = useSelector((state) => state.map);
	const dis = useDispatch();
	const [cur, setCur] = useState([]);

	useEffect(() => {
		setCur(sel);
	}, [sel]);

	const handleSearch = (string) => {
		let arr = [];
		arr = sel.filter((obj) => obj.Name.includes(string));
		setCur(arr);
	};

	return (
		<div>
			<div className={"sticky-top mb-xxl-5"}>
				<form>
					<div class="input-group flex-nowrap border border-success">
						<span for="shopName" class="input-group-text">
							<b>Search</b>
						</span>
						<input
							onChange={(e) => handleSearch(e.target.value)}
							type="text"
							className="form-control"
							placeholder="Search"
						/>
					</div>
				</form>
			</div>
			{cur.map((obj) => {
				return (
					<div
						key={obj.ID}
						className={
							"container p-xxl-4 bg-light rounded border border-danger my-4"
						}
					>
						<div className={"row"}>
							<div className={"col"}>
								<h2>{obj.Name}</h2>
								<h6>{obj.Area}</h6>
								<h6>{obj.Type}</h6>
							</div>
							<div className={"col"}>
								<h7>
									<b>From</b> {obj.Opening_Date}
									<br></br>
									<b>To</b> {obj.Closing_Date}
								</h7>
							</div>
						</div>
						<br></br>
						<button onClick={() => dis(del(obj.ID))} className="btn btn-danger">
							Remove
						</button>
						{/* <button onClick={() => setEdit(!edit)}>Edit</button> */}
					</div>
				);
			})}
		</div>
	);
};

export default Shops;
