import { classNames } from "./classNames"

describe("classNames", () => {
    test("With only first class", () => {
        expect(classNames('class')).toBe("class")
    })

    test("With additional class", () => {
        const expected = "class1 class2 class3"
        expect(classNames('class1', { class2: true, class3: true})).toBe(expected)
    })

    test("With mods", () => {
        const expected = "class1 class2 class3 draggable hovered"
        expect(classNames('class1', { draggable: true, hovered: true}, ['class2', 'class3'])).toBe(expected)
    })
})
