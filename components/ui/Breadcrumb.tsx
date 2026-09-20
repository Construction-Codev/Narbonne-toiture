import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  theme?: "light" | "dark";
  spaced?: boolean;
};

export default function Breadcrumb({
  items,
  theme = "light",
  spaced = true,
}: BreadcrumbProps) {
  const muted =
    theme === "dark"
      ? "text-white/45 hover:text-white"
      : "text-muted hover:text-anthracite";

  const current =
    theme === "dark"
      ? "text-white/75"
      : "text-anthracite";

  const separator =
    theme === "dark"
      ? "text-white/25"
      : "text-anthracite/25";

  return (
    <nav
      aria-label="Fil d’Ariane"
      className={spaced ? "mb-20 sm:mb-24 lg:mb-28" : ""}
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[11px] font-bold uppercase tracking-[0.14em]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-2"
            >
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={`transition ${muted}`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={isLast ? current : muted}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <ChevronRight
                  size={12}
                  strokeWidth={1.7}
                  className={separator}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}