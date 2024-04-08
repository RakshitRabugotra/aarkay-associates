// Internal Dependencies
import Section from "@components/Section";

export default function ContactUs() {
  return (
    <Section className="bg-aesthetic items-center justify-center bg-center">
      <div className="flex flex-col justify-around gap-24 rounded-3xl bg-stone-800 bg-opacity-40 p-8 backdrop-blur-sm">
        <span className="text-2xl font-medium text-stone-100">
          {"Book an appointment now, make your dream place a reality!"}
        </span>
        <a className="rounded-2xl bg-stone-100 bg-opacity-80 px-6 py-4 text-center text-stone-800">
          {"Book an Appointment"}
        </a>
      </div>
    </Section>
  );
}
