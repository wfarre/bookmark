import Dropdown from "../Dropdown/Dropdown";

const faqs = [
  {
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit. More Info 35,000+ already joined Stay up-to-date with what we’re doing Contact Us Features Pricing Contact",
  },
];

type Props = {};

const SectionFaq = (props: Props) => {
  return (
    <section className="section section--faq">
      <header className="section__header">
        <h2 className="title">Frequently Asked Questions</h2>
        <p className="description">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </header>

      <div className="section__content">
        <div className="container container--col">
          {faqs.map((faq) => {
            return <Dropdown question={faq.question} answer={faq.answer} />;
          })}
        </div>
      </div>

      <footer className="section__footer">
        <a className="btn btn--blue" href="#app">
          More info
        </a>
      </footer>
    </section>
  );
};

export default SectionFaq;
