import styled from 'styled-components/native'

import { Feather } from '@expo/vector-icons'

import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: ${RFValue(113)}px;
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.primary};
`

export const Title = styled.Text`
  font-size: ${RFValue(26)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};

  padding-left: ${RFValue(16)}px;
` 