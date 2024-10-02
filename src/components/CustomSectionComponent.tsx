import type React from "react";

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const CustomWrapper = (props: Props) => {
  const { title, children } = props;
  return (
    <section>
      <h2
        // style={{ marginBottom: "1rem", fontSize: "1.5rem", fontWeight: "bold" }}
        className="leading-9 text-[24px] mb-2"
      >
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
};

export default CustomWrapper;
