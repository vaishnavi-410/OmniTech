// ✅ Valid metadata export (server file)
export const metadata = {
  title: "About Us | OmniTech",
  description: "Future-forward company committed to innovation and sustainability.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>; // just wraps children, doesn't affect layout
}
