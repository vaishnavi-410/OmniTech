import SectionTitle from "./SectionTitle";

const ContactInfo = () => (
  <div className="contactGroup">
    <div className="contactCard">
      <SectionTitle title="PHONE" />
      <p><strong>📞</strong> <a href="tel:9112005341">02422-252076</a></p>
    </div>
    <div className="contactCard">
      <SectionTitle title="EMAIL" />
      <p><strong>📧</strong> <a href="mailto:delxnhelp30@gmail.com">delxnhelp30@gmail.com</a></p>
    </div>
    <div className="contactCard">
      <SectionTitle title="ADDRESS" />
      <p><strong>📍</strong> <a href="https://maps.app.goo.gl/rwhUwAm4n9PvCUFXA" target="_blank" rel="noreferrer">DelXN Technologies Pvt Ltd</a></p>
    </div>
  </div>
);

export default ContactInfo;
