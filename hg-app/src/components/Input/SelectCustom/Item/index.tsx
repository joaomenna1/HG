import React from "react";
import {
  Container,
  Content,
  Select,
  SelectText
} from "./styles";
import { FlatList, Text } from "react-native";

type ItemProps = {
  list: {
    label: string;
  }[];
  close: () => void;
  onChange: (...event: any[]) => void
};

const Item = ({
  list,
  close,
  onChange
}: ItemProps) => {

  const SelectItem = (item: string) => {
    close();
    onChange(item)

  }

  return (
    <Container activeOpacity={1} onPress={close}>
      <Content>
        <FlatList
          data={list}
          keyExtractor={(item) => item.label.toString()}
          renderItem={({ item }) => (
            <Select onPress={() => SelectItem(item.label)}>
              <SelectText>{item.label}</SelectText>
            </Select>
          )}
          contentContainerStyle={{ gap: 4 }}
        />

      </Content>

    </Container>
  );
};

export default Item;
