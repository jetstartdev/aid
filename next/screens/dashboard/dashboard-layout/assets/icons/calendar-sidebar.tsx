import { Icon } from "@/components/ui/icon";
import { Path } from "react-native-svg";

export const CalendarSidebarIcon = (props: any) => {
  return (
    <Icon {...props} size="lg" viewBox="0 0 960 960">
      <Path 
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        d="M180 880q-24 0-42-18t-18-42V200q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600V390H180v430Zm0-490h600V260H180v70Zm100 210v-60h400v60H280Zm0 180v-60h279v60H280Z" 
      />
    </Icon>
  );
};