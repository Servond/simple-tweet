import { Box, HStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../hooks/reduxHooks";
import { logoutSuccess } from "../../../redux/auth";

const NavbarMenu = () => {
  const login = useAppSelector((state) => state.auth.login);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Box>
      <HStack>
        {login ? (
          <Button variant="outline" onClick={() => dispatch(logoutSuccess())}>
            Logout
          </Button>
        ) : (
          <Box>
            <Button variant="outline" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button variant="outline" onClick={() => navigate("/register")}>
              Register
            </Button>
          </Box>
        )}
      </HStack>
    </Box>
  );
};

export default NavbarMenu;
