import React from 'react';
import { RefreshCcw, Scale, Truck, ShieldCheck } from 'lucide-react';
import './Policies.css';

const PolicyBlock = ({ id, number, title, icon: Icon, children }) => (
  <article className="policy-block" id={id}>
    <header className="policy-block-header">
      <div className="policy-icon" aria-hidden="true">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <div>
        <span className="policy-number">Policy {number}</span>
        <h3>{title}</h3>
      </div>
    </header>
    <div className="policy-content">{children}</div>
  </article>
);

const PolicyItem = ({ title, children }) => (
  <section className="policy-item">
    <h4>{title}</h4>
    {children}
  </section>
);

const Policies = () => {
  return (
    <section className="policies section-padding" id="policies">
      <div className="container">
        <div className="policies-heading">
          <div>
            <span className="policies-eyebrow">JA Fashions · Customer Care</span>
            <h2>Our <span className="heading-italic">Policies</span></h2>
          </div>
          <p className="policies-intro">
            Clear terms for shopping, returns, delivery, and data privacy with JA Fashions.
            These policies are effective from <strong>July 2026</strong>.
          </p>
        </div>

        <nav className="policy-nav" aria-label="Policy sections">
          <a href="#terms">Terms &amp; Conditions</a>
          <a href="#returns">Refunds &amp; Returns</a>
          <a href="#shipping">Shipping</a>
          <a href="#privacy">Privacy Policy</a>
        </nav>

        <div className="policy-list">
          <PolicyBlock id="terms" number="01" title="Terms & Conditions" icon={Scale}>
            <PolicyItem title="Introduction">
              <p>
                By accessing or purchasing from JA Fashions, you agree to abide by
                these Terms &amp; Conditions. These terms govern your use of our website,
                products, and services.
              </p>
            </PolicyItem>
            <PolicyItem title="Product Information">
              <p>
                We aim to provide accurate product descriptions. Colors may vary
                slightly due to screen settings. Sizes may differ based on fabric
                stretch and design.
              </p>
            </PolicyItem>
            <PolicyItem title="Pricing & Payment">
              <p>
                All prices are listed in AED. Payments are processed securely through
                third-party gateways. JA Fashions does not store or access your card details.
              </p>
            </PolicyItem>
            <PolicyItem title="Order Confirmation">
              <p>
                Once an order is placed, you will receive a confirmation email or
                WhatsApp message. Orders may be cancelled if items are out of stock or
                if payment issues occur.
              </p>
            </PolicyItem>
            <PolicyItem title="Prohibited Use">
              <p>
                Users must not engage in fraudulent activities, misuse the website,
                or attempt to disrupt operations.
              </p>
            </PolicyItem>
            <PolicyItem title="Intellectual Property">
              <p>
                All content, images, and designs belong to JA Fashions. Unauthorized
                use is strictly prohibited.
              </p>
            </PolicyItem>
            <PolicyItem title="Limitation of Liability">
              <p>
                JA Fashions is not responsible for courier delays, misuse of products
                after delivery, or technical issues beyond our control.
              </p>
            </PolicyItem>
            <PolicyItem title="Updates to Terms">
              <p>
                We may update these terms at any time. Continued use of the website
                indicates acceptance of updated terms.
              </p>
            </PolicyItem>
          </PolicyBlock>

          <PolicyBlock id="returns" number="02" title="Refund & Return Policy" icon={RefreshCcw}>
            <PolicyItem title="Eligibility for Returns">
              <p>Returns are accepted only if:</p>
              <ul>
                <li>The product is damaged or defective</li>
                <li>The wrong item was delivered</li>
                <li>The return request is made within <strong>48 hours</strong> of delivery</li>
              </ul>
            </PolicyItem>
            <PolicyItem title="Non-Returnable Items">
              <p>We do not accept returns for:</p>
              <ul>
                <li>Sale items</li>
                <li>Accessories</li>
                <li>Customized or altered products</li>
                <li>Items worn, washed, or used</li>
              </ul>
            </PolicyItem>
            <PolicyItem title="Refund Process">
              <p>Approved refunds are issued as store credit or a replacement product.</p>
              <p>
                Refunds to a bank account or card are not applicable unless approved
                by management.
              </p>
            </PolicyItem>
            <PolicyItem title="Proof Required">
              <p>To help us verify the issue, customers must provide:</p>
              <ul>
                <li>Clear product images</li>
                <li>Packaging images</li>
                <li>Order number</li>
              </ul>
            </PolicyItem>
            <PolicyItem title="Processing Time">
              <p>
                Return review takes <strong>2–5 business days</strong>. Store credit is
                issued after approval.
              </p>
            </PolicyItem>
          </PolicyBlock>

          <PolicyBlock id="shipping" number="03" title="Shipping Policy" icon={Truck}>
            <PolicyItem title="Delivery Locations">
              <p>We deliver across the UAE and to selected international locations.</p>
            </PolicyItem>
            <PolicyItem title="Shipping Time">
              <ul>
                <li>UAE orders: <strong>2–5 business days</strong></li>
                <li>International orders: <strong>7–14 business days</strong></li>
              </ul>
              <p>Delivery time may vary based on courier availability.</p>
            </PolicyItem>
            <PolicyItem title="Shipping Charges">
              <p>
                Shipping fees are calculated at checkout based on location and package weight.
              </p>
            </PolicyItem>
            <PolicyItem title="Order Tracking">
              <p>Customers receive a tracking link once the order is dispatched.</p>
            </PolicyItem>
            <PolicyItem title="Failed Delivery">
              <p>
                If the courier cannot reach you after multiple attempts, the order may
                be returned. Re-delivery charges will apply.
              </p>
            </PolicyItem>
            <PolicyItem title="Lost or Damaged Packages">
              <p>
                If a package is lost or damaged during transit, JA Fashions will assist
                with courier claims and provide support.
              </p>
            </PolicyItem>
          </PolicyBlock>

          <PolicyBlock id="privacy" number="04" title="Privacy & Data Protection" icon={ShieldCheck}>
            <PolicyItem title="Information We Collect">
              <p>
                We collect personal information that you provide when submitting an enquiry, placing an order,
                or contacting us on WhatsApp. This includes your name, phone number, email address, and shipping address.
              </p>
            </PolicyItem>
            <PolicyItem title="How We Use Your Data">
              <p>
                Your data is strictly used to fulfill customer orders, deliver packages across the UAE,
                provide styling assistance, and respond to your direct queries. We never sell or rent customer data.
              </p>
            </PolicyItem>
            <PolicyItem title="WhatsApp &amp; Social Inquiries">
              <p>
                Customer orders and concierge communications are facilitated through WhatsApp and Instagram.
                These interactions are governed by their respective privacy terms alongside our boutique care standards.
              </p>
            </PolicyItem>
            <PolicyItem title="Third-Party Delivery Partners">
              <p>
                To deliver orders in Dubai and across the UAE, your delivery details (name, phone, address)
                are shared solely with our authorized courier partners for courier fulfillment.
              </p>
            </PolicyItem>
            <PolicyItem title="Data Retention &amp; Rights">
              <p>
                You may request access to, correction of, or deletion of your personal records at any time
                by contacting us at <strong>jafashions2014@gmail.com</strong> or via WhatsApp at <strong>+971 52 839 4207</strong>.
              </p>
            </PolicyItem>
          </PolicyBlock>
        </div>
      </div>
    </section>
  );
};

export default Policies;
