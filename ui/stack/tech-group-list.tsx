import { ExternalLink } from "@/packages/components/eternal-link";
import transitions from "@/registry/registry-animations";
import { RegistryTechGroup } from "@/registry/registry-tech-stack";
import { useTranslations } from "next-intl";
import { HTMLAttributes } from "react";
import Transmutation from "../layout/transmutation-content";

interface TechGroupListProps extends HTMLAttributes<HTMLUListElement> {
  group: RegistryTechGroup;
}

export const TechGroupList = ({ group }: TechGroupListProps) => {
  const t = useTranslations("stack");

  return (
    <ul className="flex list-none flex-col gap-2 pl-8">
      {group.techs.map((tech, index) => (
        <li className="text-base" key={tech.name}>
          <Transmutation
            key={index}
            time={index * 0.1}
            transition={transitions.goUp}
          >
            <Transmutation transition={transitions.reveal}>
              <ExternalLink href={tech.path} title={`Go to ${tech.name}`}>
                {tech.name}
              </ExternalLink>
              {" -"} <span>{t(tech.key as never)}</span>
            </Transmutation>
          </Transmutation>
        </li>
      ))}
    </ul>
  );
};
