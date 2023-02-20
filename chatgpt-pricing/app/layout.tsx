import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body style={{ backgroundImage: 'linear-gradient(-120deg, rgba(0, 0, 64, 1) 10%, rgba(28, 25, 88, 1) 20%, rgba(54, 46, 113, 1) 30%, rgba(80, 68, 138, 1) 40%, rgba(106, 92, 165, 1) 50%, rgba(133, 116, 192, 1) 60%, rgba(160, 142, 220, 1) 70%, rgba(187, 169, 249, 1) 80%, rgba(216, 196, 255, 1) 90%, rgba(245, 224, 255, 1) 100%); ' }}>
        {children}
      </body>
    </html>
  )
}
