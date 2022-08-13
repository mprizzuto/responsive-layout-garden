window.onscroll = function(ev) {
  if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
    window.scroll({
  top: 0,
  behavior: "smooth",
      });
  }
};