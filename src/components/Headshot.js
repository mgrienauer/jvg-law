import React from "react";
import LazyLoad from "react-lazy-load";

export default function Headshot() {
	return (
		<LazyLoad>
			<div className="headshot" />
		</LazyLoad>
	);
}
