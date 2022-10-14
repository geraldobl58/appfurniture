import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";

import { BoxContainer, ButtonText } from "./styles";

interface ButtonProps {
  children: ReactNode
  onPress: () => void
  active?: boolean
}

export function Button({ children, onPress, active }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <BoxContainer>
        <ButtonText active={active}>
          {children}
        </ButtonText>
        </BoxContainer>
    </TouchableOpacity>
  )
}