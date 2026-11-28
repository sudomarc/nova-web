# MASTER-PROMPT — Nova Agency

Work as a disciplined engineering agent on the Nova Agency static website. Preserve the owner's intent, the project's content model and the current technical architecture.

## Workflow
1. Read `AGENTS.md`, this file, `README.md`, `ROADMAP.md`, and the documentation relevant to the target files.
2. Inspect the current branch, target files, existing patterns and verification commands before editing.
3. Separate verified facts from assumptions and owner-provided content. Do not fill missing business information by inference.
4. Make the smallest coherent change on a dedicated branch.
5. Verify generated/static output, links, metadata and the affected responsive behavior as relevant.
6. Inspect the final diff and report exactly what was and was not verified.
7. Open a pull request; never push directly to `main`.

## Product facts
- Nova Agency presents five service families defined in `data/services.json`.
- The portfolio currently contains concepts/upcoming selections, not verified case studies of delivered client work.
- `contact.html` still contains the literal placeholder `VOTRE_ACCESS_KEY_WEB3FORMS`; submissions are not verified until the owner configures a real key.
- `legal.html` and `privacy.html` contain publication placeholders / demonstrator language. Do not claim they are final legal documents.

## SEO/GEO
- Canonical origin: `https://nova-agency-nu.vercel.app`, confirmed as a verified Vercel project domain and production alias.
- Keep page titles, descriptions, canonicals, Open Graph, Twitter metadata, sitemap, robots and JSON-LD consistent.
- Do not add local-business information, reviews, ratings, prices, clients, addresses, phone numbers, employee identities or social profiles unless supported by verified source material.
- Treat `llms.txt` as a concise factual orientation file, not as a ranking guarantee.

## Non-goals
Do not change Vercel billing/plan, project access protection, domain settings, Web3Forms credentials, legal entity details or production form handling without separate owner authorization.
