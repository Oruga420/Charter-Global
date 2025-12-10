'use client';

import { Mail, Phone, Linkedin, Globe, Github, Download } from 'lucide-react';
import dynamic from 'next/dynamic';

const Visuals = dynamic(() => import('../components/Visuals'), { ssr: false });

export default function Home() {

  const handlePrint = () => {
    window.print();
  };

  return (
    <main>
      <Visuals />
      
      <div className="container">
        {/* Header */}
        <div className="card" style={{ textAlign: 'center', borderBottom: '6px solid var(--border-color)' }}>
          <h1>Alejandro De La Mora</h1>
          <div className="header-contact" style={{ justifyContent: 'center' }}>
            <a href="mailto:alex@seshwithfriends.org"><Mail size={18} /> alex@seshwithfriends.org</a>
            <a href="tel:+14372433693"><Phone size={18} /> +1 437 243 3693</a>
            <a href="https://www.linkedin.com/in/amorac/" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /> LinkedIn</a>
            <a href="http://www.eloruga.com" target="_blank" rel="noopener noreferrer"><Globe size={18} /> Portfolio</a>
            <a href="https://github.com/Oruga420" target="_blank" rel="noopener noreferrer"><Github size={18} /> Github</a>
          </div>
        </div>

        {/* Download Button */}
        <div className="no-print" style={{ textAlign: 'right', marginBottom: '2rem' }}>
           <button onClick={handlePrint} className="btn">
              <Download size={20} /> Download PDF
           </button>
        </div>

        {/* Professional Summary */}
        <section className="card">
          <h2>Professional Summary</h2>
          <p>
            AI Solutions Architect with extensive experience designing over 120 GenAI applications and deploying scalable agentic workflows across AWS, GCP, and Vercel environments. Proven track record of saving over $1M in operational costs and 20,000+ man-hours through automation and RAG pipelines in regulated industries. Expert in driving AI adoption (from 47% to 97%) and mentoring engineering teams on secure, auditable AI implementation.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="card">
          <h2>Technical Skills</h2>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div>
              <strong>Cloud & Infrastructure:</strong>
              <div className="pill-container" style={{ marginTop: '0.5rem' }}>
                {['AWS (Bedrock, SageMaker)', 'Google Cloud Platform (GCP)', 'Vercel', 'Docker', 'CI/CD'].map(skill => (
                  <span key={skill} className="pill">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <strong>AI & ML:</strong>
              <div className="pill-container" style={{ marginTop: '0.5rem' }}>
                {['RAG Pipelines', 'Agentic Workflows', 'OpenAI APIs', 'Anthropic', 'Gemini', 'MCP Servers'].map(skill => (
                  <span key={skill} className="pill">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <strong>Development:</strong>
              <div className="pill-container" style={{ marginTop: '0.5rem' }}>
                {['Python', 'Next.js', 'Salesforce Development', 'Automation'].map(skill => (
                  <span key={skill} className="pill">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <strong>Methodologies:</strong>
              <div className="pill-container" style={{ marginTop: '0.5rem' }}>
                {['Agile', 'Scrum', 'Solution Architecture', 'Compliance & Governance'].map(skill => (
                  <span key={skill} className="pill">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="card">
          <h2>Professional Experience</h2>
          
          <div className="exp-item">
            <div className="exp-header">
              <div>
                <span className="exp-title">AI Solutions Architect</span> <span style={{margin: '0 0.5rem'}}>|</span> <span className="exp-company">Assent</span>
              </div>
              <span className="exp-date">Feb 2025 - Present</span>
            </div>
            <ul className="achievements">
              <li><strong>Scale & Impact:</strong> Architected secure GenAI stacks using OpenAI, Anthropic, and Gemini models with live RAG connections, saving the company over <strong>20,000 man-hours</strong> in one year (approx. <strong>$1M in savings</strong>).</li>
              <li><strong>Adoption:</strong> Increased internal AI tool adoption from <strong>47% to 97%</strong> by implementing user-centric agentic workflows and custom MCP servers.</li>
              <li><strong>Compliance:</strong> Designed compliance-focused AI solutions ensuring data safety and auditability within a regulated platform environment.</li>
              <li><strong>Governance:</strong> Established governance patterns allowing admins to move from prototype to production without compromising security or cost control.</li>
            </ul>
          </div>

          <div className="exp-item">
            <div className="exp-header">
              <div>
                <span className="exp-title">AI Solutions Architect</span> <span style={{margin: '0 0.5rem'}}>|</span> <span className="exp-company">Sesh | Ai Solutions</span>
              </div>
              <span className="exp-date">Nov 2021 - Present</span>
            </div>
            <ul className="achievements">
              <li><strong>Architecture:</strong> Designed and architected over <strong>120 GenAI applications</strong> and <strong>90+ chatbots</strong> for more than 30 diverse clients, solving complex day-to-day operational problems.</li>
              <li><strong>Integration:</strong> Built full-stack AI solutions integrating <strong>AWS</strong>, Vercel, and Salesforce to automate multi-step business processes.</li>
              <li><strong>Leadership:</strong> Lead a community of 100+ members, conducting webinars and tutorials (Latinas in Tech, Somos Latinos in Tech Ottawa) to bridge the gap between complex AI tech and practical business application.</li>
            </ul>
          </div>

          <div className="exp-item">
            <div className="exp-header">
              <div>
                <span className="exp-title">Salesforce Consultant</span> <span style={{margin: '0 0.5rem'}}>|</span> <span className="exp-company">Online Business Systems</span>
              </div>
              <span className="exp-date">Jun 2024 - Nov 2024</span>
            </div>
            <ul className="achievements">
              <li>Implemented <strong>Agentforce AI assistants</strong> and copilot-style experiences, defining use cases and wiring secure data access.</li>
              <li>Configured end-to-end setups for Marketing Cloud Account Engagement, aligning sales and marketing data through automation.</li>
            </ul>
          </div>

          <div className="exp-item">
            <div className="exp-header">
              <div>
                <span className="exp-title">Salesforce Manager</span> <span style={{margin: '0 0.5rem'}}>|</span> <span className="exp-company">Globalization Partners</span>
              </div>
              <span className="exp-date">Nov 2018 - Nov 2023</span>
            </div>
            <ul className="achievements">
              <li>Managed a large-scale Salesforce org (1,000+ licenses), evolving the platform from standard configuration to AI-driven tooling.</li>
              <li>Deployed the company's first internal chatbots (GIA) and GenAI-powered workflows for Jira ticket handling and AI-assisted development.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="card">
          <h2>Education</h2>
          <div>
            <strong>Ingenieria en Sistemas (Systems Engineering)</strong>
            <br />
            Universidad Marista de Mérida | 2004 - 2007
          </div>
        </section>

        {/* Certifications */}
        <section className="card">
          <h2>Certifications</h2>
          <div className="pill-container">
             <span className="pill">Salesforce Certified AI Associate</span>
             <span className="pill">Salesforce Certified Administrator</span>
          </div>
        </section>

      </div>
    </main>
  );
}
