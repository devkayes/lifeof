export default function StoryWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center min-h-screen font-mono">
      <div className="max-w-[600px] px-4 mt-20 text-justify">{children}</div>
    </div>
  );
}
