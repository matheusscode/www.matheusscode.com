import { GithubProfile } from "@/interfaces/github";
import DotPattern from "@/packages/components/magic-ui/dot-pattern";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/packages/components/ui/avatar";
import { Dot } from "@/packages/components/ui/dot";
import transitions from "@/registry/registry-animations";
import { registry_myself } from "@/registry/registry-myself";
import Transmutation from "../layout/transmutation-content";

export interface GithubProfileDetailsProps {
  user: GithubProfile;
}

export const GithubProfileDetails = ({ user }: GithubProfileDetailsProps) => {
  return (
    <div className="relative flex h-32 items-center rounded-md border border-input bg-gradient-to-br from-stone-50/50 to-gray-300/50 p-2 shadow-sm transition-all dark:from-neutral-950 dark:to-zinc-950">
      <div className="absolute -bottom-40 left-0 right-0 flex flex-col items-center gap-2 laptop:-bottom-10 laptop:left-8 laptop:flex-row">
        <div className="relative">
          <Transmutation transition={transitions.reveal}>
            <Avatar className="min-h-24 min-w-24">
              <AvatarImage
                src={registry_myself.avatar_url || user?.avatar_url}
                alt={registry_myself.username}
              />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
          </Transmutation>
          <Dot className="absolute bottom-3 right-1" />
        </div>
        <div className="mt-2 flex h-auto w-full flex-col justify-center laptop:mt-0 laptop:w-auto">
          <Transmutation transition={transitions.reveal}>
            <div className="flex flex-row items-center gap-2 laptop:flex-col laptop:items-start laptop:gap-0">
              <h1 className="text-xl font-medium text-primary dark:text-primary">
                {user?.name || registry_myself.full_name}
                {" - "}
                <span className="text-base font-light tracking-normal text-primary/80 dark:text-primary/80">
                  ({user?.login || registry_myself.username})
                </span>
              </h1>
            </div>
          </Transmutation>
          <Transmutation transition={transitions.reveal}>
            <p className="my-0 text-sm text-primary/80">
              {user?.location || registry_myself.short_loading}
            </p>
            <em className="mt-0 text-sm text-muted-foreground/90 dark:text-muted-foreground laptop:my-2">
              &quot;{user?.bio || registry_myself.short_loading}
              .&quot;
            </em>
          </Transmutation>
          <Transmutation transition={transitions.reveal}>
            <span className="block text-end text-sm text-muted-foreground laptop:hidden laptop:text-start">
              Actual Company:{" "}
              <span className="text-primary">
                {user?.company || registry_myself.short_loading}
              </span>
            </span>
          </Transmutation>
        </div>
      </div>
      <div className="absolute bottom-2 right-8 hidden laptop:block">
        <span className="text-sm text-muted-foreground">
          Actual Company:{" "}
          <span className="text-primary">
            {user?.company || registry_myself.short_loading}
          </span>
        </span>
      </div>
      <Transmutation className="h-full w-full" transition={transitions.reveal}>
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        />
      </Transmutation>
    </div>
  );
};
