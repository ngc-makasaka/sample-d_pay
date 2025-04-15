export type PageIdProps = string

export interface AppRouterProps {
	params: Promise<{ id: PageIdProps }>
}
