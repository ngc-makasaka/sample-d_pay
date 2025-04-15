import qs from 'query-string'

import { ENDPOINTS } from '@/src/constants/endpoints'
import { localAxios } from '@/src/libs/axios'
import { BaseResponse } from '@/src/types/api/base'
import {
	SampleListQuery,
	SampleListResponse,
	SampleResultResponse,
} from '@/src/types/api/sample'

export const sampleApis = {
	fetch: (query?: SampleListQuery) => {
		const url = qs.stringifyUrl({
			url: ENDPOINTS.samples.list,
			query: {
				page: query?.page,
				limit: query?.limit,
			},
		})
		const res = localAxios.get<SampleListResponse>(url)
		return res
	},

	find: (id: BaseResponse['id']) => {
		const url = ENDPOINTS.samples.detail(id)
		const res = localAxios.get<SampleResultResponse>(url)
		return res
	},

	post: () => {},

	put: () => {},

	delete: () => {},
}
