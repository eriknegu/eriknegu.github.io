# Erik Nepomnjastsih — CV Website

A personal CV website developed for **Hypermedia Project — Part 1**, as part of the *Multimedia and User Interfaces* course at the **University of Girona**. The website presents my education, technical skills, public GitHub work, professional experience and contact information.

**Website (GitHub Pages):** https://eriknegu.github.io/  
**Figma design:** https://www.figma.com/design/b5psAkWxdoEPssfg5nxAzU/CV-Web?node-id=0-1

## Project Analysis — User Persona

**Marta, 32 — Junior IT recruiter**

Marta works for a software company and reviews applications for internships and junior developer positions. She usually has limited time to assess each candidate, so she needs to understand their background without searching through several pages. She wants to identify their current studies, technical skills, previous experience and contact details, as well as access examples of their work when available.

She normally uses a desktop or laptop computer, although she may revisit a candidate's profile on her phone. She values clear navigation, concise descriptions and working links. Overly decorative layouts, unclear skill claims and information that is difficult to locate can make her review less effective. For this reason, the website aims to communicate my interest in software development while remaining straightforward to browse for someone who is not necessarily a programmer.

## Project Analysis — Information Architecture

I organised the website as a **single-page CV** divided into six main sections: About Me, Technical Stack, Projects, Experience, Education and Contact. This structure allows visitors to move between topics without opening separate pages, while the sidebar provides a direct link to each section. The current section is highlighted as the visitor scrolls, making it easier to keep track of their position on a relatively long page. On smaller screens, the navigation adapts to a more compact layout.

The opening area introduces me as a Computer Engineering student at the University of Girona. It combines a short description of my interests with links to my projects and GitHub profile. A small `developer.js` panel presents basic information using the visual language of programming; it complements the introduction rather than replacing the text. Below it, a short summary highlights my university studies, English qualification and professional background.

I placed **About Me** first to provide context, followed by **Technical Stack** and **Projects**, because these sections are particularly relevant to the intended audience. The projects section links to my public `EnginyeriaSoftwareII` repository and to my GitHub profile without introducing a large portfolio gallery. **Experience** then presents my jobs in reverse chronological order, with an expandable area for earlier roles. **Education** brings together my academic history and languages, while **Contact** appears at the end with the information needed to get in touch.

The same structure is available in **Catalan and English** through a small `CA / EN` selector. Changing the language does not change the order of the sections or the available links. This keeps the information consistent for both local and international visitors.

## Project Analysis — Visual Design

The visual design is inspired by the appearance of a **code editor and a terminal**, reflecting my interest in computing without turning the CV into a simulated programming environment. I chose a restrained dark palette with a nearly black-blue background, slightly lighter surfaces and thin separators. A muted turquoise accent identifies links, section numbers and important actions. Keeping the colour palette limited helps maintain visual consistency and prevents decorative elements from competing with the content.

I use **DM Sans** for headings and body text because it is clear and comfortable to read, and **JetBrains Mono** for smaller technical details such as navigation numbers, dates and the `developer.js` panel. This combination suggests a developer's workspace while retaining the readability expected from a professional CV. The layout relies on spacing, typography and numbered section labels to establish hierarchy rather than on illustrations or elaborate project cards. The sidebar gives the page a recognisable structure, while the main content follows a simple vertical reading order.

The design was prepared in **Figma** using Auto Layout for related elements, reusable components for repeated patterns and colour variables with names that correspond to those used in the CSS. This makes the layout easier to adjust consistently instead of manually repositioning independent groups. In the implementation, **CSS Grid** manages the main page structure and multi-column areas, while **Flexbox** aligns navigation elements, links and smaller groups. Responsive adjustments allow the content to remain readable on narrower screens, although the desktop layout is the main design reference.

I kept a single dark theme rather than adding an unnecessary visual mode. The **Catalan/English selector** provides a useful interaction without altering the design itself. Overall, I wanted the website to feel technical and personal, but also organised, accessible and appropriate for presenting my CV to someone reviewing a potential candidate.
