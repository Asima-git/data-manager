import { assets } from "../assets/assets";

export const signFormControls = [
    {
      name: "first_name",
      label: "First Name",
      componentType: "input",
      type: "text",
      icon:`${assets.profile_logo}`
    },
    {
      name: "last_name",
      label: "Last Name",
      componentType: "input",
      type: "text",
      icon:`${assets.profile_logo}`
    },
    {
      name: "contact_no",
      label: "Contact Number",
      componentType: "input",
      type: "tel",
      icon:`${assets.phone_logo}`
    },
    {
      name: "whatsapp_no",
      label: "WhatsApp Number",
      componentType: "input",
      type: "tel",
      icon:`${assets.whatsapp_logo}`
    },
    {
      name: "email",
      label: "Email Address",
      componentType: "input",
      type: "email",
      icon:`${assets.mail_logo}`
    },
    {
      name: "state",
      label: "State",
      componentType: "input",
      type: "text",
      icon:`${assets.mail_logo}`
    },
    {
      name: "referral_code",
      label: "Referral Code",
      componentType: "input",
      type: "text",
      icon:`${assets.profile_logo}`
    },
    {
      name: "password",
      label: "Password",
      componentType: "input",
      type: "password",
      icon:`${assets.eye}`
    },
    {
      name: "confirm_password",
      label: "Confirm Password",
      componentType: "input",
      type: "password",
      icon:`${assets.eye}`
    },
  ];

  export const loginFormControls = [
    {
        name : "email",
        label : "Username",
        componentType:'input',
        type:'email',
        icon:`${assets.mail_logo}`
    },
    {
        name : "password",
        label : "Password",
        componentType:'input',
        type:'password',
        icon:`${assets.eye}`
    }, 
]

export const userDashboardMenu = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/user/dashboard",
  },
  {
    id: " business_partners",
    label: "Business Partners",
    path: "/user/business-partners",
  },
  {
    id: "business_promoters",
    label: "Business Promoters",
    path: "/user/business-promoters",
  },
  {
    id: "new_requests",
    label: "New Requests",
    path: "/user/new-requests",
  },
  {
    id: "invoice",
    label: "Invoice",
    path: "/user/invoice",
  },
  {
    id: "renewal",
    label: "Renewal",
    path: "/user/renewal",
  },
]

export const adminMenu = [
  {
    id: "user_list",
    label: "User List",
    path: "/admin/user-list",
  },
  {
    id: "transaction_list",
    label: "Transaction List",
    path: "/admin/transaction-list",
  },
  {
    id: "video_management",
    label: "Video Management",
    path: "/admin/video-management",
  },
  {
    id: "top_receivers_list",
    label: "Top Receivers List",
    path: "/admin/top-receivers-list",
  },
]