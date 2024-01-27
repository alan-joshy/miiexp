import {
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  useColorMode,
  useDisclosure,
  Skeleton,
} from '@chakra-ui/react';
import React from 'react';
const ColorModeSwitch = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { setColorMode } = useColorMode();

  // Set to dark mode on component mount
  React.useEffect(() => {
    setColorMode('dark');
  }, [setColorMode]);
};

export default ColorModeSwitch;
