import { DefaultTheme } from "@react-navigation/native"
import colors from "./colors";
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: colors.background,
        text: "#FFF"
    },

};

export default theme