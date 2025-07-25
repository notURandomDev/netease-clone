import { View, Text, Image } from "@tarojs/components";
import "./indexSCF.scss";
import { Ellipsis } from "@taroify/icons";

export default function SongContainerFav({
  imgUrl,
  title,
  artist,
  onClick,
  onIconClick,
}) {
  return (
    <View className="containerSCF" onClick={onClick}>
      <Image className="coverSCF" src={imgUrl} />
      <View className="textContainerSCF">
        <Text className="titleSCF">{title}</Text>
        <View className="artistSCF">{artist}</View>
      </View>
      <View
        className="iconControllerSCF"
        style={{
          transform: "rotate(90deg)",
          transformOrigin: "center",
        }}
        onClick={onIconClick}
      >
        <Ellipsis className="playIconSCF" size="25" />
      </View>
    </View>
  );
}
