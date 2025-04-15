import SimpleDetailPageServer from '@/src/components/pages/samples/detail/server/SimpleDetailPageServer'
import { AppRouterProps } from '@/src/types/pages/common'

export default async function SamplePage({ params }: AppRouterProps) {
	console.log(params)
	const { id } = await params
	return <SimpleDetailPageServer id={id} />
}
