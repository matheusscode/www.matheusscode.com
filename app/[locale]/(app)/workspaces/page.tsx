import { RadialPurpleBlueFade } from "@/packages/components/background-radials";
import { DefImage } from "@/packages/components/def-image";
import { Separator } from "@/packages/components/ui/separator";
import setup_print from "@/public/setup/setup-light.jpeg";
import { ContentWrapper } from "@/ui/layout/content-wrapper";
import { Heading } from "@/ui/layout/heading";
import { PageWrapper } from "@/ui/layout/page-wrapper";
import { WorkspaceDetailsTable } from "@/ui/workspaces/workspace-details-table";

export default function Page() {
  return (
    <PageWrapper>
      <RadialPurpleBlueFade />
      <ContentWrapper className="flex flex-col gap-6">
        <div>
          <Heading title="Workspace" className="flex flex-col gap-3" />
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
    </PageWrapper>
  );
}
