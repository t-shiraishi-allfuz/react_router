import React from "react";
import Article from "../components/Article";

export default class Archives extends React.Component {
	render() {
		const Articles = [
			"Some Article",
			"Some Other Article",
			"Yet Another Article",
			"Still More",
			"Fake Article",
			"Partial Article",
			"American Article",
			"Mexican Article"
		].map((title, i) => <Article key={i} title={title} />);

		return (
			<div>
				<h1>Archives</h1>
				<div className="row">{Articles}</div>
			</div>
		);
	}
}
