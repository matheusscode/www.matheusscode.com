import {
  ArmchairIcon,
  ArrowUpRight,
  AtSign,
  FileAxis3DIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  LucideIcon,
  NavigationIcon,
  SparklesIcon,
  Wand2Icon,
  YoutubeIcon,
} from "lucide-react";

export type NavigateLink = {
  id: number;
  path: string;
  label: string;
  target?: HTMLAnchorElement["target"];
  disabled?: boolean;
  iconLeft?: LucideIcon;
  iconRight?: LucideIcon;
};

export const registry_nav_links: NavigateLink[] = [
  {
    id: 1,
    path: "/",
    label: "Home",
    target: "_self",
    iconLeft: SparklesIcon,
  },
  // {
  //   id: 2,
  //   path: "/writing",
  //   label: "Writing",
  //   iconLeft: PencilLineIcon,
  // },
  {
    id: 2,
    path: "/journey",
    label: "Journey",
    target: "_self",
    iconLeft: NavigationIcon,
  },
  {
    id: 3,
    path: "/stack",
    label: "Stack",
    target: "_self",
    iconLeft: Wand2Icon,
  },
  // {
  //   id: 4,
  //   path: "/projects",
  //   label: "Projects",
  //   target: "_self",
  //   iconLeft: SquareKanbanIcon,
  // },
  {
    id: 5,
    path: "/workspace",
    label: "Workspace",
    target: "_self",
    iconLeft: ArmchairIcon,
  },
  // {
  //   id: 7,
  //   path: "/bookmarks",
  //   label: "Bookmarks",
  //   iconLeft: BookmarkIcon,
  // },
];

export const registry_social_links: NavigateLink[] = [
  {
    id: 1,
    path: "/curriculum",
    label: "Curriculum",
    target: "_self",
    iconLeft: FileAxis3DIcon,
    iconRight: ArrowUpRight,
  },
  {
    id: 2,
    path: "https://www.linkedin.com/in/matheussfigueiredo/",
    label: "Linkedin",
    target: "_target",
    iconLeft: LinkedinIcon,
    iconRight: ArrowUpRight,
  },
  {
    id: 3,
    path: "https://github.com/matheusscode",
    label: "Github",
    target: "_target",
    iconLeft: GithubIcon,
    iconRight: ArrowUpRight,
  },

  {
    id: 4,
    path: "https://www.threads.net/@matheusscode",
    label: "Threads",
    target: "_target",
    iconLeft: AtSign,
    iconRight: ArrowUpRight,
  },
  {
    id: 5,
    path: "https://www.instagram.com/matheusscode/",
    label: "Instagram",
    target: "_target",
    iconLeft: InstagramIcon,
    iconRight: ArrowUpRight,
  },

  {
    id: 6,
    path: "https://www.youtube.com/channel/UCiH_b6nMZNRYvRB86ApXKNA",
    label: "Youtube",
    target: "_target",
    iconLeft: YoutubeIcon,
    iconRight: ArrowUpRight,
  },
];
