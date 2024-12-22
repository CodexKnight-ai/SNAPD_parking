import React from "react";

function TandC() {
  return (
    <div className="mt-20 sm:mt-20 p-6 sm:p-10 bg-primary h-full w-full text-daisy font-poppins shadow-lg">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-blue-300">
        Terms and Conditions
      </h2>

      <p className="mb-4 leading-relaxed text-justify">
        Welcome to the SNAPD Automatic Parking System. By accessing or using
        our services, you agree to comply with and be bound by the terms
        outlined below. Please review them carefully to understand your rights
        and responsibilities.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-200">
        1. Data Collection and Usage
      </h3>
      <p className="mb-4 leading-relaxed text-justify">
        We collect essential data, including login credentials, to facilitate
        authentication and improve system security. This information helps us
        verify user identities, prevent unauthorized access, and enhance
        operational efficiency. All data is stored securely and used solely for
        system operations, ensuring a safe and customized experience.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-200">
        2. Privacy and Confidentiality
      </h3>
      <p className="mb-4 leading-relaxed text-justify">
        We are committed to protecting your personal information. Your data is
        handled in accordance with our privacy policy, which outlines how we
        collect, use, and protect it. We do not share your data with third
        parties without consent, except as required by law.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-200">
        3. Account Responsibility
      </h3>
      <p className="mb-4 leading-relaxed text-justify">
        You are responsible for keeping your login credentials secure.
        Unauthorized sharing or misuse of your account may result in temporary
        or permanent suspension of access to the SNAPD system. Please notify us
        immediately if you suspect any unauthorized use of your account.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-200">
        4. Service Modifications
      </h3>
      <p className="mb-4 leading-relaxed text-justify">
        We reserve the right to modify or discontinue any aspect of the SNAPD
        system without prior notice. Additionally, these terms may be updated
        periodically to reflect policy or legal changes. Continued use of our
        services after modifications indicates acceptance of the revised terms.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-200">
        5. Compliance with Laws
      </h3>
      <p className="mb-4 leading-relaxed text-justify">
        By using our service, you agree to comply with all applicable local,
        state, and federal laws related to parking and data protection. Misuse
        of the platform, including attempts to bypass security features or
        unauthorized data access, is strictly prohibited.
      </p>

      <p className="mt-6 leading-relaxed text-justify">
        If you have questions or require clarification, please contact our
        support team. Your continued use of the SNAPD Automatic Parking System
        constitutes full acceptance and understanding of these terms and
        conditions.
      </p>
    </div>
  );
}

export default TandC;
