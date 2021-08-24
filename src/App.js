import { Header } from "./shared/Header";
import { Footer } from "./shared/Footer";
import { Content } from "./shared/Content";

const App = () => {
	return (
		<div class="container">
			<Header />
			<Content />
			<Footer />
		</div>
	);
}

export { App }
