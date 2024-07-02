"use client";
import { MessageData } from "@/lib/types";
import { send } from "@emailjs/browser";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrorAlert from "./ui/ErrorAlert";
import SuccessAlert from "./ui/SuccessAlert";
import TextAreaInput from "./ui/TextAreaInput";
import TextInput from "./ui/TextInput";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: errors,
  } = useForm<MessageData>();
  const [success, setSuccess] = useState<boolean | null>(null);
  const loading = useRef<boolean>(false);
  const alert = success ? (
    <SuccessAlert />
  ) : success == false ? (
    <ErrorAlert />
  ) : null;
  const sendEmail: SubmitHandler<MessageData> = async (data, e) => {
    e?.preventDefault();
    loading.current = true;
    await send(
      process.env.NEXT_PUBLIC_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
      data as Record<string, any>,
      {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      }
    )
      .then((res) => {
        if (res.status == 200) {
          setSuccess(true);
          loading.current = false;
          reset();
        } else {
          setSuccess(false);
          loading.current = false;
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <form
      method="post"
      onSubmit={handleSubmit(sendEmail)}
      className="flex flex-col flex-1 gap-4"
    >
      {alert}
      <TextInput
        name="username"
        register={register}
        errors={errors}
        placeholder="Firstname and Lastname"
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
        name="subject"
        register={register}
        errors={errors}
        placeholder="Subject"
        type="text"
        isRequired={true}
      />
      <TextAreaInput
        name="message"
        register={register}
        errors={errors}
        placeholder="Message"
        isRequired={true}
      />
      <button
        type="submit"
        className="w-full py-3 text-white bg-primary-blue"
        disabled={loading.current}
      >
        {loading.current ? "Sending message..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
