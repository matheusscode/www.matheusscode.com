import { RadialPurpleBlueFade } from "@/packages/components/background-radials";
import { DefImage } from "@/packages/components/def-image";
import { Separator } from "@/packages/components/ui/separator";
import { constructMetadata } from "@/packages/utils/construct-metadata";
import setup_print from "@/public/setup/setup-light.jpeg";
import { ContentWrapper } from "@/ui/layout/content-wrapper";
import { Heading } from "@/ui/layout/heading";
import { PageWrapper } from "@/ui/layout/page-wrapper";
import Transmutation from "@/ui/layout/transmutation-content";
import { WorkspaceDetailsTable } from "@/ui/workspaces/workspace-details-table";
import { useTranslations } from "next-intl";

export const metadata = constructMetadata({
  title: "Introducing My Workspace - An Enhanced Project Management Hub",
  description:
    "Discover My Workspace: a powerful and comprehensive project management hub designed to streamline your workflow and boost collaboration. Explore the advanced features and tools tailored to enhance your project management experience.",
  image:
    "https://github.com/user-attachments/assets/4cc1ef02-e07f-471f-9385-cc2854854d84",
  canonicalUrl: "/workspace",
});

export default function Page() {
  const t = useTranslations("workspace");

  return (
    <PageWrapper>
      <RadialPurpleBlueFade />
      <Transmutation>
        <ContentWrapper className="flex flex-col gap-6">
          <div>
            <Heading title={t("main_title")} className="flex flex-col gap-3" />
            <Separator />
          </div>
          <DefImage
            src={setup_print}
            alt="Light-themed setup illustration showing workspace layout"
            width={540}
            height={100}
            className="my-4"
          />
          <WorkspaceDetailsTable />
        </ContentWrapper>
      </Transmutation>
    </PageWrapper>
  );
}
