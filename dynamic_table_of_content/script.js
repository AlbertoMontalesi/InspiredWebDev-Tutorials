document.addEventListener('DOMContentLoaded', () => {
    const headings = document.querySelectorAll('#content h3');
    if (headings && headings.length) {

        let tableOfContentInner = '';
        headings.forEach((heading, i) => {
            // generate an 'li' element that includes a link to the appropriate section
            tableOfContentInner += `<li><a href="#section_${i}">${heading.textContent}</a></li>`
            const originalHeadingContent = heading.innerHTML;
            const anchor = `<a class="offset-anchor" id="section_${i}"></a>`
                // add the anchor to the <h3> tag
            heading.innerHTML = anchor + originalHeadingContent
        })

        const tableOfContent = `<ol>${tableOfContentInner}</ol>`
            // add the generated table of content to the dive
        document.querySelector('#table-of-content').innerHTML += tableOfContent


        // automatically go to the correct section on load
        if (location.hash) {
            const target = location.hash;
            const offsetY = document.querySelector(target).offsetTop;
            window.scrollTo(0, offsetY);
        }

    }

})