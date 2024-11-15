import { View } from "react-native";

import Spacing from "../constants/Spacing";

type SpacerProps = {
  size?: (typeof Spacing)[keyof typeof Spacing];
};

const Spacer: React.FC<SpacerProps> = ({ size = Spacing.xM }) => {
  return <View style={{ height: size }} />;
};

export default Spacer;
