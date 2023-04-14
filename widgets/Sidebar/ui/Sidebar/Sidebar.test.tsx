import { componentRender } from "../../../../shared/lib/test/componentRender/componentRender"
import { screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar"

describe('Sidebar', () => {
    test('renders SideBar', () => {
        componentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).ToBeInTheDocument()       
    })

})