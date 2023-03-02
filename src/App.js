import React from "react";
import {
	Blog,
	Features,
	Footer,
	Header,
	Possiblity,
	WhatGPT3,
} from "./Containers";

import { CTA, Brand, Navbar } from "./Components";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<div className="gradient__bg">
				<Navbar />
				<Header />
			</div>
			<Brand />
			<WhatGPT3 />
			<Features />
			<Possiblity />
			<CTA />
			<Blog />
			<Footer />
		</div>
	);
};

export default App;
