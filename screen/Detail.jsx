import { useRoute } from "@react-navigation/core";
import { Text } from "react-native";
import Banner from "../components/Banner";
import Wrapper from "../components/Wrapper";

const Detail = () => {
  const {
    params: { image, overview, original_title },
  } = useRoute();
  console.log(overview);
  return (
    <Wrapper>
      <Banner title={original_title} image={image} />
    </Wrapper>
  );
};

export default Detail;
