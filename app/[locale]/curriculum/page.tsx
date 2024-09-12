import { ExternalLink } from "@/packages/components/eternal-link";
import { registry_curriculum } from "@/registry/registry-curriculum";
import { ContentWrapper } from "@/ui/layout/content-wrapper";
import { Heading } from "@/ui/layout/heading";
import { PageWrapper } from "@/ui/layout/page-wrapper";

export default function Page() {
  return (
    <PageWrapper className="mx-auto flex h-full w-full max-w-3xl flex-col gap-4 text-pretty px-4 py-16 text-sm">
      <ContentWrapper className="h-auto max-w-full">
        <span className="block w-full text-right text-accent-foreground">
          {registry_curriculum.role}
        </span>
        <div className="flex flex-col items-center justify-center gap-1.5">
          <Heading
            title={registry_curriculum.name}
            className="my-0 w-full text-center"
          />
          <div className="flex items-center justify-center gap-0.5 text-primary">
            <span className="w-[120px] whitespace-nowrap">
              {registry_curriculum.phone}
            </span>
            <span className="text-muted-foreground">{"|"}</span>
            <span className="w-[150px] whitespace-nowrap pl-2">
              {registry_curriculum.email}
            </span>
          </div>
        </div>
        <div className="mt-2.5 flex w-full flex-col items-end justify-end gap-1.5">
          <div className="flex flex-col items-end justify-end gap-0.5">
            <ExternalLink href={registry_curriculum.links.github}>
              {registry_curriculum.links.github}
            </ExternalLink>
            <ExternalLink href={registry_curriculum.links.linkedin}>
              {registry_curriculum.links.linkedin}
            </ExternalLink>
          </div>
          <span className="text-muted-foreground">
            {registry_curriculum.updated_at}
          </span>
        </div>
        <p className="mb-0 mt-6 font-normal tracking-wide">
          {registry_curriculum.bio}
        </p>
      </ContentWrapper>
      <ContentWrapper className="h-auto max-w-full">
        <Heading title="Education" as="h2" className="my-0" />
        <ul className="ml-6 mt-3 space-y-4">
          {registry_curriculum.education.map((learn) => (
            <li
              key={learn.id}
              className="relative flex flex-col before:absolute before:-left-4 before:top-1.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
            >
              <span className="text-muted-foreground">{learn.period}</span>
              <span className="text-base">{learn.school}</span>
              <span className="text-primary/90">{learn.course}</span>
            </li>
          ))}
        </ul>
      </ContentWrapper>
      <ContentWrapper className="h-auto max-w-full">
        <Heading title="Experiences" as="h2" className="my-0" />
        <ul className="ml-6 mt-3 space-y-4">
          {registry_curriculum.experiences.map((experience) => (
            <li
              key={experience.id}
              className="relative flex flex-col before:absolute before:-left-4 before:top-1.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
            >
              <div className="flex items-center justify-between gap-2">
                <strong className="text-primary">
                  {experience.title} - {experience.locale}
                </strong>
                <strong>{experience.company}</strong>
              </div>
              <p className="my-0.5 font-normal leading-snug tracking-wide">
                {experience.description}
              </p>
              <span className="text-primary/90">
                Im working with: <em>{experience.stack}</em>
              </span>
            </li>
          ))}
        </ul>
      </ContentWrapper>
    </PageWrapper>
  );
}
