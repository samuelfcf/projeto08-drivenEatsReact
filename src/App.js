import { Header } from "./shared/Header";
import { Footer } from "./shared/Footer";
import { Content } from "./shared/Content";

const App = () => {
	return (
		<div className="container">
			<Header />
			<Content />
			<Footer />
		</div>
	);
}

export { App }
