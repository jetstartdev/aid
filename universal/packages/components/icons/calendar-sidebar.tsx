import { Icon } from "@/components/ui/icon";
import { Path } from "react-native-svg";

export const CalendarSidebarIcon = (props: any) => {
  return (
    <Icon {...props} viewBox="0 -960 960 960">
      <Path 
        fill="currentColor"
        d="M180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Zm0-490h600v-130H180v130Zm0 0v-130 130Zm100 210v-60h400v60H280Zm0 180v-60h279v60H280Z" 
      />
    </Icon>
  );
};