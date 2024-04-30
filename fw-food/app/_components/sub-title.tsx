import { ComponentProps } from "react";

interface SubTitleProps extends ComponentProps<"h2"> {}

export const SubTitle = ({ children }: SubTitleProps) => {
  return (
    <>
      <h2 className="font-semibold">{children}</h2>
    </>
  );
};
