export default function LayoutComplexDashboard({
  children,
  notifications,
  revenues,
  user
}: {
  children: React.ReactNode
  notifications: React.ReactNode
  revenues: React.ReactNode
  user: React.ReactNode
}) {
  return (
    <div>
      <div>{children}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{user}</div>
          <div>{revenues}</div>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
      </div>
    </div>
  )
}
