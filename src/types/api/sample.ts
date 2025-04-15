import { BaseListResponse, BaseResponse } from '@/src/types/api/base'

export interface SampleListQuery {
	page: number
	limit: number
}

export type SampleListResponse = BaseListResponse<SampleResultResponse>

export interface SampleResultResponse extends BaseResponse {
	message: string
}
