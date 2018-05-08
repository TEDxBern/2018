import {shallow} from "enzyme"
import React from "react"
import renderer from "react-test-renderer"

import IndexPage from "../../pages/index.js"
const indexPage = shallow(<IndexPage />)

describe("index page", () => {
  it('shows "Hello, world!"', () => {
    expect(indexPage.find("p").text()).toEqual("Hello, world!")
  })
  it("matches the snapshot", () => {
    const component = renderer.create(<indexPage />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
