export interface AchievementCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

export interface UpthrustAchievementProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  achievements: AchievementCardProps[];
}