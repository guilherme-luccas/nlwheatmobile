import React from "react";
import { ScrollView, Text } from "react-native";
import { styles } from "./styles";
import Message from "../Message";

export default function MessageList() {
  const message = {
    id: "1",
    text: "teste de mensagem",
    user: {
      name: "Guilherme",
      avatar_url: "",
    },
  };
  return (
    <ScrollView
      keyboardShouldPersistTaps="never"
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}
