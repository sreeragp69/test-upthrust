// Types for AppHeader navigation items
export interface CourseItem {
  courseImg: string;
  courseName: string;
  description:string;
}

export interface AppHeaderItem {
  id: number;
  name: string;
  path: string;
  isDropdown?: boolean;
  dropdownList?: CourseItem[];
}

// Type for the AppHeaderData array
export type AppHeaderData = AppHeaderItem[];

// Props for the AppHeader component
export interface AppHeaderProps {
  // Currently no props are passed to AppHeader, but this can be extended in the future
}

// State types for AppHeader component
export interface AppHeaderState {
  isApplicationMenuOpen: boolean;
}

// User type from Redux store
export interface User {
  id?: string;
  name?: string;
  email?: string;
  // Add other user properties as needed
}

// Redux state type
export interface AuthState {
  user: User | null;
  // Add other auth state properties as needed
}

// Root state type
export interface RootState {
  auth: AuthState;
  // Add other slice types as needed
}
