import styled from 'styled-components/native'

import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  padding: 150px 24px;

  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

  margin: 20px 0;
  
  text-align: center;
`

export const Subtitle = styled.Text`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.orange};
`

export const Photo = styled.Image`
  width: ${RFValue(360)}px;
  height: ${RFValue(210)}px;
`