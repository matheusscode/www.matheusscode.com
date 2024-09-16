import { GithubProfile } from "@/interfaces/github";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/packages/components/ui/avatar";
import { Dot } from "@/packages/components/ui/dot";
import { registry_github_static_info } from "@/registry/registry-github";

export interface GithubProfileDetailsProps {
  user: GithubProfile;
}

export const GithubProfileDetails = ({ user }: GithubProfileDetailsProps) => {
  return (
    <div className="relative flex h-32 items-center rounded-md border border-input bg-gradient-to-br from-stone-50/50 to-gray-300/50 p-2 shadow-sm transition-all dark:from-transparent dark:to-zinc-900">
      <div className="absolute -bottom-11 left-4 flex items-center gap-2 laptop:left-8">
        <div className="relative">
          <Avatar className="min-h-24 min-w-24">
            <AvatarImage
              src={user?.avatar_url}
              alt={registry_github_static_info.username}
            />
            <AvatarFallback>
              {user?.name || registry_github_static_info.full_name}
            </AvatarFallback>
          </Avatar>
          <Dot className="absolute bottom-3 right-1" />
        </div>
        <div className="flex h-auto flex-col justify-center gap-0.5">
          <h1 className="text-xl font-medium text-primary dark:text-primary">
            {user?.name || registry_github_static_info.full_name}
            {" - "}
            <span className="text-base font-light tracking-normal text-primary/80 dark:text-primary/80">
              ({user?.login || registry_github_static_info.username})
            </span>
          </h1>
          <p className="mb-0 text-sm text-primary/80">
            {user?.location || registry_github_static_info.short_loading}
          </p>
          <em className="dark:text-muted-foreground/ text-sm text-muted-foreground/90">
            &quot;{user?.bio || registry_github_static_info.short_loading}
            .&quot;
          </em>
          <span className="block text-sm text-muted-foreground laptop:hidden">
            Actual Company:{" "}
            <span className="text-primary">
              {user?.company || registry_github_static_info.short_loading}
            </span>
          </span>
        </div>
      </div>
      <div className="absolute bottom-2 right-8 hidden laptop:block">
        <span className="text-sm text-muted-foreground">
          Actual Company:{" "}
          <span className="text-primary">
            {user?.company || registry_github_static_info.short_loading}
          </span>
        </span>
      </div>
    </div>
  );
};
