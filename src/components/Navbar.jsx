import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";

const Navbar = () => {
	const dispatch = useDispatch();

	const handleTheme = () => {
		dispatch(toggleTheme());
	};
	const numItemsInCart = useSelector(
		(state) => state.cartState.numItemsInCart
	);

	return (
		<nav className="bg-base-300 p-2">
			<div className="align-element flex justify-between items-center">
				<div className="px-3 py-1 m-2">
					{/* TITLE */}
					<NavLink
						to="/"
						className="font-extrabold uppercase text-xl text-red-600"
					>
						Regal Woods
					</NavLink>
				</div>
				<div className="">
					<ul className="flex flex-row">
						<NavLinks className="" />
					</ul>
				</div>
				<div className="">
					{/* THEME SETUP */}
					<label className="swap swap-rotate">
						<input type="checkbox" onChange={handleTheme} />
						{/* sun icon */}
						<BsSunFill className="swap-on h-4 w-4" />
						{/* moon icon */}
						<BsMoonFill className="swap-off h-4 w-4" />
					</label>
					{/* CART LINK */}
					<NavLink
						to="/cart"
						className="btn btn-ghost btn-circle btn-md ml-4"
					>
						<div className="indicator">
							<BsCart3 className="h-5 w-5" />
							<span className="badge badge-sm badge-primary indicator-item">
								{numItemsInCart}
							</span>
						</div>
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
