const accSingleTriggers = document.querySelectorAll(".js-acc-single-trigger");
const accSingleTriggersContent = document.querySelectorAll(
  ".accordion-single-content"
);

accSingleTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleAccordion)
);

accSingleTriggersContent.forEach((trigger) =>
  trigger.addEventListener("click", toggleAccordion)
);

function toggleAccordion() {
  const items = document.querySelectorAll(".js-acc-item");
  const thisItem = this.parentNode;
  items.forEach((item) => {
    if (thisItem == item) {
      thisItem.classList.toggle("is-open");
      return;
    }
    item.classList.remove("is-open");
  });
}
