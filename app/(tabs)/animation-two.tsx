import { View } from "react-native";
import Rive, { Alignment, Fit } from "rive-react-native";

export default function AnimationTwo() {
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
          resourceName="social_login"
          stateMachineName="social_login_sm"
          style={{ width: "100%", aspectRatio: 1 }}
          fit={Fit.FitWidth}
          alignment={Alignment.Center}
        />
      </View>
    </View>
  );
}
