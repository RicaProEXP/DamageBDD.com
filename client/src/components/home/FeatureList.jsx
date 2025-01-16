import React from 'react';
import { motion } from 'framer-motion';

const FeatureList = () => {
  const features = [
    { name: 'HTTP/REST API for submitting features for execution with simple result', status: 'done' },
    { name: 'Scheduled test execution and continuous testing configuration', status: 'testing' },
    { name: 'Bitcoin + DeFi Smartcontract based accounting and payment system', status: 'testing' },
    { name: 'Account management for KYC/AML regulatory compliance', status: 'testing' },
    { name: 'Secrets management and variable templatization', status: 'testing' },
    { name: 'Ipfs Reporting and report management API', status: 'testing' },
    { name: 'Events triggers for outbound Webhooks', status: 'testing' },
    { name: 'Metrics and Analytics Dashboard', status: 'in-progress' },
    { name: 'Selenium integration for browser Testing', status: 'analysis' },
    { name: 'Appium integration for mobile ecosystem support', status: 'analysis' },
    { name: 'SSH Reverse tunneling for localhost testing', status: 'testing' },
    { name: 'AI assisted BDD scenario generation', status: 'analysis' },
    { name: 'AI code generation and modification based on features, and self verification', status: 'testing' },
    { name: '"Super Step" user defined high level abstractions', status: 'analysis' },
    { name: 'Zero Knowledge Proof based contracts to validate tests and approve payouts', status: 'analysis' },
    { name: 'DamageBDD DeFi market making for test writers and stakeholders', status: 'analysis' },
    { name: 'Damage Tokens to power collaborative testing at scale ensuring continuous resilience', status: 'done' },
  ];

  const userRoles = [
    { role: 'End User', useCase: 'initial requirements, feature requests, defect reporting' },
    { role: 'Product Support', useCase: 'feature requests, isolating defect behaviour, edge cases, monitoring, alerting' },
    { role: 'QA', useCase: 'define expected behaviours, continuous monitoring, reporting, alerts' },
    { role: 'Infra', useCase: 'availability monitoring, endpoint latency reporting, alerts' },
    { role: 'Development', useCase: 'prototyping, maintenance, verification, continuous monitoring' },
    { role: 'Management', useCase: 'project velocity, current progress, performance metrics, fund allocation' },
  ];

  const useCases = [
    'Web2 application server and browser performance, quality and availability',
    'Web3 Smartcontract continuous auditing',
    'Infrastructure availability expectation management',
    'General Process Execution orchestration through custom Step implementations',
    'General Behaviour verification based on custom input sources',
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'done':
        return '#34D399'; // green
      case 'testing':
        return '#FBBF24'; // yellow
      case 'in-progress':
        return '#3B82F6'; // blue
      case 'analysis':
        return '#9B4DCA'; // purple
      default:
        return '#D1D5DB'; // gray
    }
  };

  return (
    <div style={{ padding: '2rem', color: 'white', fontFamily: 'sans-serif' }}>
      <motion.h2
        style={{ fontSize: '2rem', fontWeight: '700', color: 'white', textAlign: 'center' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        DamageBDD Features and Status
      </motion.h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          marginTop: '2rem',
        }}
      >
        {/* Features Section */}
        <motion.div
          style={{
            backgroundColor: '#2D3748',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 style={{ color: '#E2E8F0', marginBottom: '1rem', textAlign: 'center' }}>Key Features</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#1A202C',
                  padding: '1rem',
                  borderRadius: '8px',
                  textAlign: 'left',
                  transition: 'transform 0.2s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <h4 style={{ color: '#FFFFFF', marginBottom: '0.5rem' }}>{feature.name}</h4>
                <p
                  style={{
                    color: getStatusColor(feature.status),
                    fontWeight: 'bold',
                  }}
                >
                  {feature.status.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* User Roles Section */}
        <motion.div
          style={{
            backgroundColor: '#2D3748',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h3 style={{ color: '#E2E8F0', marginBottom: '1rem', textAlign: 'center' }}>User Roles</h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            {userRoles.map((userRole, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#1A202C',
                  padding: '1rem',
                  borderRadius: '8px',
                  textAlign: 'left',
                }}
              >
                <h4 style={{ color: '#FFFFFF', marginBottom: '0.5rem' }}>{userRole.role}</h4>
                <p style={{ color: '#A0AEC0' }}>{userRole.useCase}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases Section */}
        <motion.div
          style={{
            backgroundColor: '#2D3748',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h3 style={{ color: '#E2E8F0', marginBottom: '1rem', textAlign: 'center' }}>Use Cases</h3>
          <ul style={{ color: '#A0AEC0', paddingLeft: '1rem', listStyleType: 'disc' , textAlign: 'center' }}>
            {useCases.map((useCase, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>
                {useCase}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureList;
