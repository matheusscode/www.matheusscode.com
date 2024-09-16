import { GithubProfile } from "@/interfaces/github";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/packages/components/ui/avatar";
import { Dot } from "@/packages/components/ui/dot";

export interface GithubProfileDetailsProps {
  user: GithubProfile;
}

export const GithubProfileDetails = ({ user }: GithubProfileDetailsProps) => {
  return (
    <div className="relative flex h-32 items-center rounded-md border border-input bg-gradient-to-br from-stone-50/50 to-gray-300/50 p-2 shadow-sm transition-all dark:from-transparent dark:to-zinc-900">
      <div className="absolute -bottom-11 left-8 flex items-center gap-2">
        <div className="relative">
          <Avatar className="min-h-24 min-w-24">
            <AvatarImage src={user.avatar_url} alt="@shadcn" />
            <AvatarFallback>{user.name}</AvatarFallback>
          </Avatar>
          <Dot className="absolute bottom-3 right-1" />
        </div>
        <div className="flex h-auto flex-col justify-center gap-0.5">
          <h1 className="text-xl font-medium text-primary dark:text-primary">
            {user.name}
            {" - "}
            <span className="text-base font-light tracking-normal text-primary/80 dark:text-primary/80">
              ({user.login})
            </span>
          </h1>
          <p className="mb-0 text-sm text-primary/80">{user.location}</p>
          <em className="dark:text-muted-foreground/ text-sm text-muted-foreground/90">
            &quot;{user.bio}.&quot;
          </em>
        </div>
      </div>
      <div className="absolute bottom-2 right-8">
        <span className="text-sm text-muted-foreground">
          Actual Company: <span className="text-primary">{user.company}</span>
        </span>
      </div>
    </div>
  );
};
