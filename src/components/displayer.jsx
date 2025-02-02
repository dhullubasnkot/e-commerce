import React, { useState } from "react";
import emailjs from "emailjs-com";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

const Display = ({
  heading,
  heading1,
  paragraph,
  heading2,
  paragraph2,
  button,
  inputType,
  button1,
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();

    const result = emailSchema.safeParse({ email });

    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setError(null);

    const templateParams = {
      to_email: email,
      subject: "Subscription Confirmation",
      message: `Thank you for subscribing to our newsletter! Email: ${email}`,
    };

    emailjs
      .send(
        "service_3zsx4al",
        "template_jvy8v9a",
        templateParams,
        "e2ei8qWz2u367exGe"
      )
      .then(
        (response) => {
          console.log("Success:", response);
          alert("Subscription successful!");
        },
        (error) => {
          console.log("Error:", error);
          alert("There was an error, please try again.");
        }
      );
  };

  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center bg-cover bg-center h-auto lg:h-[500px] px-8 py-12"
      style={{
        backgroundImage: `url('/grey.jpg')`,
      }}
    >
      <div className="max-w-lg space-y-6 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-red-500">
          {heading}
        </h1>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          {heading1}
        </h2>
        <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
          {paragraph}
        </p>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center">
          {heading2}
        </h1>
        <p className="text-gray-600 text-sm lg:text-base leading-relaxed text-center">
          {paragraph2}
        </p>

        {inputType && (
          <div className="relative">
            <input
              type={inputType}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="lg:w-[561px] lg:h-[60px] border rounded-full py-2 px-4 focus:outline-none"
              placeholder={`Enter your Email`}
            />
            {error && (
              <div className="text-red-500 text-sm absolute bottom-[-20px] left-0">
                {error}
              </div>
            )}
          </div>
        )}

        {button && (
          <button
            className="bg-red-500 lg:h-[46px] lg:w-[150px] rounded-full text-white font-medium py-3 px-6 hover:bg-red-600 transition"
            onClick={handleSubscribe}
          >
            {button}
          </button>
        )}
        {button1 && (
          <button
            className="bg-red-500 lg:h-[46px] lg:w-[275px] lg:ml-[90px] rounded-full text-white font-medium py-3 px-6 hover:bg-red-600 transition"
            onClick={handleSubscribe}
          >
            {button1}
          </button>
        )}
      </div>
    </div>
  );
};

export { Display };
