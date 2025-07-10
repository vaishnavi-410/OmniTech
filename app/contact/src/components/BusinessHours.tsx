import SectionTitle from "./SectionTitle";

const BusinessHours = () => (
  <div className="box">
    <SectionTitle title="BUSINESS HOURS" />
    <table>
      <tbody>
        <tr><td>MONDAY – FRIDAY</td><td>9:00 am – 8:00 pm</td></tr>
        <tr><td>SATURDAY</td><td>9:00 am – 6:00 pm</td></tr>
        <tr><td>SUNDAY</td><td>9:00 am – 5:00 pm</td></tr>
      </tbody>
    </table>
  </div>
);

export default BusinessHours;
