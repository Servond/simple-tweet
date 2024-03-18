import { Box, Container } from "@chakra-ui/react";
import { withFormik } from "formik";
import * as Yup from "yup";

import { FormValues, FormProps } from "./types";
import DBInstance from "../../api/axios-instance";
import InnerForm from "./components/innerForm";
import { loginSuccess } from "../../redux/auth";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useNavigate } from "react-router-dom";

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const login = async (props: FormValues) => {
    const { data } = await DBInstance.get(
      `users?email=${props.email}&&password=${props.password}`
    );

    if (data.length > 0) {
      dispatch(loginSuccess(data));
      navigate("/");
    } else {
      alert("Username atau password tidak sesuai!");
    }
  };

  const MyForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: (props) => ({
      email: props.initialEmail || "",
      password: props.initialPassword || "",
    }),
    validationSchema: RegisterSchema,
    enableReinitialize: true,
    handleSubmit({ email, password }: FormValues, { resetForm }) {
      login({ email, password });
      resetForm();
    },
  })(InnerForm);

  return (
    <Box
      sx={{
        marginTop: "64px",
      }}
    >
      <Container>
        <MyForm />
      </Container>
    </Box>
  );
}
