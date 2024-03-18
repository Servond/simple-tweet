import { Button, FormControl, Textarea } from "@chakra-ui/react";
import { FormikProps, Form } from "formik";
import { FormValues } from "../types";

export default function InnerForm(props: FormikProps<FormValues>) {
  const { values, handleChange, handleSubmit, isSubmitting } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl>
        <Textarea
          placeholder="Your Tweet Here"
          name="tweet"
          size="md"
          resize="none"
          maxLength={64}
          onChange={handleChange}
          value={values.tweet}
        />
      </FormControl>
      <Button
        size="sm"
        sx={{ marginTop: "5px" }}
        type="submit"
        disabled={isSubmitting}
      >
        Tweet
      </Button>
    </Form>
  );
}
