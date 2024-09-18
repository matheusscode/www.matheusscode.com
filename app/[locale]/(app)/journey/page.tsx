import { getPosts } from "@/app/_services/notion";
import { RadialBlueFade } from "@/packages/components/background-radials";
import { Separator } from "@/packages/components/ui/separator";
import { getYearFromDate } from "@/packages/utils/get-values";
import transitions from "@/registry/registry-animations";
import { JourneyConnectingLine } from "@/ui/journey/journey-connecting-line";
import { JourneyPostCard } from "@/ui/journey/journey-post-card";
import { JourneyTimeLine } from "@/ui/journey/journey-time-line";
import { ContentWrapper } from "@/ui/layout/content-wrapper";
import { Heading } from "@/ui/layout/heading";
import { PageWrapper } from "@/ui/layout/page-wrapper";
import Transmutation from "@/ui/layout/transmutation-content";
import { PlusIcon } from "lucide-react";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: {
    locale: string;
  };
}

export default async function Page({ params: { locale } }: Props) {
  const posts = await getPosts(process.env.NOTION_JOURNEY_DATABASE_ID!);
  const t = await getTranslations({ locale, namespace: "journey" });
  unstable_setRequestLocale(locale);

  return (
    <PageWrapper>
      <RadialBlueFade />
      <ContentWrapper className="flex flex-col gap-6">
        <Transmutation transition={transitions.goDown}>
          <div>
            <Heading title={t("main_title")} />
            <Separator />
          </div>
        </Transmutation>
        <div className="mt-5 flex flex-col items-stretch">
          {posts.map((tour, index) => {
            const currentYear = getYearFromDate(tour.date);

            const isFirstPostOfYear =
              index === 0 ||
              getYearFromDate(posts[index - 1].date) !== currentYear;

            const isSameYear =
              index < posts.length - 1 &&
              getYearFromDate(posts[index + 1].date) === currentYear;

            const contentWithi18nApplied = {
              title: locale === "en" ? tour.title_en : tour.title_pt,
              description:
                locale === "en" ? tour.description_en : tour.description_pt,
            };

            return (
              <Transmutation
                transition={transitions.goUp}
                time={index * 0.14}
                key={`data_${tour.id}`}
              >
                <div className="flex flex-col items-baseline gap-6 md:flex-row md:gap-12">
                  <Transmutation transition={transitions.reveal}>
                    <JourneyTimeLine
                      date={tour.date}
                      isLastPost={isFirstPostOfYear}
                    />
                  </Transmutation>
                  <ContentWrapper as="section">
                    <div
                      id={`${encodeURIComponent(tour.id)}`}
                      className="relative flex last:pb-0"
                    >
                      {isSameYear && <JourneyConnectingLine />}

                      <a
                        aria-label={`${tour.date}_${contentWithi18nApplied.title}`}
                        href={`#${encodeURIComponent(tour.id)}`}
                        className="z-0 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary align-middle text-background"
                      >
                        <PlusIcon size={16} />
                      </a>
                      <Transmutation transition={transitions.reveal}>
                        <div className="w-full max-w-[650px] flex-grow pb-6 pl-8">
                          <JourneyPostCard
                            content={{
                              title: contentWithi18nApplied.title,
                              description: contentWithi18nApplied.description,
                              media: tour.media,
                            }}
                          />
                        </div>
                      </Transmutation>
                    </div>
                  </ContentWrapper>
                </div>
              </Transmutation>
            );
          })}
        </div>
      </ContentWrapper>
    </PageWrapper>
  );
}
