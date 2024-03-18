import { Box } from "@chakra-ui/react";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import InnerForm from "./components/innerForm";
import { withFormik } from "formik";
import DBInstance from "../../../../api/axios-instance";

import { FormProps, FormValues } from "./types";

function TweetSection() {
  const { user, login } = useAppSelector((state) => state.auth);

  const postTweet = async (tweet: string) => {
    if (login) {
      await DBInstance.post("/tweets", {
        userId: user.id,
        tweet,
        userName: user.name,
      });
    } else {
      alert("Please login first");
    }
  };

  const MyForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: (props) => ({
      tweet: props.initialTweet || "",
    }),
    handleSubmit({ tweet }: FormValues, { resetForm }) {
      postTweet(tweet);
      resetForm();
    },
  })(InnerForm);

  return (
    <Box
      sx={{
        marginBottom: "40px",
      }}
    >
      <MyForm />
    </Box>
  );
}

export default TweetSection;
