import { ArrowButtonProps } from "@/types/carousel.type";

export const DotButton = (props: ArrowButtonProps) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};
