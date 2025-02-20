import { View } from "react-native";
import Rive, { Alignment, Fit } from "rive-react-native";

export default function AnimationOne() {
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
          resourceName="social_login_remake"
          animationName="social_login_rmk_os"
          style={{ width: "100%", aspectRatio: 1 }}
          fit={Fit.FitWidth}
          alignment={Alignment.Center}
        />
      </View>
    </View>
  );
}
