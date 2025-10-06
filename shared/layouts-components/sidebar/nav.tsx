

import SpkBadge from "@/shared/@spk-reusable-components/general-reusable/reusable-uielements/spk-badge";
import * as Svgicons from "./menusvg-icons";

const badgePrimary = <SpkBadge variant="" Customclass="bg-primary-transparent ms-2">9</SpkBadge>
const badgeSucccess = <SpkBadge variant="" Customclass="bg-success-transparent ms-2">6</SpkBadge>
const badgeWarning = <SpkBadge variant="" Customclass="bg-warning-transparent ms-2">5</SpkBadge>
const badgeInfo = <SpkBadge variant="" Customclass="bg-info-transparent ms-2">4</SpkBadge>
const badgedanger = <SpkBadge variant="" Customclass="bg-danger-transparent ms-2">6</SpkBadge>
const badgeSuccess = <SpkBadge variant="" Customclass="bg-success-transparent ms-2">8</SpkBadge>

export const MENUITEMS: any = [
  {
    title: "Dashboard", icon: Svgicons.Dashboardicon, path: "/dashboard", type: "link", active: false, selected: false, dirchange: false
  },
  {
    title: "Leads", icon: Svgicons.Crmicon, type: "sub", active: false, selected: false, dirchange: false, children: [
      { path: "/leads/list", type: "link", active: false, selected: false, dirchange: false, title: "All Leads" },
      { path: "/leads/stage/new", type: "link", active: false, selected: false, dirchange: false, title: "New" },
      { path: "/leads/stage/contacted", type: "link", active: false, selected: false, dirchange: false, title: "Contacted" },
      { path: "/leads/stage/site-visit", type: "link", active: false, selected: false, dirchange: false, title: "Site Visit" },
      { path: "/leads/stage/negotiation", type: "link", active: false, selected: false, dirchange: false, title: "Negotiation" },
      { path: "/leads/stage/closed", type: "link", active: false, selected: false, dirchange: false, title: "Closed" }
    ]
  },
  {
    title: "Deals", icon: Svgicons.Stockicon, type: "sub", active: false, selected: false, dirchange: false, children: [
      { path: "/deals/list", type: "link", active: false, selected: false, dirchange: false, title: "All Deals" },
      { path: "/deals/stage/token-paid", type: "link", active: false, selected: false, dirchange: false, title: "Token Paid" },
      { path: "/deals/stage/agreement", type: "link", active: false, selected: false, dirchange: false, title: "Agreement Signed" },
      { path: "/deals/stage/registered", type: "link", active: false, selected: false, dirchange: false, title: "Registered" },
      { path: "/deals/stage/cancelled", type: "link", active: false, selected: false, dirchange: false, title: "Lost / Cancelled" }
    ]
  },
  {
    title: "Contacts", icon: Svgicons.Hrmicon, type: "sub", active: false, selected: false, dirchange: false, children: [
      { path: "/contacts/list", type: "link", active: false, selected: false, dirchange: false, title: "All Contacts" },
      { path: "/contacts/followups", type: "link", active: false, selected: false, dirchange: false, title: "Follow-ups" },
      { path: "/contacts/import", type: "link", active: false, selected: false, dirchange: false, title: "Bulk Import" }
    ]
  },
  {
    title: "Calls / CDR", icon: Svgicons.Chaticon, type: "sub", active: false, selected: false, dirchange: false, children: [
      { path: "/calls/records", type: "link", active: false, selected: false, dirchange: false, title: "Call Records" },
      { path: "/calls/lists", type: "link", active: false, selected: false, dirchange: false, title: "Call Lists" },
      { path: "/calls/lists/contacts", type: "link", active: false, selected: false, dirchange: false, title: "Call Contacts" }
    ]
  },
  {
    title: "Tasks", icon: Svgicons.Taskicon, type: "sub", active: false, selected: false, dirchange: false, children: [
      { path: "/calendar/events", type: "link", active: false, selected: false, dirchange: false, title: "Calendar" },
      { path: "/tasks/list", type: "link", active: false, selected: false, dirchange: false, title: "Tasks" },
      { path: "/reminders/list", type: "link", active: false, selected: false, dirchange: false, title: "Reminders" }
    ]
  },
  {
    title: "Notes", icon: Svgicons.Blogicon, path: "/notes/list", type: "link", active: false, selected: false, dirchange: false
  },
  {
    title: "Campaigns", icon: Svgicons.Emailicon, type: "sub", active: false, selected: false, dirchange: false, children: [
      { path: "/campaigns/list", type: "link", active: false, selected: false, dirchange: false, title: "Campaigns" },
      { path: "/campaigns/create", type: "link", active: false, selected: false, dirchange: false, title: "Create Campaign" },
      {
        title: "Message Templates", type: "sub", active: false, selected: false, dirchange: false, children: [
          { path: "/campaigns/templates/sms", type: "link", active: false, selected: false, dirchange: false, title: "SMS" },
          { path: "/campaigns/templates/email", type: "link", active: false, selected: false, dirchange: false, title: "Email" },
          { path: "/campaigns/templates/whatsapp", type: "link", active: false, selected: false, dirchange: false, title: "WhatsApp" }
        ]
      },
      { path: "/campaigns/logs", type: "link", active: false, selected: false, dirchange: false, title: "Delivery Logs" }
    ]
  },
  {
    title: "Projects", icon: Svgicons.Projectsicon, type: "sub", active: false, selected: false, dirchange: false, children: [
      { path: "/projects/list", type: "link", active: false, selected: false, dirchange: false, title: "My Projects" },
      { path: "/projects/create", type: "link", active: false, selected: false, dirchange: false, title: "Add Project" }
    ]
  },
  {
    title: "Resale", icon: Svgicons.Ecommerceicon, type: "sub", active: false, selected: false, dirchange: false, children: [
      { path: "/resale/properties", type: "link", active: false, selected: false, dirchange: false, title: "Properties" },
      { path: "/resale/properties/add", type: "link", active: false, selected: false, dirchange: false, title: "Add Property" },
      { path: "/resale/customers", type: "link", active: false, selected: false, dirchange: false, title: "Customers" },
      { path: "/resale/customers/add", type: "link", active: false, selected: false, dirchange: false, title: "Add Customer" },
      { path: "/resale/deals", type: "link", active: false, selected: false, dirchange: false, title: "Deals" },
      { path: "/resale/reports", type: "link", active: false, selected: false, dirchange: false, title: "Reports" }
    ]
  },
  {
    title: "Rentals", icon: Svgicons.Generalicon, type: "sub", active: false, selected: false, dirchange: false, children: [
      { path: "/rentals/properties", type: "link", active: false, selected: false, dirchange: false, title: "Properties" },
      { path: "/rentals/properties/add", type: "link", active: false, selected: false, dirchange: false, title: "Add Property" },
      { path: "/rentals/tenants", type: "link", active: false, selected: false, dirchange: false, title: "Tenants" },
      { path: "/rentals/tenants/add", type: "link", active: false, selected: false, dirchange: false, title: "Add Tenant" },
      { path: "/rentals/agreements", type: "link", active: false, selected: false, dirchange: false, title: "Agreements" },
      { path: "/rentals/bookings", type: "link", active: false, selected: false, dirchange: false, title: "Bookings" },
      { path: "/rentals/reports", type: "link", active: false, selected: false, dirchange: false, title: "Reports" }
    ]
  },
  {
    title: "Builders", icon: Svgicons.Applicationicon, type: "sub", active: false, selected: false, dirchange: false, children: [
      { path: "/builders/list", type: "link", active: false, selected: false, dirchange: false, title: "My Builders" },
      { path: "/builders/add", type: "link", active: false, selected: false, dirchange: false, title: "Add Builder" }
    ]
  },
  {
    title: "Team", icon: Svgicons.Hrmicon, type: "sub", active: false, selected: false, dirchange: false, children: [
      { path: "/team/list", type: "link", active: false, selected: false, dirchange: false, title: "Staff Members" },
      { path: "/team/add", type: "link", active: false, selected: false, dirchange: false, title: "Add Staff" },
      { path: "/team/attendance", type: "link", active: false, selected: false, dirchange: false, title: "Attendance" }
    ]
  },
  {
    title: "Brokers", icon: Svgicons.Teamicon, type: "sub", active: false, selected: false, dirchange: false, children: [
      { path: "/brokers/list", type: "link", active: false, selected: false, dirchange: false, title: "My Brokers" },
      { path: "/brokers/add", type: "link", active: false, selected: false, dirchange: false, title: "Add Broker" },
      { path: "/brokers/commissions", type: "link", active: false, selected: false, dirchange: false, title: "Commissions" },
      { path: "/brokers/payouts", type: "link", active: false, selected: false, dirchange: false, title: "Payouts" },
      { path: "/brokers/visits", type: "link", active: false, selected: false, dirchange: false, title: "Visits" }
    ]
  },
  {
    title: "Reports", icon: Svgicons.Chartsicon, type: "sub", active: false, selected: false, dirchange: false, children: [
      { path: "/reports/leads", type: "link", active: false, selected: false, dirchange: false, title: "Lead Reports" },
      { path: "/reports/sales", type: "link", active: false, selected: false, dirchange: false, title: "Sales Reports" },
      { path: "/reports/broker", type: "link", active: false, selected: false, dirchange: false, title: "Broker Reports" },
      { path: "/reports/calls", type: "link", active: false, selected: false, dirchange: false, title: "Call Reports" }
    ]
  },
  {
    title: "Audit", icon: Svgicons.Blogicon, path: "/audit/logs", type: "link", active: false, selected: false, dirchange: false
  },
  {
    title: "Notifications", icon: Svgicons.Sweeticon, path: "/notifications", type: "link", active: false, selected: false, dirchange: false
  },
  {
    title: "Settings", icon: Svgicons.Utilitiesicon, type: "sub", active: false, selected: false, dirchange: false, children: [
      { path: "/settings/company", type: "link", active: false, selected: false, dirchange: false, title: "Company Profile" },
      { path: "/settings/branding", type: "link", active: false, selected: false, dirchange: false, title: "Branding" },
      { path: "/settings/attendance", type: "link", active: false, selected: false, dirchange: false, title: "Attendance Settings" },
      { path: "/settings/roles", type: "link", active: false, selected: false, dirchange: false, title: "Roles & Permissions" },
      { path: "/settings/notifications", type: "link", active: false, selected: false, dirchange: false, title: "Notification Settings" },
      { path: "/settings/legal", type: "link", active: false, selected: false, dirchange: false, title: "Legal Documents" },
      { path: "/settings/legal/acceptance", type: "link", active: false, selected: false, dirchange: false, title: "Legal Acceptance Logs" }
    ]
  },
  {
    title: "Subscription", icon: Svgicons.Pricingicon, type: "sub", active: false, selected: false, dirchange: false, children: [
      { path: "/subscription/plan", type: "link", active: false, selected: false, dirchange: false, title: "My Plan" },
      { path: "/subscription/users", type: "link", active: false, selected: false, dirchange: false, title: "User Billing" },
      { path: "/subscription/invoices", type: "link", active: false, selected: false, dirchange: false, title: "Invoices & Payments" }
    ]
  },
  {
    title: "Credits", icon: Svgicons.Generalicon, type: "sub", active: false, selected: false, dirchange: false, children: [
      { path: "/credits/messaging", type: "link", active: false, selected: false, dirchange: false, title: "Messaging Credits" },
      { path: "/credits/storage", type: "link", active: false, selected: false, dirchange: false, title: "Storage Credits" }
    ]
  },
  {
    title: "Support", icon: Svgicons.Sweeticon, path: "/support/tickets", type: "link", active: false, selected: false, dirchange: false
  }
]