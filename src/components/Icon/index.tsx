import { ICONS } from "@/assets/icons";
import React, { ReactNode } from "react";
import Image from "next/image";
interface IconType {
  name: keyof typeof ICONS;
  className?: string | undefined;
}
const Icon = (props: IconType): ReactNode => {
  const name = props?.name;
  return (
    <Image
      src={ICONS?.[name]}
      alt={ICONS?.[name]}
      className={props?.className}
    />
  );
};

export default Icon;
