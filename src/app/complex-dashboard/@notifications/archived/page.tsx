import Card from '@/components/card'
import Link from 'next/link'

export default function ArchvedNotifications() {
  return (
    <Card>
      <div> Notifications</div>
      <Link href={'/complex-dashboard'}>Complex Dashboard</Link>
    </Card>
  )
}
