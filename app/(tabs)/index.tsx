import { View } from "react-native";

import Rive, { Alignment, Fit } from "rive-react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          aspectRatio: 1,
          alignItems: "center",
          marginTop: 98,
        }}
      >
        <Rive
          autoplay
          resourceName="intro_chainless_sm"
          stateMachineName="intro_chainless_sm"
          style={{ width: "100%", aspectRatio: 1 }}
          fit={Fit.FitWidth}
          alignment={Alignment.Center}
        />
      </View>
    </View>
  );
}
