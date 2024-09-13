import { ExternalLink } from "@/packages/components/eternal-link";
import { RegistryTechGroup } from "@/registry/registry-tech-stack";
import { useTranslations } from "next-intl";
import { HTMLAttributes } from "react";

interface TechGroupListProps extends HTMLAttributes<HTMLUListElement> {
  group: RegistryTechGroup;
}

export const TechGroupList = ({ group }: TechGroupListProps) => {
  const t = useTranslations("stack");

  return (
    <ul className="flex list-none flex-col gap-2 pl-8">
      {group.techs.map((tech) => (
        <li className="list-disc text-base" key={tech.name}>
          <ExternalLink href={tech.path} title={`Go to ${tech.name}`}>
            {tech.name}
          </ExternalLink>
          {" -"} <span>{t(tech.key as never)}</span>
        </li>
      ))}
    </ul>
  );
};
