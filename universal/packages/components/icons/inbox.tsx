import { Icon } from "@/components/ui/icon";
import { Path } from "react-native-svg";

export const InboxIcon = (props: any) => {
  return (
    <Icon {...props} viewBox="0 0 24 24">
      <Path d="M22 12h-6l-2 3h-4l-2-3H2" />
      <Path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </Icon>
  );
};