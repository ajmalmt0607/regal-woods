// import { Filters, PaginationContainer, ProductsContainer } from "../components";
// import { customFetch } from "../utils";
// const url = "/products";
// export const loader = async ({ request }) => {
// 	const params = Object.fromEntries([
// 		...new URL(request.url).searchParams.entries(),
// 	]);
// 	console.log(params);
// 	// const search = params.get("search");

// 	const response = await customFetch(url, { params });
// 	const products = response.data.data;
// 	const meta = response.data.meta; //for pagination
// 	console.log(products);
// 	return { products, meta };
// };

// const Products = () => {
// 	return (
// 		<>
// 			<Filters />
// 			<ProductsContainer />
// 			<PaginationContainer />
// 		</>
// 	);
// };

// export default Products;

/////////////////////////////////////////////////////////////////////////////////////////

// import { customFetch } from "../utils";
// import { Filters, PaginationContainer, ProductsContainer } from "../components";
// const url = "/products";
// export const loader = async ({ request }) => {
// 	const params = Object.fromEntries([
// 		...new URL(request.url).searchParams.entries(),
// 	]);
// 	console.log("loader", params);

// 	const response = await customFetch(url, { params });
// 	const fetchedProducts = response.data.data;

// 	// Filter products based on query parameters
// 	const filteredProducts = fetchedProducts.filter((product) => {
// 		const { company, category, title, price } = product.attributes;
// 		const search = params.search;
// 		const filterPrice = parseFloat(price);

// 		const matchesSearch =
// 			search === "" || title.toLowerCase().includes(search);
// 		const matchesCompany =
// 			params.company === "all" || company === params.company;
// 		const matchesCategory =
// 			params.category === "all" || category === params.category;
// 		const matchesPrice =
// 			!params.price || filterPrice <= parseFloat(params.price);

// 		return (
// 			matchesSearch && matchesCompany && matchesCategory && matchesPrice
// 		);
// 	});

// 	// Sort filtered products based on order
// 	let sortedProducts = filteredProducts;
// 	if (params.order === "high") {
// 		sortedProducts = filteredProducts
// 			.slice()
// 			.sort(
// 				(a, b) =>
// 					parseFloat(b.attributes.price) -
// 					parseFloat(a.attributes.price)
// 			);
// 	} else if (params.order === "low") {
// 		sortedProducts = filteredProducts
// 			.slice()
// 			.sort(
// 				(a, b) =>
// 					parseFloat(a.attributes.price) -
// 					parseFloat(b.attributes.price)
// 			);
// 	} else if (params.order === "z-a") {
// 		sortedProducts = filteredProducts
// 			.slice()
// 			.sort((a, b) =>
// 				b.attributes.title.localeCompare(a.attributes.title)
// 			);
// 	} else if (params.order === "a-z") {
// 		sortedProducts = filteredProducts
// 			.slice()
// 			.sort((a, b) =>
// 				a.attributes.title.localeCompare(b.attributes.title)
// 			);
// 	}

// 	const meta = response.data.meta;
// 	return { products: sortedProducts, meta, params };
// };

// const Products = () => {
// 	return (
// 		<>
// 			<Filters />
// 			<ProductsContainer />
// 			<PaginationContainer />
// 		</>
// 	);
// };
// export default Products;

//////////////////////////////////////////////////////////////////////////////////
import { customFetch } from "../utils";
import { Filters, ProductsContainer } from "../components";

const defaultUrl = "/products";

export const loader = async ({ request }) => {
	const params = Object.fromEntries([
		...new URL(request.url).searchParams.entries(),
	]);
	console.log("loader", params);

	let url = defaultUrl;
	let queryParams = {};

	if (Object.keys(params).length > 0) {
		// Construct filtered query parameters
		queryParams = {
			search: params.search || "",
			company: params.company || "all",
			category: params.category || "all",
			price: params.price || "",
			order: params.order || "",
		};
		url = "/products"; // Set your filtered URL here
	}

	const response = await customFetch(url, { params: queryParams });
	const fetchedProducts = response.data.data;

	// Filter and sort products if params have values
	let filteredProducts = fetchedProducts;
	if (Object.keys(params).length > 0) {
		filteredProducts = fetchedProducts.filter((product) => {
			const { company, category, title, price } = product.attributes;
			const {
				search,
				company: companyParam,
				category: categoryParam,
				price: priceParam,
			} = queryParams;
			const filterPrice = parseFloat(price);

			const matchesSearch =
				search === "" || title.toLowerCase().includes(search);
			const matchesCompany =
				companyParam === "all" || company === companyParam;
			const matchesCategory =
				categoryParam === "all" || category === categoryParam;
			const matchesPrice =
				!priceParam || filterPrice <= parseFloat(priceParam);

			return (
				matchesSearch &&
				matchesCompany &&
				matchesCategory &&
				matchesPrice
			);
		});

		// Sort filtered products based on order
		if (queryParams.order === "high") {
			filteredProducts = filteredProducts
				.slice()
				.sort(
					(a, b) =>
						parseFloat(b.attributes.price) -
						parseFloat(a.attributes.price)
				);
		} else if (queryParams.order === "low") {
			filteredProducts = filteredProducts
				.slice()
				.sort(
					(a, b) =>
						parseFloat(a.attributes.price) -
						parseFloat(b.attributes.price)
				);
		} else if (queryParams.order === "z-a") {
			filteredProducts = filteredProducts
				.slice()
				.sort((a, b) =>
					b.attributes.title.localeCompare(a.attributes.title)
				);
		} else if (queryParams.order === "a-z") {
			filteredProducts = filteredProducts
				.slice()
				.sort((a, b) =>
					a.attributes.title.localeCompare(b.attributes.title)
				);
		}
	}

	const meta = response.data.meta;
	return {
		products: filteredProducts,
		meta,
		params,
		productsCount: filteredProducts.length,
	};
};

const Products = () => {
	return (
		<>
			<Filters />
			<ProductsContainer />
		</>
	);
};
export default Products;
