import { Send } from "lucide-react";
import Head from "../Head";
import ContactForm from "../ContactForm";

const ContactSection = () => {
  return (
    <section className="px-8 py-8 md:px-8 lg:px-28">
      <Head title="Get in Touch" />
      <div className="flex flex-col-reverse gap-5 lg:flex-row">
        <ul className="flex flex-col flex-1 gap-5">
          <ContactInfo />
          <ContactInfo />
          <ContactInfo />
          <ContactInfo />
        </ul>

        <ContactForm />
      </div>
    </section>
  );
};
const ContactInfo = () => {
  return (
    <li className="flex flex-col items-center gap-5 lg:flex-row">
      <div className="p-5 bg-slate-50 text-primary-blue">
        <Send className="w-12 h-12 stroke-[1.5px]" />
      </div>
      <p>A104 Waiyaki Way, Nairobi, 00100, Kenya</p>
    </li>
  );
};

export default ContactSection;
