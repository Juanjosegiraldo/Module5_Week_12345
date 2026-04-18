export const metadata = {
  title: "Properties CRUD",
  description: "Properties CRUD with Next.js, MongoDB and Mongoose",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
