import { ReactNode } from "react"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

export interface componentRenderProps {
    route?: string
}

export const componentRender = (component: ReactNode, options: componentRenderProps = {}) =>
{
	const { route = '/' } = options;
	return render(
			<MemoryRouter initialEntries={[route]}>
					{component}
			</MemoryRouter>)
}
