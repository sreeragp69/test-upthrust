import { HomeIcon, UsersIcon, CalendarIcon, SettingsIcon, BookOpenIcon, GraduationCapIcon, BriefcaseIcon, AwardIcon } from "../icons";

export interface NavItem {
  name: string;
  path?: string;
  icon: React.ReactNode;
  subItems?: NavItem[];
}

export const SIDEBAR_NAV_ITEMS: Record<string, NavItem[]> = {
  All: [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <HomeIcon className="w-5 h-5" />,
    },
    {
      name: "Courses",
      path: "/courses",
      icon: <BookOpenIcon className="w-5 h-5" />,
    },
    {
      name: "Students",
      path: "/students",
      icon: <UsersIcon className="w-5 h-5" />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <BriefcaseIcon className="w-5 h-5" />,
    },
    {
      name: "Certificates",
      path: "/certificates",
      icon: <AwardIcon className="w-5 h-5" />,
    },
    {
      name: "Calendar",
      path: "/calendar",
      icon: <CalendarIcon className="w-5 h-5" />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <SettingsIcon className="w-5 h-5" />,
    },
  ],

};
