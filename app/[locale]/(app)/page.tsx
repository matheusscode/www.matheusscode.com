import { DefImage } from "@/packages/components/def-image";
import { ExternalLink } from "@/packages/components/eternal-link";
import { Separator } from "@/packages/components/ui/separator";
import { constructMetadata } from "@/packages/utils/construct-metadata";
import { ContentWrapper } from "@/ui/layout/content-wrapper";
import { Heading } from "@/ui/layout/heading";
import { PageWrapper } from "@/ui/layout/page-wrapper";
import { MainTitle } from "@/ui/layout/title";
import Transmutation from "@/ui/layout/transmutation-content";
import { EmploymentDetailsTable } from "@/ui/welcome/employment-details-table";
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
  const t = await getTranslations({ locale, namespace: "welcome" });
  unstable_setRequestLocale(locale);

  return (
    <PageWrapper>
      <Transmutation>
        <ContentWrapper className="flex w-full flex-col gap-6">
          <div>
            <Heading title={t("main_title")} className="flex flex-col gap-3" />
            <Separator />
          </div>
          <div className="flex flex-col gap-4">
            <MainTitle title={t("about_title")} />
            <p className="text-base !font-light">{t("about_description")}</p>
          </div>
          <ExternalLink
            icon={false}
            title={t("link_title_github")}
            href="https://github.com/matheusscode/www.matheusscode.com"
          >
            <DefImage
              width={900}
              height={400}
              src="https://github.com/user-attachments/assets/4cc1ef02-e07f-471f-9385-cc2854854d84"
              alt={t("image_alt_github")}
              className="mx-auto cursor-pointer rounded-xl object-cover opacity-90 hover:opacity-100"
            />
          </ExternalLink>
          <div className="mt-8 flex flex-col gap-4">
            <MainTitle title={t("work_title")} />
            <EmploymentDetailsTable />
          </div>
        </ContentWrapper>
      </Transmutation>
    </PageWrapper>
  );
}
