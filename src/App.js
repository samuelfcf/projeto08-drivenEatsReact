import React, { useState } from "react";
import { Header } from "./shared/Header";
import { Footer } from "./shared/Footer";
import { Content } from "./shared/Content";

const App = () => {

	const [itemsSelected, setItemsSelected] = useState({
		foods: [],
		drinks: [],
		desserts: [],
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
		</>
	);
}

export { App }
