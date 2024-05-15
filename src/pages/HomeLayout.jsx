import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar, Footer, Loading } from "../components";

const HomeLayout = () => {
	const navigation = useNavigation();
	console.log(navigation);
	const isPageLoading = navigation.state === "loading";
	return (
		<div className="">
			<Header />
			<Navbar />
			{isPageLoading ? (
				<Loading />
			) : (
				<>
					<section className="align-element py-20">
						<Outlet />
					</section>
					<Footer />
				</>
			)}
		</div>
	);
};

export default HomeLayout;
