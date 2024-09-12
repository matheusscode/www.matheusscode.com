import { RegistryTechGroup } from "@/registry/registry-tech-stack";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface TechGroupListProps extends HTMLAttributes<HTMLUListElement> {
  group: RegistryTechGroup;
}

export const TechGroupList = ({ group }: TechGroupListProps) => {
  return (
    <ul className="list-none flex pl-8 flex-col gap-2">
      {group.techs.map((tech) => (
        <li className="text-base list-disc" key={tech.name}>
          <Link
            className="hover:underline text-blue-600 dark:text-blue-500"
            href={tech.path}
            target="_blank"
            rel="noreferrer noopener"
            referrerPolicy="no-referrer"
            title={`Go to ${tech.name}`}
          >
            {tech.name}
          </Link>
          {" -"} <span>{tech.description}</span>
        </li>
      ))}
    </ul>
  );
};
