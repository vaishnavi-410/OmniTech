import {
  Bolt,
  CircleHelp,
  TriangleAlert,
  Users,
  Lock,
  Dessert,
  ShieldPlus,
  MessageCircle,
  Laptop,
  Database,
  House,
  Drill,
  BadgeInfo,
  Mail,
  PhoneOutgoing,
  QuestionCircle,
  HelpCircle,
  UserRound,
} from "lucide-react";

export const Menus = [
  {
    name: "Home",
    path: "/",
    icon: House,
  },
  {
    name: "About Us",
    icon: UserRound,
    path: "/about",
  },
  {
    name: "Product",
    gridCols: 4,
    subMenuHeading: [
      "Cutting",
      "Moulding / Grinding / Polishing",
      "Microscope and Image Analyzer",
      "Other Machines",
    ],
    subMenu: [
      {
        name: "Automatic Cutting Machines",
        desc: "Automatic cutters",
        icon: Drill,
        heading: "Cutting",
        path: "/products/automatic-cutting",
      },
      {
        name: "Precision Cutter",
        desc: "Fine cutting tools",
        icon: Bolt,
        heading: "Cutting",
        path: "/products/precision-cutter",
      },
      {
        name: "Polishing Wheel",
        desc: "Smooth finishes",
        icon: ShieldPlus,
        heading: "Moulding / Grinding / Polishing",
        path: "/products/polishing-wheel",
      },
      {
        name: "Digital Microscope",
        desc: "High-res imaging",
        icon: Laptop,
        heading: "Microscope and Image Analyzer",
        path: "/products/digital-microscope",
      },
      {
        name: "Image Analyzer Software",
        desc: "Detailed analysis",
        icon: Database,
        heading: "Microscope and Image Analyzer",
        path: "/products/image-analyzer",
      },
      {
        name: "Spectrometer",
        desc: "Elemental analysis",
        icon: BadgeInfo,
        heading: "Other Machines",
        path: "/products/spectrometer",
      },
    ],
  },
  {
    name: "FAQs",
    gridCols: 1,
    path:"/faqs",
  
  },
  {
   name: "Contact",
   icon: PhoneOutgoing,
   path: "/contact"
  },
];
