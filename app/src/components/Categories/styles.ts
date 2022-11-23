import styled from 'styled-components/native';

import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const CategoryContainer = styled.TouchableOpacity`
  align-items: center;
  margin-left: 24px;
`;

export const Icon = styled.View`
  background: #fff;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  box-shadow: ${isAndroid
    ? '0px 2px 1px rgba(0, 0, 0, 1);'
    : '0px 2px 1px rgba(0, 0, 0, 0.1);'};
  elevation: 2;
`;
