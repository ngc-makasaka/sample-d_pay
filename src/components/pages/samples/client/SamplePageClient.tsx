'use client'
import cx from 'classnames'
import Link from 'next/link'

import { URLS } from '@/src/constants/urls'
import { useSampleList } from '@/src/hooks/api/sample'

import style from './SamplePageClient.module.scss'

export default function SamplePageClient() {
	const { data, isLoading, error } = useSampleList()

	if (isLoading) {
		return <div>...loading</div>
	} else if (error) {
		return <div>エラーが発生しました</div>
	} else {
		return (
			<div>
				{data?.results.map((result) => (
					<Link href={URLS.samples.detail(result.id)} key={result.id}>
						<p className={cx(style['test'])} key={result.id}>
							{result.message}
						</p>
					</Link>
				))}
				<Link href="/">
					<button>戻る</button>
				</Link>
			</div>
		)
	}
}
