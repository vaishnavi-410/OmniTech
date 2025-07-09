"use client";

import Layout from "./src/layout";   // 👈 your custom layout with header/footer
import Page from "./src/page";       // 👈 your actual About Us content
import "./src/globals.css";          // 👈 your custom styles and animations

export default function AboutPage() {
  return (
    <Layout>
      <Page />
    </Layout>
  );
}
