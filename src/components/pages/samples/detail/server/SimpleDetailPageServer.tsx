import SimpleDetailPageClient from '@/src/components/pages/samples/detail/client/SimpleDetailPageClient'
import { SampleDetailPageProps } from '@/src/types/pages/sample'

export default function SimpleDetailPageServer({ id }: SampleDetailPageProps) {
	return <SimpleDetailPageClient id={id} />
}
