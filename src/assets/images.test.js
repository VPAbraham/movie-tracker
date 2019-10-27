import images from './images';

describe('images', () => {
  it('should store the left arrow image', () => {
    expect(images.leftArrow).toBe('left-arrow.png')
  })

  it('should store the right arrow image', () => {
    expect(images.rightArrow).toBe('right-arrow.png')
  })
})