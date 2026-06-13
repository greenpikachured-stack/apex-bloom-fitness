import { Layout } from "@/components/layout/Layout";
import { ExternalLink, ShieldCheck } from "lucide-react";

const sections = [
  { id: "information-we-collect", label: "1. What information do we collect?" },
  { id: "how-we-process", label: "2. How do we process your information?" },
  { id: "sharing", label: "3. When and with whom do we share your personal information?" },
  { id: "cookies", label: "4. Do we use cookies and other tracking technologies?" },
  { id: "retention", label: "5. How long do we keep your information?" },
  { id: "security", label: "6. How do we keep your information safe?" },
  { id: "rights", label: "7. What are your privacy rights?" },
  { id: "do-not-track", label: "8. Controls for Do-Not-Track features" },
  { id: "updates", label: "9. Do we make updates to this notice?" },
  { id: "contact", label: "10. How can you contact us about this notice?" },
  { id: "requests", label: "11. How can you review, update, or delete your data?" },
];

const ExternalAnchor = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary underline decoration-primary/35 underline-offset-4 transition-colors hover:text-primary/80"
  >
    {children}
  </a>
);

const Section = ({
  id,
  number,
  title,
  summary,
  children,
}: {
  id: string;
  number: string;
  title: string;
  summary: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="scroll-mt-28 border-t border-white/10 pt-10">
    <div className="mb-5 flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/40 bg-primary/10 text-sm font-semibold text-primary">
        {number}
      </span>
      <div>
        <h2 className="text-2xl font-semibold leading-tight text-foreground md:text-3xl">{title}</h2>
        <p className="mt-3 border-l-2 border-primary/50 pl-4 text-sm italic leading-7 text-muted-foreground">
          <strong className="text-foreground">In short:</strong> {summary}
        </p>
      </div>
    </div>
    <div className="space-y-5 text-[15px] leading-8 text-muted-foreground md:text-base">{children}</div>
  </section>
);

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-white/10 bg-card-gradient py-20 md:py-24">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center border border-primary/30 bg-primary/10">
              <ShieldCheck className="text-primary" size={26} />
            </div>
            <p className="mb-4 text-sm uppercase tracking-[0.32em] text-primary">Your Privacy Matters</p>
            <h1 className="text-5xl font-bold md:text-6xl">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="mt-6 text-sm uppercase tracking-[0.18em] text-muted-foreground">
              Last updated June 10, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="border border-white/10 bg-card/80 p-6 shadow-2xl shadow-black/20">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                  On this page
                </p>
                <nav aria-label="Privacy policy sections">
                  <ol className="space-y-3">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="block text-sm leading-5 text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {section.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </aside>

            <article className="min-w-0 border border-white/10 bg-card/60 p-6 shadow-2xl shadow-black/20 md:p-10 lg:p-12">
              <div className="space-y-5 text-[15px] leading-8 text-muted-foreground md:text-base">
                <p>
                  This Privacy Notice for <strong className="text-foreground">ApexFit</strong> ("we", "us",
                  or "our") describes how and why we might access, collect, store, use, and/or share
                  ("process") your personal information when you use our services ("Services"), including
                  when you:
                </p>
                <ul className="list-square space-y-2 pl-6 marker:text-primary">
                  <li>
                    Visit our website at{" "}
                    <ExternalAnchor href="https://www.apexfithyd.com/">apexfithyd.com</ExternalAnchor> or
                    any website of ours that links to this Privacy Notice.
                  </li>
                  <li>
                    Use ApexFit, a modern fitness center offering strength training, cardio equipment,
                    personal training, group fitness classes, weight loss programs, and wellness coaching
                    in a clean and motivating environment.
                  </li>
                  <li>Engage with us in other related ways, including marketing or events.</li>
                </ul>
                <p>
                  <strong className="text-foreground">Questions or concerns?</strong> Reading this Privacy
                  Notice will help you understand your privacy rights and choices. We are responsible for
                  deciding how your personal information is processed. If you do not agree with our policies
                  and practices, please do not use our Services. Contact us at{" "}
                  <a className="text-primary hover:underline" href="mailto:apexfithyd@gmail.com">
                    apexfithyd@gmail.com
                  </a>{" "}
                  with any questions or concerns.
                </p>
              </div>

              <div className="my-12 border border-primary/20 bg-primary/[0.06] p-6 md:p-8">
                <h2 className="text-2xl font-semibold text-foreground">Summary of key points</h2>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {[
                    ["Information we process", "Names, email addresses, and phone numbers you provide to us."],
                    ["Sensitive information", "We do not process sensitive personal information."],
                    ["Third-party sources", "We do not collect personal information from third parties."],
                    ["How we use information", "To provide, improve, secure, and administer our Services."],
                    ["Information sharing", "Only in specific situations and with relevant service providers."],
                    ["Your rights", "You may request access, correction, deletion, or withdraw consent."],
                  ].map(([title, description]) => (
                    <div key={title} className="border-l-2 border-primary/50 pl-4">
                      <h3 className="font-sans text-sm font-semibold text-foreground">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-12">
                <Section
                  id="information-we-collect"
                  number="01"
                  title="What information do we collect?"
                  summary="We collect personal information that you provide to us."
                >
                  <h3 className="font-sans text-lg font-semibold text-foreground">
                    Personal information you disclose to us
                  </h3>
                  <p>
                    We collect personal information that you voluntarily provide when you express an interest
                    in obtaining information about us or our Services, participate in activities on the
                    Services, or otherwise contact us.
                  </p>
                  <p>
                    <strong className="text-foreground">Personal information provided by you.</strong> The
                    information we collect depends on your interactions with us, the choices you make, and the
                    products and features you use. It may include:
                  </p>
                  <ul className="list-square space-y-2 pl-6 marker:text-primary">
                    <li>Email addresses</li>
                    <li>Names</li>
                    <li>Phone numbers</li>
                  </ul>
                  <p>
                    <strong className="text-foreground">Sensitive information.</strong> We do not process
                    sensitive information.
                  </p>
                  <p>
                    All personal information you provide must be true, complete, and accurate. You must notify
                    us of any changes to that information.
                  </p>
                </Section>

                <Section
                  id="how-we-process"
                  number="02"
                  title="How do we process your information?"
                  summary="We process information to provide, improve, and administer our Services, communicate with you, prevent fraud, and comply with law."
                >
                  <p>
                    We process your personal information for a variety of reasons depending on how you
                    interact with our Services, including:
                  </p>
                  <ul className="list-square space-y-3 pl-6 marker:text-primary">
                    <li>
                      <strong className="text-foreground">To deliver our Services.</strong> We may process your
                      information to provide the service you request.
                    </li>
                    <li>
                      <strong className="text-foreground">To respond to inquiries and offer support.</strong>{" "}
                      We may use your information to answer questions and resolve issues.
                    </li>
                    <li>
                      <strong className="text-foreground">To send administrative information.</strong> We may
                      send details about our products, Services, and changes to our terms or policies.
                    </li>
                    <li>
                      <strong className="text-foreground">To evaluate and improve our Services.</strong> We may
                      identify usage trends, assess promotional campaigns, and improve your experience.
                    </li>
                    <li>
                      <strong className="text-foreground">To identify usage trends.</strong> We may process
                      information about how our Services are used so we can improve them.
                    </li>
                  </ul>
                  <p>We may also process your information for other purposes with your consent.</p>
                </Section>

                <Section
                  id="sharing"
                  number="03"
                  title="When and with whom do we share your personal information?"
                  summary="We may share information in specific situations and with specific categories of third parties."
                >
                  <p>
                    <strong className="text-foreground">
                      Vendors, consultants, and other third-party service providers.
                    </strong>{" "}
                    We may share your data with vendors, service providers, contractors, or agents that
                    perform services for us and require access to the information to do that work. Our
                    contracts require these parties to safeguard your information, use it only as instructed,
                    and retain it only for the period we specify.
                  </p>
                  <p>Categories of third parties may include:</p>
                  <ul className="list-square space-y-2 pl-6 marker:text-primary">
                    <li>Data analytics services</li>
                    <li>Communication and collaboration tools</li>
                    <li>Cloud computing services</li>
                  </ul>
                  <p>
                    <strong className="text-foreground">Business transfers.</strong> We may share or transfer
                    information in connection with a merger, sale of company assets, financing, or acquisition
                    of all or part of our business.
                  </p>
                  <p>
                    <strong className="text-foreground">Business partners.</strong> We may share information
                    with business partners to offer certain products, services, or promotions.
                  </p>
                </Section>

                <Section
                  id="cookies"
                  number="04"
                  title="Do we use cookies and other tracking technologies?"
                  summary="We may use cookies and similar technologies to collect and store information."
                >
                  <p>
                    We may use cookies, web beacons, pixels, and similar technologies when you interact with
                    our Services. These technologies may help maintain security, prevent crashes, fix bugs,
                    save preferences, and support basic site functions.
                  </p>
                  <p>
                    We may permit service providers to use tracking technologies for analytics and advertising,
                    including managing advertisements, tailoring content to your interests, and measuring
                    campaign performance.
                  </p>
                  <h3 className="font-sans text-lg font-semibold text-foreground">Google Analytics</h3>
                  <p>
                    We may share information with Google Analytics to track and analyze use of the Services.
                    Advertising features may include remarketing, Google Display Network Impressions Reporting,
                    and Demographics and Interests Reporting.
                  </p>
                  <p>
                    You can opt out using the{" "}
                    <ExternalAnchor href="https://tools.google.com/dlpage/gaoptout">
                      Google Analytics opt-out browser add-on
                    </ExternalAnchor>
                    , manage preferences through{" "}
                    <ExternalAnchor href="https://adssettings.google.com/">Google Ads Settings</ExternalAnchor>,
                    or review the{" "}
                    <ExternalAnchor href="https://policies.google.com/privacy">
                      Google Privacy & Terms page
                    </ExternalAnchor>
                    .
                  </p>
                </Section>

                <Section
                  id="retention"
                  number="05"
                  title="How long do we keep your information?"
                  summary="We keep information only as long as necessary for the purposes described here, unless law requires otherwise."
                >
                  <p>
                    We retain personal information only for as long as necessary for the purposes set out in
                    this Privacy Notice, unless a longer retention period is required or permitted by law,
                    including tax, accounting, or other legal requirements.
                  </p>
                  <p>
                    When we have no ongoing legitimate business need to process your information, we will
                    delete or anonymize it. If deletion is not immediately possible, such as when information
                    is stored in backup archives, we will securely store and isolate it until deletion is
                    possible.
                  </p>
                </Section>

                <Section
                  id="security"
                  number="06"
                  title="How do we keep your information safe?"
                  summary="We aim to protect personal information through organizational and technical security measures."
                >
                  <p>
                    We implement appropriate and reasonable technical and organizational measures designed to
                    protect the personal information we process. However, no internet transmission or storage
                    technology can be guaranteed to be 100% secure. We cannot promise that unauthorized third
                    parties will never defeat our safeguards and improperly collect, access, steal, or modify
                    information.
                  </p>
                  <p>
                    Transmission of personal information to and from our Services is at your own risk. You
                    should access the Services only within a secure environment.
                  </p>
                </Section>

                <Section
                  id="rights"
                  number="07"
                  title="What are your privacy rights?"
                  summary="Depending on where you live, you may review, change, or request deletion of your personal information."
                >
                  <p>
                    <strong className="text-foreground">Withdrawing your consent.</strong> If we rely on your
                    consent to process personal information, you may withdraw that consent at any time by using
                    the contact details below. Withdrawal does not affect the lawfulness of processing carried
                    out before the withdrawal or processing based on lawful grounds other than consent.
                  </p>
                  <p>
                    Questions about your privacy rights may be sent to{" "}
                    <a className="text-primary hover:underline" href="mailto:apexfithyd@gmail.com">
                      apexfithyd@gmail.com
                    </a>
                    .
                  </p>
                </Section>

                <Section
                  id="do-not-track"
                  number="08"
                  title="Controls for Do-Not-Track features"
                  summary="We do not currently respond to Do-Not-Track browser signals."
                >
                  <p>
                    Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT")
                    setting. No uniform technology standard for recognizing and implementing DNT signals has
                    been finalized, so we do not currently respond to DNT browser signals or other mechanisms
                    that automatically communicate a choice not to be tracked online. If a standard we must
                    follow is adopted, we will describe that practice in a revised Privacy Notice.
                  </p>
                </Section>

                <Section
                  id="updates"
                  number="09"
                  title="Do we make updates to this notice?"
                  summary="Yes. We update this notice as necessary to remain compliant with relevant laws."
                >
                  <p>
                    We may update this Privacy Notice from time to time. The revised version will be identified
                    by an updated date at the top of this page. If we make material changes, we may notify you
                    by prominently posting a notice or sending a direct notification. We encourage you to
                    review this notice regularly.
                  </p>
                </Section>

                <Section
                  id="contact"
                  number="10"
                  title="How can you contact us about this notice?"
                  summary="You can contact ApexFit by email or post."
                >
                  <p>
                    Email us at{" "}
                    <a className="text-primary hover:underline" href="mailto:apexfithyd@gmail.com">
                      apexfithyd@gmail.com
                    </a>{" "}
                    or contact us by post at:
                  </p>
                  <address className="not-italic text-foreground">
                    <strong>ApexFit</strong>
                    <br />
                    HVR, Rd Number 1, Happy Homes Colony
                    <br />
                    Golden Heights Colony, Rajendranagar
                    <br />
                    Hyderabad, Telangana 500048
                    <br />
                    India
                  </address>
                </Section>

                <Section
                  id="requests"
                  number="11"
                  title="How can you review, update, or delete the data we collect from you?"
                  summary="Applicable law may give you rights to access, correct, delete, or restrict the use of your personal information."
                >
                  <p>
                    Based on the laws of your country, you may have the right to request access to the personal
                    information we collect, details about how we process it, correction of inaccuracies, or
                    deletion of your information. You may also have the right to withdraw consent. These rights
                    may be limited in some circumstances by applicable law.
                  </p>
                  <a
                    href="https://app.termly.io/dsar/349e8df1-3905-46a8-a718-cf739046adca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    Submit a data request
                    <ExternalLink size={16} />
                  </a>
                </Section>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicyPage;
