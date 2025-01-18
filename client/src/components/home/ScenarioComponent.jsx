import React from 'react';

const ScenarioComponent = () => {
  // Gherkin code with proper formatting
  const codeString = `Feature: Test echo json functionality of JsonTest.com using HTTP API

  Scenario: GET request to JsonTest.com
    Given I am using server "http://echo.jsontest.com"
    When I make a GET request to "/key/value/one/two"
    Then the json at path "$.one" must be "one"`;

  return (
    <div
      className="bg-gray-900 rounded-lg p-6 md:p-8 lg:p-12 mx-auto max-w-4xl shadow-xl text-white font-sans mt-40"
      style={{ marginTop: '10rem' }} // Fallback for inline styles
    >
      {/* Header */}
      <h1 className="text-4xl font-bold text-white text-center mb-8">Scenario Component</h1>

      <h2 className="text-3xl text-blue-400 mb-8 text-center">
        Scenario: GET Request to JsonTest.com
      </h2>

      {/* Description */}
      <div className="bg-gray-800 rounded-lg px-6 py-8 md:px-12 md:py-10 lg:px-16 lg:py-12 max-w-screen-xl mx-auto mb-8 shadow-md">
        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
          This test case checks the server response from <strong>JsonTest.com</strong> for a specific
          GET request and verifies if the JSON response is as expected.
        </p>
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          <strong>DamageBDD</strong> is a platform that simplifies Behaviour Driven Development (BDD)
          by allowing cross-functional teams to define software behavior in plain, human-readable
          language. It supports functionality verification, performance testing, and integration with
          CI/CD workflows, ensuring high-quality and scalable software products.
        </p>
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          With DamageBDD, your team can perform automated tests for both functionality and performance,
          ensuring your applications can scale efficiently under load. All tests remain human-readable,
          making the process accessible to everyone involved in development and testing.
        </p>
      </div>

      {/* Gherkin Code */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-800 p-6 md:p-8 rounded-lg w-full max-w-2xl shadow-xl">
          <pre
            style={{
              background: '#1e1e2f',
              color: '#f8f8f2',
              padding: '20px',
              borderRadius: '12px',
              overflowX: 'auto',
              fontSize: '16px',
              whiteSpace: 'pre-wrap',
              fontFamily: '"Fira Code", "Courier New", monospace',
              textAlign: 'left',
            }}
          >
            <code>{codeString}</code>
          </pre>
        </div>
      </div>

      {/* Learn More Link */}
      <div className="text-center">
        <a
          href="https://damagebdd.com"
          className="text-blue-400 font-bold hover:underline text-lg transition-all duration-300 ease-in-out mt-6"
        >
          Learn more at DamageBDD
        </a>
      </div>
    </div>
  );
};

export default ScenarioComponent;
