//Images
import Spaghetti from "../images/spaghetti.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
//
const FoodCard = () => {
	return (
		<div className="food_card">
			<LazyLoadImage
				className="cc"
				alt="Food"
				src={Spaghetti} // use normal <img> attributes as props
			/>
			<p>Mama mia!</p>
			<p>$ 10.00 </p>
		</div>
	);
};

export default FoodCard;
