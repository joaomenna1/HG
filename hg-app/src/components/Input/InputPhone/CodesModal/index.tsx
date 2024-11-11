import React from "react";
import { Container, ListCodes } from "./styles";
import CodeItem from "../CodeItem";
import { ICodes } from "..";

type CodesModalProps = {
  data: ICodes[];
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedArea: (country: any) => void;
};

const CodesModal = ({
  data,
  setModalVisible,
  setSelectedArea,
}: CodesModalProps) => {
  return (
    <Container>
      <ListCodes
        data={data}
        renderItem={({ item }) => (
          <CodeItem
            dataItem={item as ICodes}
            setSelectedArea={setSelectedArea}
            setModalVisible={setModalVisible}
          />
        )}
        keyExtractor={(item: any) => item.code}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={44}
      />
    </Container>
  );
};

export default CodesModal;
