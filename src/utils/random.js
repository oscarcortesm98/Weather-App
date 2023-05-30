export const getRandom = (elements) => {
const randomIndex = Math.floor(Math.random() * elements.length)
return elements[randomIndex]
};