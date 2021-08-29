import React, { useState } from "react";
import { Header } from "./shared/Header";
import { Footer } from "./shared/Footer";
import { Content } from "./shared/Content";
import { ConfirmOrderCard } from "./components/ConfirmOrderCard/ConfirmOrderCard"

const App = () => {

	const [itemsSelected, setItemsSelected] = useState({
		food: [],
		drink: [],
		dessert: []
	});


	return (
		<>
			<div className="container">
				<Header />
				<Content
					itemsSelected={itemsSelected}
					setItemsSelected={setItemsSelected} />
				<Footer
					itemsSelected={itemsSelected} />
			</div>

			<ConfirmOrderCard />
		</>
	);
}

export { App }
