# Artin Portfolio — Project Instructions

## Purpose of this repository

This repository contains Artin Karimi's personal website.

This is not intended to be a generic developer portfolio, a résumé converted into a website, a visual experiment with no business purpose, or a template-driven showcase.

The website is a real product with a specific business goal:

Create a highly polished, memorable, credible personal website that helps potential employers, recruiters, freelance clients, and relevant collaborators understand Artin's work, trust his ability, and feel motivated to contact him.

The website itself is part of the proof of Artin's frontend ability.

Read `/docs/00-product-constitution.md` before making product, UX, visual, content, architectural, or implementation decisions.

---

## Core operating rule

Do not optimize for novelty by itself.

Every feature, visual treatment, animation, interaction, dependency, abstraction, section, and technical decision must have a concrete reason connected to at least one of these goals:

* improve clarity
* demonstrate craftsmanship
* strengthen credibility
* improve usability
* improve presentation of real work
* improve accessibility
* improve performance
* improve maintainability
* make contacting Artin easier

If something is visually impressive but makes the website harder to understand, slower, less accessible, less usable, or more distracting, it should not be used.

---

## Development workflow

This project must be developed deliberately and incrementally.

Do not attempt to build the entire website in one task.

Work in small, reviewable stages.

For each significant task:

1. Understand the relevant project documentation.
2. Inspect the existing code before changing it.
3. Make only the changes required for the current stage.
4. Avoid unrelated refactors.
5. Validate the result.
6. Report exactly what changed.
7. Stop when the requested stage is complete.

Never continue automatically into a later phase unless explicitly requested.

---

## Current project phase

The project is currently in its foundation and planning phase.

Until explicitly instructed otherwise:

* do not initialize the application
* do not choose the final framework
* do not choose the final styling solution
* do not install dependencies
* do not create components
* do not implement visual designs
* do not invent the final sitemap
* do not invent final marketing copy

Technical choices must follow product requirements, not precede them.

---

## Product philosophy

The website should communicate this progression:

Impressive → Clear → Credible → Hireable

The desired final reaction is not merely:

"This website looks cool."

It is:

"This person cares about details, has built real things, understands how products should feel, and I would like to talk to him about working together."

The website must work for both technical and non-technical visitors.

A visitor should not need to understand React, APIs, deployment, or frontend terminology to understand the value of Artin's work.

Technical depth may exist as a secondary layer for developers, technical recruiters, or engineering teams.

---

## Design direction

The current approved high-level direction is:

* dark-first
* premium
* editorial
* product-oriented
* modern
* calm
* precise
* visually confident
* highly polished
* strong typography
* strong hierarchy
* generous spacing
* large, high-quality project presentation
* subtle depth
* controlled motion
* intentional interaction

Dark-first does NOT mean stereotypical "developer dark mode."

The visual system must not default to clichés such as:

* Matrix green
* neon-on-black cyberpunk
* fake terminals
* code rain
* hacker aesthetics
* excessive glassmorphism
* excessive gradients
* glowing borders everywhere
* generic SaaS cards
* giant stacks of rounded feature cards
* arbitrary 3D objects
* decorative technical noise
* excessive blur
* custom cursors that reduce usability
* scroll hijacking
* animation on every element
* effects whose only justification is "it looks cool"

The website should still look excellent in a static screenshot.

Animation must enhance good design, not compensate for weak design.

Final colors, typography, exact composition, and motion language have not yet been selected.

Do not invent them until the relevant design phase.

---

## Content principles

The website is English-first.

English copy should feel:

* natural
* fluent
* conversational
* confident
* concise
* professional without sounding corporate
* human rather than AI-generated
* free of unnecessary formal or academic vocabulary

Avoid generic portfolio language such as:

* "Hi, I'm Artin"
* "I'm passionate about..."
* "I turn ideas into digital experiences"
* "I create beautiful and functional websites"
* "Clean code"
* "Creative solutions"
* "Fast learner"
* "Problem solver"
* percentage-based skill bars
* unsupported self-praise

Claims should be demonstrated through evidence wherever possible.

---

## Localization

The default language is English.

The website must also support Persian.

Persian must be treated as a first-class localized experience, not as an afterthought.

When Persian is active:

* document language must be Persian
* direction must be RTL
* layout behavior must properly support RTL
* text alignment and directional UI must make sense
* components must remain visually intentional
* localization must not break hierarchy or spacing

Do not represent language selection using country flags.

A language control such as EN / فا is preferred conceptually, but its final interaction and visual implementation must be designed later.

---

## Audience

