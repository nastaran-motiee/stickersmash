import { Image, type ImageSource } from "expo-image";
import { View } from "react-native";

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  return (
    <View style={{ position: "absolute", top: 50, left: 100 }}>
      <Image
        source={stickerSource}
        style={{ width: imageSize, height: imageSize, overflow: "visible" }}
      />
    </View>
  );
}
