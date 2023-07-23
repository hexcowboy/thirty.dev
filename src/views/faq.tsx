import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";

const faqs = [
  {
    question: "How does this work?",
    answer: (
      <>
        Here is the general workflow after you purchase a subscription:
        <ol className="my-2 ml-8 list-outside list-decimal marker:text-neutral-500">
          <li>We send you a Trello board.</li>
          <li>
            You add tasks in the board including a link to your design and any
            images or assets.
          </li>
          <li>We work on your tasks from top to bottom.</li>
          <li>You get an email when a task has been completed.</li>
        </ol>
        Our speed and quality are attributed to the absence of meetings or
        unnecessary back-and-forths. In the event that you require changes after
        a request has been completed, you can simply add a new request to the
        queue.
      </>
    ),
  },
  {
    question: "How does pausing work?",
    answer:
      "You may pause your subscription at any time. We will stop working on your task queue and you will not be billed. You may resume your subscription at any time and we'll begin working where we left off.",
  },
  {
    question: "Why don't you work on existing projects?",
    answer:
      "We only work on projects started by us. We do this to ensure we can deliver fast without having to navigate an unfamiliar codebase.",
  },
  {
    question: "Why don't you offer backend services?",
    answer:
      "In the future we are planning to offer Supabase as a backend. Currently we don't offer backend services due to complexity.",
  },
  {
    question: "What if I'm not satisfied with a completed request?",
    answer:
      "Submit a new request in the queue specifying what you don't like. The feedback loop is a typical workflow for us and we won't be offended if you want things a different way.",
  },
  {
    question: "How long will it take to complete my project?",
    answer:
      "Estimates vary depending on request complexity. We work on your project every business day. Typically landing pages take five business days.",
  },
  {
    question: "Why don't you offer design services?",
    answer:
      "We are engineers, not designers. Please come with a design handy. We take all forms of designs including Figma, Adobe, Sketch, Framer, and more. We will even work off your notepad scratches if that's how you roll.",
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
          Get to know us
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
