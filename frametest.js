function initFrameTest() {
    const frame = document.querySelector('.app-frame'),
          sideNavElement = document.querySelector('.app-side-nav');

    Array.prototype.slice
        .call(
            document.querySelectorAll('.toggle-side-nav')
        )
        .forEach(function (element) {
            element.addEventListener('click', function (_evt) {
                sideNavElement.classList.toggle('side-nav-collapsed');
            });
        });
}

window.addEventListener('load', initFrameTest);
