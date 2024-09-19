import { getRepos } from "@/app/_services/github";
import { GithubRepository } from "@/interfaces/github";
import DotPattern from "@/packages/components/magic-ui/dot-pattern";
import { Separator } from "@/packages/components/ui/separator";
import { constructMetadata } from "@/packages/utils/construct-metadata";
import transitions from "@/registry/registry-animations";
import { ContentWrapper } from "@/ui/layout/content-wrapper";
import { Heading } from "@/ui/layout/heading";
import { PageWrapper } from "@/ui/layout/page-wrapper";
import { MainTitle } from "@/ui/layout/title";
import Transmutation from "@/ui/layout/transmutation-content";
import { GithubRepositoryCard } from "@/ui/projects/github-repository-card";
import { StackBeam } from "@/ui/welcome/stack-beam";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: {
    locale: string;
  };
}

export const metadata = constructMetadata({
  title: "Welcome to My Porfolio - Showcasing My Work and Achievements",
  description:
    "Explore my porfolio to learn more about my work, achievements, and projects. Discover my GitHub repository, view my professional details, and see how I approach my work.",
  image:
    "https://github.com/user-attachments/assets/4cc1ef02-e07f-471f-9385-cc2854854d84",
  canonicalUrl: "/home",
});

export default async function Page({ params: { locale } }: Props) {
  const repos: GithubRepository[] = await getRepos();
  const t = await getTranslations({ locale, namespace: "welcome" });
  unstable_setRequestLocale(locale);

  return (
    <PageWrapper>
      <ContentWrapper className="flex w-full flex-col gap-4">
        <Transmutation transition={transitions.goDown}>
          <div>
            <Heading title={t("main_title")} className="flex flex-col gap-3" />
            <Separator />
          </div>
        </Transmutation>
        <Transmutation transition={transitions.reveal}>
          <div className="relative mt-3.5 flex min-h-44 flex-col items-center justify-center">
            <StackBeam />
            <DotPattern
              width={20}
              height={20}
              cx={1}
              cy={1}
              cr={1}
              className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            />
          </div>
        </Transmutation>
        <Transmutation
          className="flex w-full flex-col items-center justify-center"
          transition={transitions.goUp}
        >
          <span className="mt-1 text-center text-sm text-muted-foreground">
            {t("stack_description")}
          </span>
          <div className="flex w-full flex-col">
            <MainTitle title={t("about_title")} />
            <p className="text-base !font-light">{t("about_description")}</p>
          </div>
          <Separator />
        </Transmutation>
        <div className="grid grid-cols-1 gap-6 laptop:grid-cols-2">
          <Transmutation transition={transitions.slideToLeft}>
            <div className="flex flex-col gap-4">
              <h2 className="font-sans text-lg font-medium tracking-tight">
                Latest project
              </h2>
              <GithubRepositoryCard repo={repos[0]} />
            </div>
          </Transmutation>
          <Transmutation
            className="h-full flex-1"
            transition={transitions.slideToRight}
          >
            <div className="flex h-full flex-col gap-4">
              <h2 className="font-sans text-lg font-medium tracking-tight">
                Latest post
              </h2>
              <div className="flex h-[144px] w-full select-none items-center justify-center rounded-md border border-input bg-muted-foreground/15">
                <span className="text-primary/80">Coming soon...</span>
              </div>
            </div>
          </Transmutation>
        </div>
      </ContentWrapper>
    </PageWrapper>
  );
}
