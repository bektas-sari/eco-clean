document.addEventListener("DOMContentLoaded", () => {
    // Mobil menü toggle
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll(".nav-links li")
  
    burger.addEventListener("click", () => {
      // Toggle Nav
      nav.classList.toggle("nav-active")
  
      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ""
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        }
      })
  
      // Burger Animation
      burger.classList.toggle("toggle")
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  
    // Form submission
    const form = document.querySelector("form")
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      // Burada form gönderme işlemi yapılabilir
      alert("Mesajınız gönderildi!")
      form.reset()
    })
  
    // Intersection Observer for fade-in effect
    const faders = document.querySelectorAll(".fade-in")
    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -100px 0px",
    }
  
    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        } else {
          entry.target.classList.add("appear")
          appearOnScroll.unobserve(entry.target)
        }
      })
    }, appearOptions)
  
    faders.forEach((fader) => {
      appearOnScroll.observe(fader)
    })
  
    // Header scroll effect
    const header = document.querySelector("header")
    let lastScrollTop = 0
  
    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (scrollTop > lastScrollTop) {
        header.style.top = "-80px"
      } else {
        header.style.top = "0"
      }
      lastScrollTop = scrollTop
    })
  })
  
  