import { Globe, MapPin, Send } from "lucide-react";
import ContactForm from "../ContactForm";
import Head from "../Head";
import { FC, ReactElement } from "react";
import { contactDetails } from "@/lib/static_data";
interface ContactInfoProps {
  icon: ReactElement;
  details: string;
}
const ContactSection = () => {
  return (
    <section id="contact" className="px-8 py-8 md:px-8 lg:px-28">
      <Head title="Get in Touch" />
      <div className="flex flex-col-reverse gap-5 lg:flex-row">
        <ul className="flex flex-col flex-1 gap-5">
          <ContactInfo
            icon={<MapPin className="w-12 h-12 stroke-[1.5px] " />}
            details={contactDetails.location}
          />
          <ContactInfo
            icon={<Send className="w-12 h-12 stroke-[1.5px]" />}
            details={contactDetails.email}
          />
          <ContactInfo
            icon={<Globe className="w-12 h-12 stroke-[1.5px] " />}
            details={contactDetails.website}
          />
        </ul>

        <ContactForm />
      </div>
    </section>
  );
};
const ContactInfo: FC<ContactInfoProps> = ({ icon, details }) => {
  return (
    <li className="flex flex-col items-center gap-5 lg:flex-row">
      <div className="p-5 bg-slate-50 text-primary-blue">{icon}</div>
      <p>{details}</p>
    </li>
  );
};

export default ContactSection;
