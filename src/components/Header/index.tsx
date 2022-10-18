import { TouchableOpacity } from "react-native";

import { Container, Icon, Title } from "./styles";

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <Container>
      <TouchableOpacity>
        <Icon name="chevron-left" />
      </TouchableOpacity>
      <Title>{title}</Title>
    </Container>
  )
}