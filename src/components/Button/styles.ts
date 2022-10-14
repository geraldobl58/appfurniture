import styled from 'styled-components/native'

import { RFValue } from 'react-native-responsive-fontsize'

interface TextProps {
  active: boolean
}

export const BoxContainer = styled.View`
  margin-bottom: ${RFValue(30)}px;
`

export const ButtonText = styled.Text<TextProps>`

  width: 300px;

  padding: 20px;

  border-radius: 8px;

  text-align: center;

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ active, theme }) => active 
    ? theme.colors.primary 
    : theme.colors.orange
  };
`

