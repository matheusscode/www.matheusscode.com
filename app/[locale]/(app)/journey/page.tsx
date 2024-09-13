import { RadialBlueFade } from "@/packages/components/background-radials";
import { Separator } from "@/packages/components/ui/separator";
import { getYearFromDate } from "@/packages/utils/get-values";
import { journey } from "@/registry/registry-journey";
import { JourneyConnectingLine } from "@/ui/journey/journey-connecting-line";
import { JourneyPostCard } from "@/ui/journey/journey-post-card";
import { JourneyTimeLine } from "@/ui/journey/journey-time-line";
import { ContentWrapper } from "@/ui/layout/content-wrapper";
import { Heading } from "@/ui/layout/heading";
import { PageWrapper } from "@/ui/layout/page-wrapper";
import Transmutation from "@/ui/layout/transmutation-content";
import { PlusIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("journey");

  return (
    <PageWrapper>
      <RadialBlueFade />
      <Transmutation>
        <ContentWrapper className="flex flex-col gap-6">
          <div>
            <Heading title={t("main_title")} />
            <Separator />
          </div>
          <div className="mt-5 flex flex-col items-stretch">
            {journey.map((tour, index) => {
              const currentYear = getYearFromDate(tour.date);

              const isFirstPostOfYear =
                index === 0 ||
                getYearFromDate(journey[index - 1].date) !== currentYear;

              const isSameYear =
                index < journey.length - 1 &&
                getYearFromDate(journey[index + 1].date) === currentYear;

              return (
                <div
                  key={`data_${tour.id}`}
                  className="flex flex-col items-baseline gap-6 md:flex-row md:gap-12"
                >
                  <JourneyTimeLine
                    date={tour.date}
                    isLastPost={isFirstPostOfYear}
                  />
                  <ContentWrapper as="section">
                    <div
                      key={`data__log_${tour.id}`}
                      className="relative flex last:pb-0"
                    >
                      {isSameYear && <JourneyConnectingLine />}
                      <div className="z-0 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary align-middle text-background">
                        <PlusIcon size={16} />
                      </div>
                      <div className="w-full max-w-[650px] flex-grow pb-6 pl-8">
                        <JourneyPostCard content={tour.content} />
                      </div>
                    </div>
                  </ContentWrapper>
                </div>
              );
            })}
          </div>
        </ContentWrapper>
      </Transmutation>
    </PageWrapper>
  );
}
