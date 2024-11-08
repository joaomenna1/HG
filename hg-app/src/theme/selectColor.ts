import theme from ".";

function selectColor(name: string | undefined) {
    const { colors } = theme;

    if (name === "white") return colors.base.white;
    
    if (name === "gray_1") return colors.base.gray_1;
    if (name === "gray_2") return colors.base.gray_2;
    if (name === "gray_3") return colors.base.gray_3;
    if (name === "gray_4") return colors.base.gray_4;
    if (name === "gray_5") return colors.base.gray_5;
    if (name === "gray_6") return colors.base.gray_6;
    if (name === "gray_7") return colors.base.gray_7;

    if (name === "red") return colors.brand.red;
    if (name === "blue") return colors.brand.blue;
    if (name === "green") return colors.brand.green;
    if (name === "yellow") return colors.brand.yellow;
    if (name === "primary") return colors.brand.primary;
    if (name === "secondary") return colors.brand.secondary; 
    
    if (name === "transparent") return "transparent";
    
    else return colors.base.gray_2;
}

export default selectColor