import type React from "react";

type Props = {
	title: string;
	children: React.ReactNode;
};

const CustomWrapper = (props: Props) => {
	const { title, children } = props;
	return (
		<section style={{ marginBottom: "2rem" }}>
			<h2
				style={{ marginBottom: "1rem", fontSize: "1.5rem", fontWeight: "bold" }}
			>
				{title}
			</h2>
			<div>{children}</div>
		</section>
	);
};

export default CustomWrapper;
