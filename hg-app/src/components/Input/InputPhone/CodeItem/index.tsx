import React from "react";
import { Container, ContainerImage, ContainerText } from "./styles";
import { ICodes } from "..";

type IProps = {
  dataItem: ICodes;
  setSelectedArea: (country: any) => void;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const CodeItem = ({ dataItem, setSelectedArea, setModalVisible }: IProps) => {
  return (
    <Container
      onPress={() => {
        setSelectedArea(dataItem), setModalVisible(false);
      }}
    >
      <ContainerImage source={{ uri: dataItem.flag }} />

      <ContainerText>
        {dataItem.name} {dataItem.callingCode}
      </ContainerText>
    </Container>
  );
};

export default CodeItem;
