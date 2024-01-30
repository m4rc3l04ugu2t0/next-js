export default function LayoutComplexDashboard({
  children,
  notifications,
  revenues,
  user,
  login
}: {
  children: React.ReactNode
  notifications: React.ReactNode
  revenues: React.ReactNode
  user: React.ReactNode
  login: React.ReactNode
}) {
  const isLoggedIn = false

  return isLoggedIn ? (
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
  ) : (
    login
  )
}