Primary audience:

* employers
* hiring decision-makers
* freelance clients

Secondary audience:

* recruiters
* developers
* potential technical collaborators

The primary audience may not understand technical terminology.

Always preserve a clear non-technical explanation of Artin's work.

---

## Conversion goal

The main business outcome is meaningful contact.

Visitors should be able to contact or continue following Artin through appropriate channels.

Expected relevant destinations include:

* Telegram — direct collaboration/contact
* LinkedIn — professional connection
* GitHub — technical work/code
* Instagram — personal brand, building journey, and content

Do not reduce these to meaningless footer icons if stronger contextual presentation is appropriate.

The final CTA system will be designed later.

---

## "Why Artin?" principle

The website needs a strong answer to:

"Why should I choose this developer?"

Do not answer this with generic marketing claims.

The current proof themes are:

1. Artin builds beyond the happy path.
   Real products include errors, loading states, edge cases, production differences, deployment issues, integrations, and unexpected failures.

2. Artin cares about how a product feels, not only whether it technically works.
   Frontend quality includes visual polish, interaction, responsiveness, usability, states, accessibility, and perceived quality.

3. Artin stays with the problem until something usable ships.
   The emphasis is on moving from an idea or problem to a working real-world result.

These are proof themes, not necessarily final headings or final marketing copy.

Do not turn them into generic feature cards without an explicit design decision.

---

## Work presentation

Projects must not be reduced to identical portfolio cards containing only:

* screenshot
* project title
* technology list
* View Project button

Important work should be presented as evidence.

A non-technical visitor should be able to understand:

* what needed to be built or fixed
* what Artin did
* why it mattered
* what the final result was

A technical visitor may optionally go deeper into:

* architecture
* stack
* engineering decisions
* implementation challenges
* trade-offs
* GitHub/code
* deployment details

This is progressive disclosure: simple first, deeper when requested.

Known real projects that may later be considered include Innoverse and Jazireh, but their final inclusion, ordering, and presentation have not yet been decided.

---

## Personal presence

Artin should be present as a real person, but the website must not become a personality-photo portfolio.

Current direction:

* a small, intentional personal photo may be used
* work and thinking remain the primary focus
* biography should be concise and purposeful
* personal presence should increase trust and memorability

Do not design a giant portrait-led hero unless explicitly approved later.

---

## Engineering quality

The finished product must prioritize:

* semantic HTML
* responsive behavior
* accessibility
* keyboard usability
* visible focus states
* appropriate color contrast
* reduced-motion support
* performance
* maintainability
* SEO fundamentals
* correct metadata
* stable layouts
* optimized assets
* production-quality error handling

Target WCAG level: WCAG 2.2 AA where reasonably applicable.

Core Web Vitals should target a "good" experience, including approximately:

* LCP <= 2.5 seconds
* INP <= 200 milliseconds
* CLS <= 0.1

Performance is part of the portfolio proof.

Do not add a heavy dependency for a small effect that can reasonably be implemented without it.

---

## Code quality

When implementation begins:

* prefer clear code over clever code
* avoid premature abstraction
* avoid unnecessary dependencies
* do not introduce architectural complexity without a reason
* use consistent naming
* keep components focused
* separate content/data from presentation when useful
* maintain a coherent design system
* avoid magic values when shared tokens are appropriate
* preserve accessibility while implementing interactions
* test responsive states instead of assuming them

Do not refactor unrelated working code during focused tasks.

---

## Git discipline

Do not commit or push unless explicitly requested.

When commits are requested, use meaningful conventional-style messages where appropriate.

Avoid meaningless messages such as:

* update
* changes
* fix
* final
* final2

Examples of appropriate intent:

* `docs: define portfolio product strategy`
* `feat: implement homepage hero`
* `fix: preserve RTL layout in project navigation`

Never rewrite existing Git history unless explicitly instructed.

---

## Decision discipline

Do not silently make major product decisions.

If a task requires choosing among materially different options in:

* architecture
* framework
* navigation
* content structure
* animation model
* visual language
* major dependency
* localization architecture

and the choice has not already been documented or explicitly requested, stop at the decision boundary and report the options rather than arbitrarily choosing one.

Small implementation details that clearly follow existing decisions may be handled without interruption.

---

## Source of truth

Project decisions should progressively be recorded in `/docs`.

Do not rely on chat history as the only source of project truth.

If a newer approved document conflicts with an older exploratory note, follow the newer explicit decision.

`/docs/00-product-constitution.md` contains the highest-level product principles.

These principles should change rarely and only through deliberate decisions.
