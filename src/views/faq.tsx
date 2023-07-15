import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";

const faqs = [
  {
    question: "Will you work on my existing project?",
    answer:
      "No. We only work on new projects or projects started by us. We do this to ensure that we can deliver code that we're proud of.",
  },
  {
    question: "Can you work on backend tasks?",
    answer:
      "In the future we are planning to offer Supabase as a backend. Currently we don't offer backend services.",
  },
  {
    question: "What if I don't like the code?",
    answer:
      "Submit a new request in the queue specifying what you don't like. The feedback loop is a typical workflow for us and we won't be offended if you want things a different way.",
  },
  {
    question: "How long will it take to get my project done?",
    answer:
      "It's counter-productive for us to give accurate estimates. We work on your project every weekday. Typically landing pages take five weekdays, but this depends on the complexity of the design provided.",
  },
  {
    question: "Do you offer design services?",
    answer:
      "No. We expect you to provide use with a design. We take all forms of designs including Figma, Adobe, Sketch, Framer, and more. We will even work off your notepad scratches if that's how you roll.",
  },
  {
    question: "How does pausing work?",
    answer:
      "You can pause your subscription at any time. We will stop working on your task queue and you will not be billed. You can resume your subscription at any time.",
  },
];

const FAQ = () => {
  return (
    <div className="flex w-full flex-col items-center gap-12">
      <span className="flex flex-col items-center gap-3">
        <h2 className="max-w-[40rem] text-xl font-bold text-green-500 sm:text-2xl">
          FAQ
        </h2>
        <h1 className="max-w-[44rem] text-center text-4xl font-bold sm:text-5xl">
          Learn our secrets
        </h1>
        <p className="mt-2 text-neutral-500">
          Let&apos;s be upfront about how we work.
        </p>
      </span>

      <Accordion
        type="multiple"
        className="flex w-full max-w-[600px] flex-col justify-stretch"
      >
        {faqs.map((faq) => (
          <AccordionItem value={faq.question} key={faq.question}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
