const tabItems = document.querySelectorAll(".tab-item")
const tabContentItems = document.querySelectorAll(".tab-content-item")

tabItems.forEach(item => item.addEventListener("click", e => {
    removeBorder();
    removeShow();
    item.classList.add("tab-border")
    const tabContentItem = document.getElementById(`${item.id}-content`)
    console.log(tabContentItem)
    tabContentItem.classList.add("show")
}))

const removeBorder = () => {
    tabItems.forEach(item => item.classList.remove("tab-border"))
}

const removeShow = () => {
    tabContentItems.forEach(item => item.classList.remove("show"))
}
