import React, { useEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "who-we-are", num: "01", title: "Who we are" },
  { id: "information-we-collect", num: "02", title: "Information we collect" },
  { id: "how-we-use", num: "03", title: "How we use your information" },
  { id: "legal-basis", num: "04", title: "Legal basis for processing" },
  { id: "marketing", num: "05", title: "Marketing" },
  { id: "sharing", num: "06", title: "Sharing your information" },
  { id: "security", num: "07", title: "Data security" },
  { id: "retention", num: "08", title: "Data retention" },
  { id: "your-rights", num: "09", title: "Your rights" },
  { id: "cookies", num: "10", title: "Cookies" },
  { id: "third-party", num: "11", title: "Third-party services" },
  { id: "meta-leads", num: "12", title: "Meta lead forms" },
  { id: "changes", num: "13", title: "Changes to this policy" },
  { id: "contact", num: "14", title: "Contact us" },
];

function Section({ num, title, children }) {
  return (
    <section className="cal-section">
      <div className="cal-section-head">
        <span className="cal-section-num" aria-hidden="true">
          {num}
        </span>
        <h2 className="cal-h2">{title}</h2>
      </div>
      <div className="cal-section-body">{children}</div>
    </section>
  );
}

export default function PrivacyPolicy() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        :root {
          --cal-navy: #4843BB;
          --cal-navy-soft: #22415e;
          --cal-text: #3D4A5C;
          --cal-muted: #7A8699;
          --cal-paper: #F7F8FA;
          --cal-white: #FFFFFF;
          --cal-gold: #25B6AC;
          --cal-gold-soft: #25B6AC;
          --cal-border: #E2E5EA;
        }

        .cal-privacy {
          background: var(--cal-paper);
          color: var(--cal-text);
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
        margin-top: 140px;
        }

        .cal-privacy h1,
        .cal-privacy h2,
        .cal-privacy h3,
        .cal-privacy .cal-font-heading {
          font-family: 'Poppins', sans-serif;
        }

        /* ---------- Header ---------- */
        .cal-header {
          background: var(--cal-navy);
          position: relative;
          padding: 4.5rem 0 3.5rem;
          overflow: hidden;
        }

        .cal-header::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--cal-gold) 0%, rgba(184,134,59,0) 60%);
        }

        .cal-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--cal-gold-soft);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .cal-eyebrow::before {
          content: "";
          width: 22px;
          height: 1px;
          background: var(--cal-gold);
          display: inline-block;
        }

        .cal-h1 {
          color: #FFFFFF;
          font-weight: 600;
          font-size: clamp(1.9rem, 3.2vw, 2.75rem);
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }

        .cal-header-sub {
          color: #C7D2DE;
          font-size: 1rem;
          max-width: 640px;
          line-height: 1.7;
          margin-bottom: 1.75rem;
        }

        .cal-date-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.16);
          color: #EAEFF5;
          font-size: 0.85rem;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 999px;
        }

        .cal-date-pill strong {
          color: var(--cal-gold-soft);
          font-weight: 600;
        }

        /* ---------- Body layout ---------- */
        .cal-body-wrap {
          padding: 3.5rem 0 5rem;
        }

        /* ---------- Sidebar TOC ---------- */
        .cal-toc {
          position: sticky;
          top: 2rem;
          border-left: 2px solid var(--cal-border);
          padding-left: 1.25rem;
        }

        .cal-toc-label {
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--cal-muted);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .cal-toc-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .cal-toc-list li {
          margin-bottom: 0.65rem;
        }

        .cal-toc-link {
          display: flex;
          gap: 0.6rem;
          align-items: baseline;
          text-decoration: none;
          color: var(--cal-muted);
          font-size: 0.88rem;
          font-weight: 500;
          line-height: 1.4;
          transition: color 0.15s ease;
        }

        .cal-toc-link:hover {
          color: var(--cal-navy);
        }

        .cal-toc-num {
          font-family: 'Poppins', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--cal-muted);
          min-width: 1.2rem;
        }

        .cal-toc-link.active {
          color: var(--cal-navy);
          font-weight: 600;
        }

        .cal-toc-link.active .cal-toc-num {
          color: var(--cal-gold);
        }

        /* ---------- Mobile chip nav ---------- */
        .cal-toc-mobile {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding: 0.25rem 0 1.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--cal-border);
        }

        .cal-toc-chip {
          flex: 0 0 auto;
          white-space: nowrap;
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--cal-navy-soft);
          background: var(--cal-white);
          border: 1px solid var(--cal-border);
          border-radius: 999px;
          padding: 0.4rem 0.85rem;
          text-decoration: none;
        }

        /* ---------- Content card ---------- */
        .cal-content {
          background: var(--cal-white);
          border: 1px solid var(--cal-border);
          border-radius: 14px;
          padding: 0.5rem clamp(1.25rem, 3vw, 3rem);
        }

        .cal-intro {
          padding: 2rem 0 1rem;
          border-bottom: 1px solid var(--cal-border);
          margin-bottom: 0.5rem;
          color: var(--cal-text);
          font-size: 0.98rem;
          line-height: 1.75;
        }

        .cal-section {
          padding: 2.25rem 0;
          border-bottom: 1px solid var(--cal-border);
          scroll-margin-top: 1.5rem;
        }

        .cal-section:last-child {
          border-bottom: none;
          padding-bottom: 1.5rem;
        }

        .cal-section-head {
          display: flex;
          align-items: baseline;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .cal-section-num {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 1.6rem;
          color: var(--cal-gold-soft);
          line-height: 1;
          -webkit-text-stroke: 1px var(--cal-gold);
        }

        .cal-h2 {
          font-weight: 600;
          font-size: 1.28rem;
          color: var(--cal-navy);
          margin: 0;
          letter-spacing: -0.005em;
        }

        .cal-section-body {
          font-size: 0.97rem;
          line-height: 1.8;
          color: var(--cal-text);
        }

        .cal-section-body p {
          margin-bottom: 1rem;
        }

        .cal-section-body p:last-child {
          margin-bottom: 0;
        }

        .cal-section-body ul {
          margin: 0 0 1rem;
          padding-left: 1.15rem;
        }

        .cal-section-body li {
          margin-bottom: 0.5rem;
        }

        .cal-section-body li:last-child {
          margin-bottom: 0;
        }

        .cal-link {
          color: var(--cal-navy-soft);
          font-weight: 500;
          text-decoration: underline;
          text-decoration-color: var(--cal-gold-soft);
          text-underline-offset: 3px;
        }

        .cal-link:hover {
          color: var(--cal-gold);
        }

        /* ---------- Footer / contact block ---------- */
        .cal-footer {
          background: var(--cal-navy);
          margin-top: 4rem;
          border-radius: 14px;
          padding: 2.5rem clamp(1.5rem, 4vw, 3rem);
          color: #D8E0EA;
        }

        .cal-footer-rule {
          height: 1px;
          background: rgba(255,255,255,0.14);
          margin: 1.5rem 0;
        }

        .cal-footer-title {
          color: #FFFFFF;
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 0.4rem;
        }

        .cal-footer-meta {
          font-size: 0.85rem;
          color: #9FB0C3;
          margin-bottom: 0;
        }

        .cal-footer-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem 2.5rem;
        }

        .cal-footer-contact a {
          color: #EAEFF5;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.92rem;
        }

        .cal-footer-contact a:hover {
          color: var(--cal-gold-soft);
        }

        .cal-footer-contact-label {
          display: block;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--cal-gold-soft);
          margin-bottom: 0.3rem;
        }

        @media (max-width: 991.98px) {
          .cal-toc-desktop { display: none; }
          .cal-toc-mobile { display: none; }
        }

        @media (min-width: 992px) {
          .cal-toc-mobile { display: none; }
          
        }
      `}</style>

      <div className="cal-privacy">
        {/* Header */}
        <header className="cal-header">
          <div className="container">
            <div className="cal-eyebrow">Crawley Accountants Ltd</div>
            <h1 className="cal-h1">Privacy policy</h1>
            <p className="cal-header-sub">
              How we collect, use, and protect your personal information when
              you use our accounting, tax, bookkeeping, payroll, and advisory
              services.
            </p>
            <span className="cal-date-pill">
              Effective date <strong>4 August 2026</strong>
            </span>
          </div>
        </header>

        {/* Body */}
        <div className="container cal-body-wrap">
          {/* Mobile chip nav */}
          <nav className="cal-toc-mobile" aria-label="Section navigation">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="cal-toc-chip">
                {s.num} · {s.title}
              </a>
            ))}
          </nav>

          <div className="row">
            {/* Sidebar */}
            <aside className="col-lg-3 cal-toc-desktop">
              <nav className="cal-toc" aria-label="Section navigation">
                <div className="cal-toc-label">On this page</div>
                <ul className="cal-toc-list">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`cal-toc-link ${active === s.id ? "active" : ""}`}
                      >
                        <span className="cal-toc-num">{s.num}</span>
                        <span>{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Content */}
            <div className="col-lg-9">
              <div className="cal-content">
                <p className="cal-intro">
                  Crawley Accountants Ltd ("we", "our", or "us") is committed to
                  protecting your privacy and handling your personal information
                  in accordance with the UK General Data Protection Regulation
                  (UK GDPR) and the Data Protection Act 2018.
                </p>

                <div id="who-we-are">
                  <Section num="01" title="Who we are">
                    <p>
                      Crawley Accountants Ltd provides accounting, tax,
                      bookkeeping, payroll, VAT, and business advisory services.
                    </p>
                    <p>
                      If you have any questions about this privacy policy or how
                      we use your personal data, please contact us at{" "}
                      <a
                        className="cal-link"
                        href="mailto:info@crawleyaccountants.co.uk"
                      >
                        info@crawleyaccountants.co.uk
                      </a>{" "}
                      or visit{" "}
                      <a
                        className="cal-link"
                        href="https://crawleyaccountants.co.uk"
                        target="_blank"
                        rel="noreferrer"
                      >
                        crawleyaccountants.co.uk
                      </a>
                      .
                    </p>
                  </Section>
                </div>

                <div id="information-we-collect">
                  <Section num="02" title="Information we collect">
                    <p>
                      We may collect and process the following personal
                      information:
                    </p>
                    <ul>
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Telephone number</li>
                      <li>Postal address</li>
                      <li>Business information</li>
                      <li>
                        Tax and financial information required to provide our
                        services
                      </li>
                      <li>Communications between you and us</li>
                      <li>
                        Information submitted through our website, Meta
                        (Facebook/Instagram) Lead Ads, WhatsApp, email, or
                        contact forms
                      </li>
                    </ul>
                  </Section>
                </div>

                <div id="how-we-use">
                  <Section num="03" title="How we use your information">
                    <p>We use your personal information to:</p>
                    <ul>
                      <li>Respond to your enquiries</li>
                      <li>
                        Contact you regarding your tax or accounting enquiry
                      </li>
                      <li>Provide accounting and tax services</li>
                      <li>Prepare tax returns and other financial documents</li>
                      <li>Comply with legal and regulatory obligations</li>
                      <li>Improve our services</li>
                      <li>Send important service updates</li>
                      <li>
                        Send marketing communications where you have given
                        consent or where permitted by law
                      </li>
                    </ul>
                  </Section>
                </div>

                <div id="legal-basis">
                  <Section num="04" title="Legal basis for processing">
                    <p>
                      We process your personal information under one or more of
                      the following legal bases:
                    </p>
                    <ul>
                      <li>Your consent</li>
                      <li>Performance of a contract</li>
                      <li>Compliance with legal obligations</li>
                      <li>Our legitimate business interests</li>
                    </ul>
                  </Section>
                </div>

                <div id="marketing">
                  <Section num="05" title="Marketing">
                    <p>
                      If you request information or submit an enquiry, we may
                      contact you by phone, email, SMS, or WhatsApp regarding
                      your enquiry and our services.
                    </p>
                    <p>
                      You may opt out of marketing communications at any time.
                    </p>
                  </Section>
                </div>

                <div id="sharing">
                  <Section num="06" title="Sharing your information">
                    <p>We do not sell your personal information.</p>
                    <p>
                      We may share your information only when necessary with:
                    </p>
                    <ul>
                      <li>
                        HM Revenue & Customs (HMRC), where authorised or legally
                        required
                      </li>
                      <li>
                        Software providers and cloud service providers that help
                        us deliver our services
                      </li>
                      <li>Professional advisers</li>
                      <li>Regulatory authorities where required by law</li>
                    </ul>
                    <p>
                      All third parties are required to protect your
                      information.
                    </p>
                  </Section>
                </div>

                <div id="security">
                  <Section num="07" title="Data security">
                    <p>
                      We use appropriate technical and organisational measures
                      to protect your personal information from unauthorised
                      access, loss, misuse, or disclosure.
                    </p>
                  </Section>
                </div>

                <div id="retention">
                  <Section num="08" title="Data retention">
                    <p>
                      We retain your personal information only for as long as
                      necessary to fulfil the purposes for which it was
                      collected, including satisfying legal, accounting, and
                      regulatory requirements.
                    </p>
                  </Section>
                </div>

                <div id="your-rights">
                  <Section num="09" title="Your rights">
                    <p>Under UK data protection law, you have the right to:</p>
                    <ul>
                      <li>Access your personal information</li>
                      <li>Correct inaccurate information</li>
                      <li>Request deletion of your data where applicable</li>
                      <li>Restrict or object to processing</li>
                      <li>Request data portability where applicable</li>
                      <li>
                        Withdraw consent where processing is based on consent
                      </li>
                      <li>
                        Lodge a complaint with the UK Information Commissioner's
                        Office (ICO)
                      </li>
                    </ul>
                  </Section>
                </div>

                <div id="cookies">
                  <Section num="10" title="Cookies">
                    <p>
                      Our website may use cookies and similar technologies to
                      improve user experience and analyse website traffic.
                    </p>
                    <p>You can manage cookies through your browser settings.</p>
                  </Section>
                </div>

                <div id="third-party">
                  <Section num="11" title="Third-party services">
                    <p>
                      Our website may contain links to third-party websites or
                      use third-party services, including Meta (Facebook),
                      Google, and WhatsApp. These services have their own
                      privacy policies, and we are not responsible for their
                      privacy practices.
                    </p>
                  </Section>
                </div>

                <div id="meta-leads">
                  <Section
                    num="12"
                    title="Meta (Facebook & Instagram) lead forms"
                  >
                    <p>
                      If you submit your information through one of our Meta
                      Lead Ads, we will use the information you provide to
                      contact you and discuss your enquiry regarding our
                      accounting or tax services.
                    </p>
                    <p>
                      Your information will only be used for the purposes stated
                      in the lead form and will not be sold to third parties.
                    </p>
                  </Section>
                </div>

                <div id="changes">
                  <Section num="13" title="Changes to this privacy policy">
                    <p>
                      We may update this privacy policy from time to time. Any
                      changes will be published on this page together with the
                      updated effective date.
                    </p>
                  </Section>
                </div>

                <div id="contact">
                  <Section num="14" title="Contact us">
                    <p>
                      If you have any questions about this privacy policy or how
                      we process your personal information, please contact:
                    </p>
                    <p style={{ marginBottom: 0 }}>
                      <strong style={{ color: "var(--cal-navy)" }}>
                        Crawley Accountants Ltd
                      </strong>
                      <br />
                      Email:{" "}
                      <a
                        className="cal-link"
                        href="mailto:info@crawleyaccountants.co.uk"
                      >
                        info@crawleyaccountants.co.uk
                      </a>
                      <br />
                      Website:{" "}
                      <a
                        className="cal-link"
                        href="https://crawleyaccountants.co.uk"
                        target="_blank"
                        rel="noreferrer"
                      >
                        crawleyaccountants.co.uk
                      </a>
                    </p>
                  </Section>
                </div>
              </div>

              {/* Footer contact block */}
              <footer className="cal-footer">
                <div className="cal-footer-title">Crawley Accountants Ltd</div>
                <p className="cal-footer-meta">
                  Accounting · Tax · Bookkeeping · Payroll · VAT · Business
                  advisory
                </p>
                <div className="cal-footer-rule" />
                <div className="cal-footer-contact">
                  <div>
                    <span className="cal-footer-contact-label">Email</span>
                    <a href="mailto:info@crawleyaccountants.co.uk">
                      info@crawleyaccountants.co.uk
                    </a>
                  </div>
                  <div>
                    <span className="cal-footer-contact-label">Website</span>
                    <a
                      href="https://crawleyaccountants.co.uk"
                      target="_blank"
                      rel="noreferrer"
                    >
                      crawleyaccountants.co.uk
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
