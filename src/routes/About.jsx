import CEO from "../jsx/CEO";
import HeroImage from "../jsx/HeroImage";
import Information from "../jsx/About/InformationAbout";

export function About() {
  return (
    <>
      <HeroImage src={"About"} />
      <div className="first-container main-wrapper">
        <Information
          id={1}
          title="About"
          content="Since 20012, Sky Travel has been focused on bringing our customers the best in esteem and quality travel game plans. We are enthusiastic about movement and sharing the world’s marvels on the relaxation travel side, and giving corporate explorers hello there contact administrations to encourage their business travel needs."
        />
        {/* <CEO /> */}
        <Information
          id={2}
          title="Privacy Policy"
          content={
            <>
              <p>
                Sky Travel, is committed to maintaining the privacy of personal
                information that you provide to us when using the Sky Travel web
                site. This Privacy Policy describes how we treat personal
                information received about you when you visit www.skytravel.com.
                We may make content or services from other web sites including
                our co-branded web sites available to you from links located on
                https://www.skytravel.com. These other web sites are not subject
                to this Privacy Policy. We recommend that you review the privacy
                policy at each such web site to determine how that site protects
                your privacy.
              </p>
              <h4 className="info_content-title">Privacy Policy Promise</h4>
              <p>
                While information is the cornerstone of our ability to provide
                superior service, our most important asset is our clients’
                trust. Keeping client information secure, and using it only as
                our clients would want us to, is a top priority for all of us at
                Journey Travel & Tours. Here then, is our promise to our
                individual customers:
              </p>
              <ul className="info_privacy-list">
                <li>
                  We will safeguard, according to strict standards of security
                  and confidentiality, any information our customers share with
                  us.
                </li>
                <li>
                  We will permit only authorized employees, who are trained in
                  the proper handling of customer information, to have access to
                  that information. Employees who violate our Privacy Promise
                  will be subject to our normal disciplinary process.
                </li>
                <li>
                  We will permit only authorized employees, who are trained in
                  the proper handling of customer information, to have access to
                  that information. Employees who violate our Privacy Promise
                  will be subject to our normal disciplinary process.
                </li>
                <li>
                  We will attempt to keep customer files complete, up-to-date,
                  and accurate. We will tell our customers how and where to
                  conveniently access their information (except when we’re
                  prohibited by law) and how to notify us about errors which we
                  will promptly correct.
                </li>
              </ul>
            </>
          }
        />
        <Information
          id={3}
          title="Cookies"
          content="We employ cookie technology to help visitors and customers move faster through our site. When you sign on to our Web site or take advantage of several key features, we may pass cookies to your computer. A cookie is a string of information that is sent by a Web site and stored on your hard drive or temporarily in your computer’s memory."
        />
        <Information
          id={4}
          title="Security"
          content="The personally identifiable information we collect about you is stored in limited access servers. We will maintain safeguards to protect the security of these servers and your personally identifiable information."
        />
        <Information
          id={5}
          title="Terms and Conditions"
          content={
            <>
              <h4 className="info_content-title">Booking</h4>
              <p>
                Your contract is Sky Travel Agency SRL. A contract exists
                between us when we have confirmed you on our tour of your choice
                and we have received your signed booking form and deposits. All
                the relevant section must be correctly and fully completed. We
                can only accept booking form signed as this confirms that you
                and other people on the tour accept our booking terms and
                condition and are entering into the contract.
              </p>
              <h4 className="info_content-title">Deposit</h4>
              <p>
                Upon completion of the signed booking form a deposit of 50% of
                the tour cost per person, be paid to the company.
              </p>
              <h4 className="info_content-title">Refund Policy</h4>
              <p>
                All hotel reservation require reconfirmation by the agent /
                customer at least a one week prior to the date of check in
                failing which hotels reserve the right to levy at least one
                night retention which is payable by the customer making
                reservation through us. Sky Travel Agency do not take any
                responsibility to make any refund on deposit to the clients
                until the same has been received by us from the hotel/s. If
                payment of the tour is through Credit Card charge then the
                contract is irrevocable. If there is any complaint regarding
                services it should be communicated to Sky Travel Agency while
                the tour is still on
              </p>
            </>
          }
        />
      </div>
    </>
  );
}
