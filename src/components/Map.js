import React from "react";

export default function Map() {
	return (
		<div>
			<iframe
				title="office-map"
				width="100%"
				height="350"
				frameBorder="0"
				style={{ border: 0 }}
				src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ0yseHZVL3YAR1khZck1m5qs&zoom=12&key=AIzaSyBdsNeYZe8E0PNnLA-WRUxjolwO0Bbfs4k"
				allowFullScreen
			/>
		</div>
	);
}
