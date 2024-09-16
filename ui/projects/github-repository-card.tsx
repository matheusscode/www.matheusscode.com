import { GithubRepository } from "@/interfaces/github";
import { Badge } from "@/packages/components/ui/badge";
import { cn } from "@/packages/utils/cn";
import { transformToPascalCase } from "@/packages/utils/string";
import { truncate } from "@/packages/utils/truncate";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { EyeIcon, GitForkIcon, ScaleIcon } from "lucide-react";
import Link from "next/link";

export interface GithubRepositoryCardProps {
  repo: GithubRepository;
}

export const GithubRepositoryCard = ({ repo }: GithubRepositoryCardProps) => {
  const hasStars = repo.stargazers_count > 0;
  const hasForks = repo.forks_count > 0;
  const hasWatchers = repo.watchers_count > 0;
  const hasTopics = repo.topics.length > 0;

  return (
    <Link
      href={repo.html_url}
      target="_blank"
      rel="noreferrer noopener"
      referrerPolicy="no-referrer"
      className={cn(
        "relative flex select-none items-start justify-start rounded-md border border-input px-2.5 py-2.5 shadow-sm transition-all hover:bg-accent/60",
      )}
    >
      <article className="flex h-full flex-col justify-between gap-1.5">
        <div className="flex w-full flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <h1 className="text-base font-normal tracking-normal">
              {repo.name}
            </h1>
            <Badge className="h-4 rounded-full border border-input bg-accent px-1.5 text-xs font-normal text-primary/90 shadow-none hover:bg-accent dark:text-muted-foreground">
              {transformToPascalCase(repo.visibility)}
            </Badge>
          </div>
          <p className="mb-1.5 text-xs text-muted-foreground">
            {truncate(repo.description, 85)}
          </p>
        </div>

        {hasTopics && (
          <div className="flex flex-wrap gap-1">
            {repo.topics.map((topic) => (
              <Badge key={topic} className="h-5 px-1 font-normal">
                {topic}
              </Badge>
            ))}
          </div>
        )}

        <div className="mt-2 flex w-full items-center justify-between gap-2.5">
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-xs font-medium text-muted-foreground">
              {repo.language}
            </span>
          </div>
          {repo.license?.name && (
            <div className="flex items-center gap-1">
              <ScaleIcon size={15} className="text-muted-foreground" />
              <span className="whitespace-nowrap text-xs font-medium text-muted-foreground">
                {repo.license?.name}
              </span>
            </div>
          )}
          <div className="flex w-full items-center justify-end gap-2">
            {hasStars && (
              <span className="flex items-center gap-1.5 text-xs">
                <StarFilledIcon className="text-amber-400" />
                {repo.stargazers_count}
              </span>
            )}
            {hasForks && (
              <span className="flex items-center gap-1.5 text-xs">
                <GitForkIcon size={15} className="text-muted-foreground" />
                {repo.forks_count}
              </span>
            )}
            {hasWatchers && (
              <span className="flex items-center gap-1.5 text-xs">
                <EyeIcon size={15} className="text-muted-foreground" />
                {repo.watchers_count}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};
