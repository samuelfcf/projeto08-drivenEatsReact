import { Header } from "./shared/Header";
import { Footer } from "./shared/Footer";
import { Content } from "./shared/Content";
import { ConfirmOrderCard } from "./components/ConfirmOrderCard/ConfirmOrderCard"

const App = () => {
	return (
		<>
			<div className="container">
				<Header />
				<Content />
				<Footer />
			</div>

			<ConfirmOrderCard />
		</>
	);
}

export { App }
