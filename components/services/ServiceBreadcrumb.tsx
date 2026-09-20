import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type ServiceBreadcrumbProps = {
  items: BreadcrumbItem[];
  light?: boolean;
};

export default function ServiceBreadcrumb({
  items,
  light = false,
}: ServiceBreadcrumbProps) {
  return (
    <nav aria-label="Fil d’Ariane">
      <ol
        className={`flex flex-wrap items-center gap-2 text-xs ${
          light ? "text-white/50" : "text-anthracite/45"
        }`}
      >
        <li>
          <Link
            href="/"
            className={
              light
                ? "transition hover:text-white"
                : "transition hover:text-terracotta"
            }
          >
            Accueil
          </Link>
        </li>

        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <ChevronRight size={12} aria-hidden="true" />

            {item.href ? (
              <Link
                href={item.href}
                className={
                  light
                    ? "transition hover:text-white"
                    : "transition hover:text-terracotta"
                }
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={light ? "text-white/75" : "text-anthracite/70"}
                aria-current="page"
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}