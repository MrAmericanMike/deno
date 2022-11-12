import { Head } from "$fresh/runtime.ts";

export default function Home() {
	return (
		<>
			<Head>
				<title>Fresh Lemons</title>
				<link rel="stylesheet" href="styles.css"></link>
			</Head>
			<div id="lemon">
				<img src="/logo.svg" alt="Fresh Lemons" />
				FRESH LEMONS
			</div>
		</>
	);
}

