import Card from '@/components/card'
import Link from 'next/link'

export default function DefaultNotifications() {
  return (
    <Card>
      <div> Notifications Default</div>
      <Link href={'/complex-dashboard/archived'}>Archved</Link>
    </Card>
  )
}
