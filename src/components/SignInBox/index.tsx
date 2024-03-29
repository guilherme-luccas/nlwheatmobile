import React from "react";
import { View, Text } from "react-native";

import { styles } from "./style";
import Button from "../Button";
import { COLORS } from "../../theme";

export default function SignInBox() {
  return (
    <View style={styles.container}>
      <Button
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
      />
    </View>
  );
}
