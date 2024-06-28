"use client";
import { useForm } from "react-hook-form";
import TextAreaInput from "./ui/TextAreaInput";
import TextInput from "./ui/TextInput";

const ContactForm = () => {
  const { register, formState: errors } = useForm();
  return (
    <form className="flex flex-col flex-1 gap-4">
      <TextInput
        name="name"
        register={register}
        errors={errors}
        placeholder="name"
        type="text"
        isRequired={true}
      />
      <TextInput
        name="email"
        register={register}
        errors={errors}
        placeholder="Email"
        type="email"
        isRequired={true}
      />
      <TextInput
        name="Subject"
        register={register}
        errors={errors}
        placeholder="Subject"
        type="text"
        isRequired={true}
      />
      <TextAreaInput
        name="Subject"
        register={register}
        errors={errors}
        placeholder="Subject"
        isRequired={true}
      />
      <button className="w-full py-3 text-white bg-primary-blue">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
