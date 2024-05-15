// import { Form } from "react-router-dom";
// import FormInput from "./FormInput";
// import SubmitBtn from "./SubmitBtn";

// let handleSubmit = (e) => {
// 	e.preventDefault();

// 	const formData = new FormData(e.target);
// 	let name = formData.get("name");
// 	let address = formData.get("address");

// 	console.log("Name:", name);
// 	console.log("Address:", address);
// };

// const CheckoutForm = () => {
// 	return (
// 		<Form
// 			method="POST"
// 			onSubmit={handleSubmit}
// 			className="flex flex-col gap-y-4"
// 		>
// 			<h4 className="font-medium text-xl">Shipping Information</h4>
// 			<FormInput label="first name" name="name" type="text" />
// 			<FormInput label="address" name="address" type="text" />
// 			<div className="mt-4">
// 				<SubmitBtn text="place Your Order" />
// 			</div>
// 		</Form>
// 	);
// };

// export default CheckoutForm;

import { Form } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import { customFetch } from "../utils";

const CheckoutForm = () => {
	// const navigate = useNavigate(); // Get the navigate function
	// const dispatch = useDispatch();
	// const { numItemsInCart, orderTotal } = useSelector(
	// 	(state) => state.cartState
	// );

	// let handleSubmit = (e) => {
	// 	e.preventDefault();

	// 	const formData = new FormData(e.target);
	// 	let name = formData.get("name");
	// 	let address = formData.get("address");
	// 	console.log(name, address, numItemsInCart, orderTotal);

	// 	// Get existing order details array from local storage or create an empty array
	// 	let existingOrderDetails = localStorage.getItem("orderdetails");
	// 	existingOrderDetails = JSON.parse(existingOrderDetails) || []; // Ensure array

	// 	existingOrderDetails.push({
	// 		name,
	// 		address,
	// 		numItemsInCart,
	// 		orderTotal,
	// 	});

	// 	console.log(typeof existingOrderDetails);
	// 	// Add new order details to the existing array
	// 	existingOrderDetails.push(name, address, numItemsInCart, orderTotal);

	// 	// Set the updated order details array to local storage
	// 	localStorage.setItem(
	// 		"orderdetails",
	// 		JSON.stringify(existingOrderDetails)
	// 	);

	// 	// Redirect to the order page
	// 	navigate("/orders");
	// 	dispatch(clearCart());
	// };

	const navigate = useNavigate(); // Get the navigate function
	const dispatch = useDispatch();
	const { numItemsInCart, orderTotal, cartItems } = useSelector(
		(state) => state.cartState
	);

	let handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);
		let name = formData.get("name");
		let address = formData.get("address");
		console.log(name, address, numItemsInCart, orderTotal);

		// Get existing order details array from local storage or create an empty array
		let existingOrderDetails = localStorage.getItem("orderdetails");
		existingOrderDetails = JSON.parse(existingOrderDetails) || []; // Ensure array

		existingOrderDetails.push({
			name,
			address,
			numItemsInCart,
			orderTotal,
		});

		console.log(typeof existingOrderDetails);
		// Add new order details to the existing array
		existingOrderDetails.push(name, address, numItemsInCart, orderTotal);

		// Set the updated order details array to local storage
		localStorage.setItem(
			"orderdetails",
			JSON.stringify(existingOrderDetails)
		);

		// Redirect to the order page
		// navigate("/orders");
		// dispatch(clearCart());
	};
	const makePayment = async () => {
		const stripe = await loadStripe(
			"pk_test_51OmbLISCmzThAAkBMUbLL9ZdWFKjE2wpsaoNaaYyEmVbCPQHI7ryCFKMB0FLYALI8BpReXfUXMuWqGaoYz8I5dJD00nnjqejMv"
		);
		const body = { products: cartItems };
		const headers = { "Content-Type": "application/json" };
		const response = await fetch("http://localhost:5173/payment-checkout", {
			method: "POST",
			headers: headers,
			body: JSON.stringify(body),
		});
		const session = await response.json();
		const result = stripe.redirectToCheckout({ sessionId: session.id });
		if (result.error) {
			console.log(result.error);
		}
	};

	return (
		<Form
			method="POST"
			onSubmit={handleSubmit}
			className="flex flex-col gap-y-4"
		>
			<h4 className="font-medium text-xl">Shipping Information</h4>
			<FormInput label="first name" name="name" type="text" />
			<FormInput label="address" name="address" type="text" />
			{/* <div className="mt-4">
				<SubmitBtn text="place Your Order" />
			</div> */}
			<button className="mt-4" onClick={makePayment}>
				Pay
			</button>
		</Form>
	);
};

export default CheckoutForm;
