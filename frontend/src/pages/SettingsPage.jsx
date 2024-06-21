import { Button, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import useShowToast from "../hooks/useShowToast";
import useLogout from "../hooks/useLogout";

export const SettingsPage = () => {
  const showToast = useShowToast();
  const logout = useLogout();

  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.200", "gray.800");
  const textColor = useColorModeValue("black", "white");

  return (
    <>
      <Text my={2} fontWeight={"bold"}>
       Change Color Mode
      </Text>
      <Button size="sm" color={textColor} bg={bgColor} onClick={toggleColorMode}>
        {colorMode === "dark" ? "Dark" : "Light"}
      </Button>
    </>
  );
};
