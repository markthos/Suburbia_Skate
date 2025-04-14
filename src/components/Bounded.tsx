import {
  ElementType,
  ReactNode,
  ComponentPropsWithoutRef,
  CSSProperties,
} from "react";
import clsx from "clsx";

// Utility type for polymorphic component props
type BoundedProps<T extends ElementType = "section"> = {
  as?: T;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export function Bounded<T extends ElementType = "section">({
  as,
  className,
  children,
  ...restProps
}: BoundedProps<T>) {
  const Comp = as || "section";

  return (
    <Comp
      className={clsx(
        "px-6 ~py-10/16 [.header+&]:pt-44 [.header+&]:md:pt-32",
        className
      )}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}
