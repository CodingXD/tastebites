import { CircleCheck, CircleXIcon } from "lucide-react";
import { useMemo } from "react";

type Props = {
  variant?: "success" | "failure";
  title: string;
  description?: string;
};

export default function Alert({
  variant = "failure",
  title,
  description,
}: Props) {
  const props = useMemo(() => {
    let styles = {
      wrapperColors: "bg-red-50 border-red-500 dark:bg-red-800/30",
      icon: CircleXIcon,
      iconWrapperColors:
        "border-red-100 bg-red-200 text-red-800 dark:border-red-900 dark:bg-red-800 dark:text-red-400",
    };

    if (variant === "success") {
      styles = {
        wrapperColors: "bg-green-50 border-green-500 dark:bg-green-800/30",
        icon: CircleCheck,
        iconWrapperColors:
          "border-green-100 bg-green-200 text-green-800 dark:border-green-900 dark:bg-green-800 dark:text-green-400",
      };
    }

    return styles;
  }, [variant]);

  return (
    <div className={`border-s-4 p-4 ${props.wrapperColors}`} role="alert">
      <div className="flex">
        <div className="flex-shrink-0">
          <span
            className={`inline-flex justify-center items-center size-8 rounded-full border-4 ${props.iconWrapperColors}`}
          >
            <props.icon className="flex-shrink-0 size-4" />
          </span>
        </div>
        <div className="ms-3">
          <h3 className="text-gray-800 font-semibold dark:text-white">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-700 dark:text-neutral-400">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
