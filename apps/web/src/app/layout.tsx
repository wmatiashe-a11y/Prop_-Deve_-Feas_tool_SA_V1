export const metadata = {
  title: "Prop Dev Feas Tool",
  description: "Property development feasibility tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
