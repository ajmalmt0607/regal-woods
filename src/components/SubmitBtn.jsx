import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
	const navigation = useNavigation();
	const isSubitting = navigation.state === "submitting";
	return (
		<button
			type="submit"
			className="btn btn-primary text-transform: uppercase btn-block"
			disabled={isSubitting}
		>
			{isSubitting ? (
				<>
					<span className="loading loading-spinner">sending...</span>
				</>
			) : (
				text || "submit"
			)}
		</button>
	);
};

export default SubmitBtn;
