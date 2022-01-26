import React from 'react';
import styled from 'styled-components/native';
import WebView from 'react-native-webview';
import {Platform} from 'react-native';

import {Text} from '../Text';

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === 'android';

export const CompactRestaurantInfo = ({restaurant, isMap}) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;
  const photos = restaurant?.item
    ? restaurant?.item?.photos[0]
    : restaurant.photos[0];

  return (
    <Item>
      <Image source={{uri: photos}} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name + 1}
      </Text>
    </Item>
  );
};
