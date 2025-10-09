'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  endPage: number
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
    endPage
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '5'


  return (
    <div className='flex items-center gap-2'>
      <button
        className=' rounded-2xl p-2 w-20 hover:bg-gray-300 bg-gray-200/60  text-black/80'
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/providers/?page=${Number(page) - 1}&per_page=${per_page}`)
        }}>
        Prev 
      </button>

      <div>
        {page} / {Math.ceil(endPage / Number(per_page))}
      </div>

      <button
        className='rounded-2xl p-2  w-20 hover:bg-gray-300 bg-gray-200/60  text-black/80'
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/providers/?page=${Number(page) + 1}&per_page=${per_page}`)
        }}>
        Next
      </button>
    </div>
  )
}

export default PaginationControls