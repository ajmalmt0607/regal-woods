import { FeaturedProducts, Hero, ProductFeatures } from "../components";
import { customFetch } from "../utils/index";

const url = "/products";

export const loader = async () => {
	const response = await customFetch(url);
	const productss = response.data.data;
	const products = productss.filter(
		(product) => product.attributes.featured === true
	);
	return { products };
};

const Landing = () => {
	return (
		<>
			<Hero />
			<FeaturedProducts />
			<ProductFeatures />
		</>
	);
};

export default Landing;
