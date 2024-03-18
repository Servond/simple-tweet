import { Box, Container } from "@chakra-ui/react";
import { withFormik } from "formik";
import * as Yup from "yup";

import { FormValues, FormProps } from "./types";
import DBInstance from "../../api/axios-instance";

import InnerForm from "./components/innerForm";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function Register() {
  const register = async (props: FormValues) => {
    const { name, email, password } = props;
    await DBInstance.post("users", {
      name,
      email,
      password,
    });
  };

  const MyForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: (props) => ({
      name: props.initialName || "",
      email: props.initialEmail || "",
      password: props.initialPassword || "",
    }),
    validationSchema: RegisterSchema,
    enableReinitialize: true,
    handleSubmit({ name, email, password }: FormValues, { resetForm }) {
      register({ name, email, password });
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
