export const removeChildren = (value) => {
  value.forEach((item) => {
    if (item.children && item.children.length <= 0) {
      delete item.children
    }
    if (item.children && item.children.length > 0) {
      removeChildren(item.children)
    }
  })
  return value
}
