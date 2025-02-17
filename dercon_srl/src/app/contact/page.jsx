import dynamic from "next/dynamic";
const ContactContainer = dynamic(() =>
  import("@/assets/components/contact/ContactContainer")
);
export default function Page() {
  return <ContactContainer />;
}
