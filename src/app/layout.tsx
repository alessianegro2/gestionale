import './styles.css';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        <title>San Cassiano</title>
      </head>
      <body>
        <div className='h-screen' style={{ width: '100%' }}>
          {children}
        </div>
      </body>  
    </html>  

  )
}
