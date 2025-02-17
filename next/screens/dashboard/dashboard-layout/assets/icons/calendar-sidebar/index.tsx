import { Icon } from "@/components/ui/icon";

export const CalendarSidebarIcon = ({ size = 24, ...props }: any) => {
  return (
    <Icon size={size} viewBox="0 0 24 24" {...props}>
      <g 
        stroke="currentColor" 
        strokeWidth="1.5" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="stroke-background-400"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </g>
    </Icon>
  );
};