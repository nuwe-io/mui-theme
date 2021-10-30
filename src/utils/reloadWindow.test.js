import reloadWindow from './reloadWindow'

describe("reloadWindow()", () => {
  test('calls reload function', () => {
    const location = window.location
    delete window.location
    window.location = {
      ...location,
      reload: jest.fn()
    }
    reloadWindow(false)
    expect(window.location.reload).toHaveBeenCalled()
    jest.restoreAllMocks()
    window.location = location
  })
})
