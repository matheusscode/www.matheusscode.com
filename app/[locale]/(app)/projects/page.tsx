import { getGist, getProfile, getRepos } from "@/app/_services/github";
import { GithubProfile, GithubRepository } from "@/interfaces/github";
import { RadialGradientScreen } from "@/packages/components/background-radials";
import { ExternalLink } from "@/packages/components/eternal-link";
import { Separator } from "@/packages/components/ui/separator";
import { Skeleton } from "@/packages/components/ui/skeleton";
import transitions from "@/registry/registry-animations";
import { registry_myself } from "@/registry/registry-myself";
import { ContentWrapper } from "@/ui/layout/content-wrapper";
import { Heading } from "@/ui/layout/heading";
import { PageWrapper } from "@/ui/layout/page-wrapper";
import Transmutation from "@/ui/layout/transmutation-content";
import { GithubGistJSON } from "@/ui/projects/github-gist-json";
import { GithubProfileDetails } from "@/ui/projects/github-profile-details";
import { GithubRepositoryCard } from "@/ui/projects/github-repository-card";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Suspense } from "react";

interface Props {
  params: {
    locale: string;
  };
}

export default async function Page({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "projects" });
  unstable_setRequestLocale(locale);

  const user: GithubProfile = await getProfile();
  const repositories: GithubRepository[] = await getRepos();
  const gist = await getGist();

  return (
    <PageWrapper>
      <RadialGradientScreen />
      <ContentWrapper className="flex flex-col gap-6">
        <Transmutation transition={transitions.goDown}>
          <div>
            <Heading title={t("main_title")} />
            <Separator />
          </div>
        </Transmutation>
        <Transmutation transition={transitions.goDown}>
          <GithubProfileDetails user={user} />
        </Transmutation>
        <Transmutation transition={transitions.goUp}>
          <div className="mt-40 flex flex-col laptop:mt-14">
            <Transmutation transition={transitions.reveal}>
              <div>
                <h1 className="text-lg">{t("repositories_title")}</h1>
                <p className="mb-0 text-sm text-primary/80 dark:text-muted-foreground/90">
                  {t("repositories_description")}
                </p>
              </div>
            </Transmutation>
            <div className="mt-3.5 grid grid-cols-1 gap-2 laptop:grid-cols-2">
              {repositories
                .map((repo, index) => (
                  <Suspense
                    key={repo?.id}
                    fallback={
                      <Skeleton className="h-[128px] w-[444px] rounded-md" />
                    }
                  >
                    <Transmutation
                      className="h-full flex-1"
                      transition={transitions.goUp}
                      time={index * 0.18}
                    >
                      <Transmutation transition={transitions.reveal}>
                        <GithubRepositoryCard repo={repo} />
                      </Transmutation>
                    </Transmutation>
                  </Suspense>
                ))
                .reverse()}
            </div>
            <div className="mt-4 flex w-full items-center justify-between">
              <span className="text-center text-xs text-muted-foreground">
                {t("repositories_caption")}
              </span>
              <ExternalLink
                href={registry_myself.repositories_url}
                className="text-xs"
              >
                {t("see_more")}
              </ExternalLink>
            </div>
          </div>
          <Separator className="mb-3.5 mt-2" />
        </Transmutation>
        <Transmutation transition={transitions.goUp} time={0.6}>
          <div className="flex flex-col">
            <Transmutation transition={transitions.reveal}>
              <div>
                <h1 className="text-lg">Gist</h1>
                <p className="mb-0 text-sm text-primary/80 dark:text-muted-foreground/90">
                  {t("gist_description")}
                </p>
              </div>
            </Transmutation>
            <Suspense
              fallback={<Skeleton className="h-[444px] w-full rounded-md" />}
            >
              <GithubGistJSON schema={gist} />
            </Suspense>
            <span className="mt-4 text-center text-xs text-muted-foreground">
              {t("gist_caption")}
            </span>
          </div>
        </Transmutation>
      </ContentWrapper>
    </PageWrapper>
  );
}
