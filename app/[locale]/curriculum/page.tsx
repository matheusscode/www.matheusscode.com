import { ExternalLink } from "@/packages/components/eternal-link";
import { LanguageSwitcher } from "@/packages/components/language-switcher";
import { constructMetadata } from "@/packages/utils/construct-metadata";
import transitions from "@/registry/registry-animations";
import enCv from "@/registry/registry-curriculum/registry-curriculum-en.json";
import ptCv from "@/registry/registry-curriculum/registry-curriculum-pt.json";
import { ContentWrapper } from "@/ui/layout/content-wrapper";
import { Heading } from "@/ui/layout/heading";
import { PageWrapper } from "@/ui/layout/page-wrapper";
import Transmutation from "@/ui/layout/transmutation-content";
import { unstable_setRequestLocale } from "next-intl/server";

interface Props {
  params: {
    locale: string;
  };
}

export const metadata = constructMetadata({
  title: "My Curriculum - Detailed Overview of My Professional Journey",
  description:
    "Explore my detailed curriculum vitae, showcasing my educational background, professional experiences, and skills. Learn more about my career path and achievements.",
  image:
    "https://github.com/user-attachments/assets/4cc1ef02-e07f-471f-9385-cc2854854d84",
  canonicalUrl: "/curriculum",
});

export default function Page({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  let content;

  if (locale === "en") {
    content = enCv;
  } else {
    content = ptCv;
  }

  return (
    <PageWrapper className="relative mx-auto flex h-full w-full max-w-3xl flex-col gap-4 text-pretty !px-2 !py-0 text-sm print:h-auto print:max-w-4xl print:break-inside-avoid print:gap-2">
      <Transmutation transition={transitions.goDown}>
        <LanguageSwitcher className="absolute left-0 right-0 top-0 print:hidden" />
        <ContentWrapper className="mt-10 h-auto max-w-full print:mt-0">
          <span className="block w-full text-right text-accent-foreground">
            {content.role}
          </span>
          <div className="flex flex-col items-center justify-center gap-1.5">
            <Heading title={content.name} className="my-0 w-full text-center" />
            <div className="flex items-center justify-center gap-0.5 text-primary">
              <span className="w-[120px] whitespace-nowrap">
                {content.phone}
              </span>
              <span className="text-muted-foreground">{"|"}</span>
              <span className="w-[150px] whitespace-nowrap pl-2">
                {content.email}
              </span>
            </div>
          </div>
          <div className="mt-2.5 flex w-full flex-col items-end justify-end gap-1.5 print:gap-1">
            <div className="flex flex-col items-end justify-end gap-0.5">
              <ExternalLink href={content.links.github}>
                {content.links.github}
              </ExternalLink>
              <ExternalLink href={content.links.linkedin}>
                {content.links.linkedin}
              </ExternalLink>
            </div>
            <span className="text-muted-foreground">{content.updated_at}</span>
          </div>
          <p className="mb-0 mt-2 font-normal print:mt-1">{content.bio}</p>
        </ContentWrapper>
        <ContentWrapper className="mt-4 h-auto max-w-full print:mt-0">
          <h1 className="my-0 text-xl print:text-lg">Education</h1>
          <ul className="ml-6 mt-2 space-y-1.5">
            {content.education.map((learn) => (
              <li
                key={learn.id}
                className="relative flex flex-col before:absolute before:-left-4 before:top-1.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
              >
                <span className="text-muted-foreground">{learn.period}</span>
                <strong className="text-[0.975rem] font-medium">
                  {learn.school}
                </strong>
                <span className="text-primary/90">{learn.course}</span>
              </li>
            ))}
          </ul>
        </ContentWrapper>
        <ContentWrapper className="mt-4 h-auto max-w-full print:mt-0">
          <h1 className="my-0 text-xl print:text-lg">Experiences</h1>
          <ul className="ml-6 mt-2">
            {content.experiences.map((experience) => (
              <li
                key={experience.id}
                className="mt-3 flex items-start print:mt-1"
              >
                <strong className="min-w-14 pt-3.5 text-sm print:pt-0">
                  {experience.date}
                </strong>
                <div className="relative flex flex-col pl-8">
                  <hr className="pb-3.5 print:hidden" />
                  <div className="flex items-start justify-between gap-0.5">
                    <div className="flex flex-col text-primary">
                      <strong>{experience.title}</strong>
                      <strong className="font-normal text-muted-foreground">
                        {experience.locale}
                      </strong>
                    </div>
                    <span className="text-right font-medium">
                      {experience.company}
                    </span>
                  </div>
                  <div className="my-1.5">
                    <p className="mb-0 font-light leading-snug tracking-wide">
                      {experience.description}
                    </p>
                    <div className="my-2 pl-4">
                      <ul className="list-disc space-y-1.5">
                        {experience.projects?.map((project) => (
                          <li key={project.id} className="flex">
                            <p className="mb-0 font-light leading-tight">
                              <strong className="font-medium text-primary">
                                - {project.label}
                                {": "}
                              </strong>
                              {project.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="mb-0 font-normal leading-snug tracking-wide">
                      {experience.complemention}
                    </p>
                  </div>
                  <p className="mb-2 text-primary">
                    <strong className="font-medium">Im working with: </strong>
                    <em className="text-muted-foreground">
                      {experience.stack}
                    </em>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </ContentWrapper>
      </Transmutation>
    </PageWrapper>
  );
}
