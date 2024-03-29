import { Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import TopBarStats from './TopBarStats';

const TopBar = () => {
  const bgColor = useColorModeValue('gray.50', 'whiteAlpha.100');

  return (
    <Flex
      py={ 2 }
      px={ 6 }
      bgColor={ bgColor }
      justifyContent="space-between"
    >
      <TopBarStats/>
    </Flex>
  );
};

export default React.memo(TopBar);
