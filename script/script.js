function openMenu() {
  document.getElementById("mobileMenu").classList.add("active");
}

function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("active");
}

function toggleCatalog(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector("span");

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    icon.textContent = "+";
  } else {
    document.querySelectorAll(".catalog-content").forEach(item => {
      item.style.maxHeight = null;
    });
    document.querySelectorAll(".catalog-header span").forEach(i => i.textContent = "+");

    content.style.maxHeight = content.scrollHeight + "px";
    icon.textContent = "−";
  }
}

