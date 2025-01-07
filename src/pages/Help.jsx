import { useState } from "react";
import Header from "../components/Header";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-dark">{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default function Help() {
  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "To place an order, simply browse restaurants, select your items, add them to cart, and proceed to checkout. You can pay online or choose cash on delivery.",
    },
    {
      question: "What are your delivery hours?",
      answer:
        "Our delivery hours vary by restaurant. Most restaurants deliver from 10:00 AM to 10:00 PM, but specific times can be found on each restaurant's page.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is confirmed, you can track it in real-time through the Orders section. You'll receive updates via notifications and SMS.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, bank transfers, and cash on delivery. All online payments are secure and encrypted.",
    },
  ];

  const supportCategories = [
    {
      title: "Order Issues",
      icon: "🛍️",
      description: "Problems with your current or past orders",
    },
    {
      title: "Account & Payment",
      icon: "💳",
      description: "Managing your account and payment methods",
    },
    {
      title: "Delivery",
      icon: "🚚",
      description: "Questions about delivery timing and locations",
    },
    {
      title: "Technical Support",
      icon: "🔧",
      description: "App and website technical issues",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8 mt-[100px] md:mt-[80px]">
        {/* Page Content */}
        {/* Help Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            How can we help you?
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions or get in touch with our support
            team
          </p>
        </div>

        {/* Support Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {supportCategories.map((category) => (
            <button
              key={category.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="font-medium text-dark mb-2">{category.title}</h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </button>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-dark mb-6">
            Frequently Asked Questions
          </h2>
          <div className="bg-white rounded-lg shadow-sm">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <h2 className="text-2xl font-bold text-dark mb-4">
            Still need help?
          </h2>
          <p className="text-gray-600 mb-6">
            Our support team is available 24/7 to assist you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary">Chat with Support</button>
            <button className="btn btn-secondary">Send Email</button>
          </div>
        </div>
      </div>
    </div>
  );
}
