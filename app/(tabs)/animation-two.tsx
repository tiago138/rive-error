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
          resourceName="unique_signature_remake"
          animationName="unique_signature_rmk_os"
          style={{ width: "100%", aspectRatio: 1 }}
          fit={Fit.FitWidth}
          alignment={Alignment.Center}
        />
      </View>
    </View>
  );
}
