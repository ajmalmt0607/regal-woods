import { SectionTitle } from "../components";

const Orders = () => {
	// Retrieve order details from local storage
	const orderDetails = JSON.parse(localStorage.getItem("orderdetails"));

	return (
		<>
			{orderDetails && orderDetails.length > 0 ? (
				<div className="overflow-x-auto">
					<table className="table table-zebra">
						{/* head */}
						<thead>
							<tr>
								<th>Name</th>
								<th>Address</th>
								<th>Qty</th>
								<th>Order Amount</th>
							</tr>
						</thead>
						<tbody>
							{/* map each order detail to a table row */}
							{orderDetails.map((order, index) => (
								<tr key={index}>
									<td>{order.name}</td>
									<td>{order.address}</td>
									<td>{order.numItemsInCart}</td>
									<td>{order.orderTotal}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<SectionTitle text="You have not placed an order yet" />
			)}
		</>
	);
};

export default Orders;
