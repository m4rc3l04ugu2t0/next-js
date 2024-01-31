import Image from 'next/image'
import luffyImages, { LuffyImage } from '../../../luffy'
import Modal from '@/components/modal'

export default function PhotoModal({
  params: { id }
}: {
  params: { id: string }
}) {
  const photo: LuffyImage = luffyImages.find((p) => p.id === id)!

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.description}</h3>
        <h3>{photo.reward}</h3>
      </div>
    </Modal>
  )
}
