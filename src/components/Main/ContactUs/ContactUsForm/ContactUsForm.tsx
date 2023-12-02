import {
  ArrowContainer,
  ErrorContainer,
  Form,
  FormButton,
  FormButtonTitle,
  FormInput,
  FormLabel,
  FormTextArea,
} from "./ContactUsForm.styled";
import { SendArrow } from "../../../Svgs/Svgs";
import { useFormik } from "formik";
import * as Yup from "yup";
export const ContactUsForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Full name is required")
      .matches(/^[^\d]+$/, "Wrong Fullname"),
    email: Yup.string().required("E-mail is required").email("Wrong email"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^\d{12}$/, "Wrong phone"),
  });

  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "", msg: "" },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);
      resetForm();
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormLabel>
        * Full name:
        <FormInput
          onChange={formik.handleChange}
          value={formik.values.name}
          id="name"
          onBlur={formik.handleBlur}
          haserror={(formik.touched.name && !!formik.errors.name)?.toString()}
          placeholder="John Rosie"
        />
        {formik.touched.name && formik.errors.name && (
          <ErrorContainer>{formik.errors.name}</ErrorContainer>
        )}
      </FormLabel>
      <FormLabel>
        * E-mail:
        <FormInput
          onChange={formik.handleChange}
          value={formik.values.email}
          id="email"
          onBlur={formik.handleBlur}
          haserror={(formik.touched.email && !!formik.errors.email)?.toString()}
          placeholder="johnrosie@gmail.com"
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorContainer>{formik.errors.email}</ErrorContainer>
        )}
      </FormLabel>
      <FormLabel>
        * Phone:
        <FormInput
          onChange={formik.handleChange}
          value={formik.values.phone}
          id="phone"
          onBlur={formik.handleBlur}
          haserror={(formik.touched.phone && !!formik.errors.phone)?.toString()}
          placeholder="380961234567"
        />
        {formik.touched.phone && formik.errors.phone && (
          <ErrorContainer>{formik.errors.phone}</ErrorContainer>
        )}
      </FormLabel>
      <FormLabel>
        Message:
        <FormTextArea
          onChange={formik.handleChange}
          value={formik.values.msg}
          id="msg"
          onBlur={formik.handleBlur}
          placeholder="Your message"
        />
      </FormLabel>
      <FormButton type="submit">
        <FormButtonTitle>Send</FormButtonTitle>
        <ArrowContainer>
          <SendArrow />
        </ArrowContainer>
      </FormButton>
    </Form>
  );
};
