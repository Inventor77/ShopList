import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./actions/action";
import shortid from "shortid";
import Shops from "./shops";

const Main = () => {
	const sel = useSelector((state) => state.map);
	const dis = useDispatch();

	const [name, setName] = useState("");
	const [area, setArea] = useState("");
	const [type, setType] = useState("");
	const [oDate, setODate] = useState("");
	const [cDate, setCDate] = useState("");
	const [id, setId] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const obj = {
			Name: name,
			Area: area,
			Type: type,
			Opening_Date: oDate,
			Closing_Date: cDate,
			ID: shortid.generate(),
		};
		// alert(JSON.stringify(obj))
		dis(add(obj));
	};

	return (
		<div className={"row mt-5"}>
			<div className={"container col-4 "}>
				<div
					className={"container p-xxl-4 bg-light rounded border border-danger"}
				>
					<form onSubmit={handleSubmit} className={"row"}>
						<div class="mb-3">
							<label for="shopName" class="form-label">
								<b>Shop Name:</b>
							</label>
							<input
								type="text"
								placeholder="Name"
								onChange={(e) => setName(e.target.value)}
								className="form-control mb-3"
							/>
							<label for="shopArea" class="form-label">
								<b>Shop Area:</b>
							</label>
							<select
								onClick={(e) => setArea(e.target.value)}
								className="form-select mb-3 area"
								aria-label=".area"
							>
								<option selected>Select Area</option>
								<option value="Thane">Thane</option>
								<option value="Pune">Pune</option>
								<option value="Mumbai Suburban">Mumbai Suburban</option>
								<option value="Nashik">Nashik</option>
								<option value="Nagpur">Nagpur</option>
								<option value="Ahmednagar">Ahmednagar</option>
								<option value="Solhapur">Solhapur</option>
							</select>
							<label for="shopCategory" class="form-label">
								<b>Shop Category:</b>
							</label>
							<select
								onClick={(e) => setType(e.target.value)}
								className="form-select mb-3 category"
								aria-label=".category"
							>
								<option selected>Select Category</option>
								<option value="Grocery">Grocery</option>
								<option value="Butcher">Butcher</option>
								<option value="Baker">Baker</option>
								<option value="Chemist">Chemist</option>
								<option value="Stationary">Stationary</option>
							</select>
							<label for="shopOpeningDate" class="form-label">
								<b>Shop Opening Date:</b>
							</label>
							<input
								type="date"
								onChange={(e) => {
									setODate(e.target.value);
									setId(e.target.valueAsNumber);
								}}
								className="form-control mb-3"
							/>
							<label for="shopClosingDate" class="form-label">
								<b>Shop Closing Date:</b>
							</label>
							<input
								type="date"
								onChange={(e) => setCDate(e.target.value)}
								className="form-control mb-3"
							/>
						</div>
						<input
							type="submit"
							value="ADD SHOP"
							className="btn col-11 container btn-danger"
						/>
					</form>
				</div>
			</div>
			<div className={"col mx-xxl-5"}>
				<Shops />
			</div>
		</div>
	);
};

export default Main;
