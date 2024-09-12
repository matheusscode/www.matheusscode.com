import { RadialPurpleBlurCircle } from "@/packages/components/background-radials";
import { Separator } from "@/packages/components/ui/separator";
import {
  registry_tech_stack,
  RegistryTechGroup,
} from "@/registry/registry-tech-stack";
import { ContentWrapper } from "@/ui/layout/content-wrapper";
import { Heading } from "@/ui/layout/heading";
import { PageWrapper } from "@/ui/layout/page-wrapper";
import Transmutation from "@/ui/layout/transmutation-content";
import { TechGroupList } from "@/ui/stack/tech-group-list";

export default function Page() {
  return (
    <Transmutation>
      <PageWrapper>
        <RadialPurpleBlurCircle />
        <ContentWrapper className="flex flex-col gap-6">
          <div>
            <Heading title="Stack" />
            <Separator />
          </div>
          {registry_tech_stack.map((group: RegistryTechGroup, index) => (
            <nav
              key={group.id}
              data-index={index}
              className="space-y-4 pt-8 data-[index=0]:pt-0"
            >
              <h1 className="mb-4 text-lg font-semibold">{group.groupName}</h1>
              <TechGroupList group={group} />
            </nav>
          ))}
        </ContentWrapper>
      </PageWrapper>
    </Transmutation>
  );
}
