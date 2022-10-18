import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";

import { BoxContainer, ButtonText } from "./styles";

interface ButtonProps {
  children: ReactNode
  onPress: () => void
  minimal?: boolean
}

export function Button({ children, onPress, minimal }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <BoxContainer>
        <ButtonText minimal={minimal}>
          {children}
        </ButtonText>
        </BoxContainer>
    </TouchableOpacity>
  )
}