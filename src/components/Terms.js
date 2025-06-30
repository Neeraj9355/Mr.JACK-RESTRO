import { useEffect } from "react";

const Terms = () => {
  const lastUpdatedDate = "June 20, 2025"; // Replace with your actual last updated date
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[calc(100vh-200px)] bg-gray-50 p-6 md:p-10 lg:p-12 flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-10 max-w-4xl w-full text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight text-center">
          Terms of <span className="text-blue-600">Service</span>
        </h1>
        <p className="text-sm text-gray-500 mb-8 text-center">
          Last Updated: {lastUpdatedDate}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            By accessing or using the Swiggy Clone application ("the App"), you
            agree to be bound by these Terms of Service ("Terms"), all
            applicable laws and regulations, and agree that you are responsible
            for compliance with any applicable local laws. If you do not agree
            with any of these Terms, you are prohibited from using or accessing
            this App.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            2. Use License
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4 mb-4">
            <li>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on Swiggy Clone App for
              personal, non-commercial transitory viewing only. This is the
              grant of a license, not a transfer of title.
            </li>
            <li>
              This license shall automatically terminate if you violate any of
              these restrictions and may be terminated by Swiggy Clone App at
              any time.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            3. Disclaimer
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The materials on Swiggy Clone App are provided on an 'as is' basis.
            Swiggy Clone App makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            4. Limitations
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In no event shall Swiggy Clone App or its suppliers be liable for
            any damages (including, without limitation, damages for loss of data
            or profit, or due to business interruption) arising out of the use
            or inability to use the materials on Swiggy Clone App, even if
            Swiggy Clone App or a Swiggy Clone App authorized representative has
            been notified orally or in writing of the possibility of such
            damage.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            5. Accuracy of Materials
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The materials appearing on Swiggy Clone App could include technical,
            typographical, or photographic errors. Swiggy Clone App does not
            warrant that any of the materials on its App are accurate, complete
            or current. Swiggy Clone App may make changes to the materials
            contained on its App at any time without notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            6. Links
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Swiggy Clone App has not reviewed all of the sites linked to its App
            and is not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement by Swiggy Clone App
            of the site. Use of any such linked website is at the user's own
            risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            7. Modifications
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Swiggy Clone App may revise these Terms of Service for its App at
            any time without notice. By using this App you are agreeing to be
            bound by the then current version of these Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
            8. Governing Law
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            These terms and conditions are governed by and construed in
            accordance with the laws of Ghaziabad, Uttar Pradesh, India, and you
            irrevocably submit to the exclusive jurisdiction of the courts in
            that State or location.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
