import { Icon } from "@/components/ui/icon";
import { Path } from "react-native-svg";

export const HomeIcon = (props: any) => {
  return (
    <Icon {...props} viewBox="0 0 24 24">
      <Path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <Path d="M9 22V12h6v10" />
    </Icon>
  );
};