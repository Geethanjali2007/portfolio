/* Portfolio behaviour: mobile menu, active nav link, scroll reveal, resume placeholder. */
(function () {
    'use strict';

    var header = document.querySelector('.site-header');
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav a'));

    /* ---- Mobile menu ---- */
    function setMenu(open) {
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        nav.classList.toggle('is-open', open);
    }

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            setMenu(toggle.getAttribute('aria-expanded') !== 'true');
        });

        // Close after choosing a link
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () { setMenu(false); });
        });

        // Close with Escape and return focus to the button
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
                setMenu(false);
                toggle.focus();
            }
        });

        // Close when clicking outside the header
        document.addEventListener('click', function (e) {
            if (header && !header.contains(e.target)) { setMenu(false); }
        });

        // Reset if the window grows past the mobile breakpoint
        window.addEventListener('resize', function () {
            if (window.innerWidth > 920) { setMenu(false); }
        });
    }

    /* ---- Header border once the page is scrolled ---- */
    function onScroll() {
        if (header) { header.classList.toggle('is-scrolled', window.scrollY > 8); }
        // The last section is short, so highlight it once the page bottom is reached.
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
            setActive('contact');
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---- Active section highlight ---- */
    var sections = navLinks
        .map(function (link) { return document.querySelector(link.getAttribute('href')); })
        .filter(Boolean);

    function setActive(id) {
        navLinks.forEach(function (link) {
            if (link.getAttribute('href') === '#' + id) {
                link.setAttribute('aria-current', 'true');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }

    if ('IntersectionObserver' in window && sections.length) {
        // A section counts as "current" while it crosses a band near the top of the viewport.
        var spy = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) { setActive(entry.target.id); }
            });
        }, { rootMargin: '-35% 0px -60% 0px', threshold: 0 });
        sections.forEach(function (section) { spy.observe(section); });
    }

    /* ---- Scroll reveal ---- */
    var revealItems = document.querySelectorAll('[data-reveal]');
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if ('IntersectionObserver' in window && !reduceMotion) {
        var reveal = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealItems.forEach(function (item) { reveal.observe(item); });
    } else {
        revealItems.forEach(function (item) { item.classList.add('is-visible'); });
    }

    /* ---- Resume placeholder ----
       While the link still points at the PLACEHOLDER file, show a message instead of a 404.
       Once you replace the href with your real PDF, this does nothing. */
    var resumeLink = document.querySelector('[data-resume]');
    var resumeStatus = document.getElementById('resume-status');
    if (resumeLink && resumeStatus) {
        resumeLink.addEventListener('click', function (e) {
            if (resumeLink.getAttribute('href').indexOf('PLACEHOLDER') !== -1) {
                e.preventDefault();
                resumeStatus.textContent = 'Resume not uploaded yet. Please email me and I will send it.';
            }
        });
    }
})();
