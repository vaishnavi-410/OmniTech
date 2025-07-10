import '../globals.css';

export const metadata = {
  title: 'Contact Us - DelXN Technologies',
  description: 'Get in touch with us via phone, email or visit us!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
