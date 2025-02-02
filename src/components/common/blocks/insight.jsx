import { twMerge } from "tailwind-merge";
import { BodyText, Button } from "..";

const Insight = ({
  className,
  description,
  action: { className: actionClassName, text, href, target, ...actionProps },
  ...props
}) => {
  return (
    <div
      className={`mt-2 md:mt-0 p-5 border-[1.5px] border-gray-extra-light w-10/12 md:w-[320px] bg-white rounded-primary ${className}`}
      {...props}
    >
      <BodyText className="w-full text-black/60">{description}</BodyText>
      <Button
        href={href}
        target={target}
        className={twMerge("mx-auto mt-[18px] px-[1.1rem]", actionClassName)}
        arrow
        {...actionProps}
      >
        {text}
      </Button>
    </div>
  );
};

export default Insight;
