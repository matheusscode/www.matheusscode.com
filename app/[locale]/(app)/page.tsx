import { DefImage } from "@/packages/components/def-image";
import { ExternalLink } from "@/packages/components/eternal-link";
import { Separator } from "@/packages/components/ui/separator";
import { ContentWrapper } from "@/ui/layout/content-wrapper";
import { Heading } from "@/ui/layout/heading";
import { PageWrapper } from "@/ui/layout/page-wrapper";
import { MainTitle } from "@/ui/layout/title";
import Transmutation from "@/ui/layout/transmutation-content";
import { EmploymentDetailsTable } from "@/ui/welcome/employment-details-table";

export default function Page() {
  return (
    <Transmutation>
      <PageWrapper>
        <ContentWrapper className="flex w-full flex-col gap-6">
          <div>
            <Heading title="Welcome" className="flex flex-col gap-3" />
            <Separator />
          </div>
          <div className="flex flex-col gap-4">
            <MainTitle title="About me." />
            <p className="text-base !font-light">
              Hello 👋, my name is Matheus, which means something close to{" "}
              {"(Gift given by God)"} in Portuguese. Married, father of a little
              angel, Software Engineer, musician, passionate about teaching and
              minimalist, and who lives in the city of Manaus - Amazonas,
              Brazil.
            </p>
          </div>
          <ExternalLink
            icon={false}
            title="Open project in Github"
            href="https://github.com/matheusscode/www.matheusscode.com"
          >
            <DefImage
              width={900}
              height={400}
              src="https://github.com/user-attachments/assets/4cc1ef02-e07f-471f-9385-cc2854854d84"
              alt="www.matheusscode.com banner"
              className="mx-auto cursor-pointer rounded-xl object-cover opacity-90 hover:opacity-100"
            />
          </ExternalLink>
          <div className="mt-8 flex flex-col gap-4">
            <MainTitle title="Previous work." />
            <EmploymentDetailsTable />
          </div>
        </ContentWrapper>
      </PageWrapper>
    </Transmutation>
  );
}
