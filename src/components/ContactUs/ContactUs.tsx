// Internal Dependencies
import Section from "@components/Section";
import Heading from "@components/Heading";

export default function ContactUs() {
  return (
    <Section className="mt-8 bg-aesthetic items-center justify-center bg-center h-[60vh] md:items-start" fitHeight>
      <div className="flex flex-col justify-center gap-8 border-2 border-stone-400 rounded-2xl bg-stone-800/90 p-8 backdrop-blur-sm md:ml-8">
        <Heading className="text-4xl text-stone-100">
          {"Get Started,"}<br/>
          <span className="text-2xl font-normal capitalize">{"Make your dream place a reality!"}</span>
        </Heading>
        <a className="rounded-2xl text-stone-100 px-6 py-4 text-center max-w-fit bg-stone-800">
          {"Book an Appointment"}
        </a>
      </div>
    </Section>
  );
}
