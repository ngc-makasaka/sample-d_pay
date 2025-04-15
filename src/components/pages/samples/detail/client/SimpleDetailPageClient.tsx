'use client'

import Link from 'next/link'

import { URLS } from '@/src/constants/urls'
import { useFindSample } from '@/src/hooks/api/sample'
import { SampleDetailPageProps } from '@/src/types/pages/sample'

export default function SimpleDetailPageClient({ id }: SampleDetailPageProps) {
	const { data, isLoading, error } = useFindSample(id)

	if (isLoading) {
		return <div>...loading</div>
	} else if (error) {
		return <div>エラーが発生しました</div>
	} else {
		return (
			<div>
				<div>{data?.message}</div>
				<Link href={URLS.samples.list}>
					<button>一覧に戻る</button>
				</Link>
			</div>
		)
	}
}
