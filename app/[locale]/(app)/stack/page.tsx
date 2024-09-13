import { RadialPurpleBlurCircle } from "@/packages/components/background-radials";
import { Separator } from "@/packages/components/ui/separator";
import { constructMetadata } from "@/packages/utils/construct-metadata";
import {
  registry_tech_stack,
  RegistryTechGroup,
} from "@/registry/registry-tech-stack";
import { ContentWrapper } from "@/ui/layout/content-wrapper";
import { Heading } from "@/ui/layout/heading";
import { PageWrapper } from "@/ui/layout/page-wrapper";
import Transmutation from "@/ui/layout/transmutation-content";
import { TechGroupList } from "@/ui/stack/tech-group-list";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: {
    locale: string;
  };
}

export const metadata = constructMetadata({
  title: "Technologies I Work With - My Tech Stack",
  description:
    "Explore the technologies and tools I work with and have familiarity with. This page provides an overview of the tech stack that powers my projects and enhances my development workflow.",
  image: "https://github.com/user-attachments/assets/tech-stack-overview.png",
  canonicalUrl: "/stack",
});

export default async function Page({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "stack" });
  unstable_setRequestLocale(locale);

  return (
    <PageWrapper>
      <RadialPurpleBlurCircle />
      <Transmutation>
        <ContentWrapper className="flex flex-col gap-6">
          <div>
            <Heading title={t("main_title")} />
            <Separator />
          </div>
          {registry_tech_stack.map((group: RegistryTechGroup, index) => {
            const translationKey = `group_${group.key}` as keyof IntlMessages;

            return (
              <nav
                key={group.id}
                data-index={index}
                className="space-y-4 pt-8 data-[index=0]:pt-0"
              >
                <h1 className="mb-4 text-lg font-semibold">
                  {t(translationKey as never)}
                </h1>
                <TechGroupList group={group} />
              </nav>
            );
          })}
        </ContentWrapper>
      </Transmutation>
    </PageWrapper>
  );
}
