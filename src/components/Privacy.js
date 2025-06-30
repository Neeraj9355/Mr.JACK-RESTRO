import { useEffect } from "react";

const Privacy = () => {
  const lastUpdatedDate = "June 20, 2025"; // Replace with actual last updated date

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);
  
  return (
    <div className="min-h-[calc(100vh-200px)] bg-gray-50 p-6 md:p-10 lg:p-12 flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-10 max-w-4xl w-full text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight text-center">
          Privacy <span className="text-blue-600">Policy</span>
        </h1>
        <p className="text-sm text-gray-500 mb-8 text-center">
          Last Updated: {lastUpdatedDate}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            1. Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to the Swiggy Clone app. We are committed to protecting your privacy and handling your data in an open and transparent manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By using the Swiggy Clone app, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            2. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may collect both **"Personal Information"** and **"Non-Personal Information"** about you.
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
            <li>
              **Personal Information:** This includes data that can be used to identify you, such as your name, email address, phone number, delivery address, and payment information. We collect this when you register, place an order, or contact us.
            </li>
            <li>
              **Non-Personal Information:** This includes data that cannot be used to identify you personally, such as your browser type, operating system, app usage data, and aggregated demographic information. This is typically collected automatically as you interact with the app.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            3. How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
            <li>To provide, operate, and maintain our services.</li>
            <li>To process your orders and manage your account.</li>
            <li>To improve, personalize, and expand our services.</li>
            <li>To understand and analyze how you use our services.</li>
            <li>To develop new products, services, features, and functionality.</li>
            <li>To communicate with you, including for customer service and updates.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            4. Disclosure of Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may share your information with third parties in the following situations:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
            <li>
              **Service Providers:** With third-party vendors and service providers who perform services on our behalf (e.g., payment processing, delivery partners).
            </li>
            <li>
              **Legal Requirements:** When required by law or in response to valid requests by public authorities.
            </li>
            <li>
              **Business Transfers:** In connection with a merger, sale of company assets, or acquisition of all or a portion of our business.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            5. Security of Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            6. Your Choices Regarding Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You have certain rights regarding the personal information we hold about you. These may include the right to access, correct, update, or request deletion of your information. Please contact us to exercise these rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            7. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;