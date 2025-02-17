import { Icon } from "@/components/ui/icon";
import { Path, Circle } from "react-native-svg";

export const GlobeIcon = (props: any) => {
  return (
    <Icon {...props} viewBox="0 0 24 24">
      <Circle cx="12" cy="12" r="10" />
      <Path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </Icon>
  );
};